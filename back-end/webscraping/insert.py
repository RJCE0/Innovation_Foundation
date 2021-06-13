from dotenv import load_dotenv
from datetime import date
import datetime
import psycopg2
import os

global locations
with open(os.getcwd()+"/back-end/webscraping/locations.txt", 'r') as f:
    locations = [line.rstrip() for line in f]

# Create connection to database and set cursor for queries


def connectDB():

    # use env variables to connect to database
    try:
        load_dotenv()

        conn = psycopg2.connect(
            host=os.getenv("DB_HOST"),
            database=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASS"),
            port=os.getenv("DB_PORT"))

        cursor = conn.cursor()

    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        exit(1)

    return conn, cursor

# Disconnect cursor and database connection


def disconnectDB(conn, cursor):
    cursor.close()
    conn.close()

# Check it works


def check():
    conn, cursor = connectDB()
    if(conn != None and cursor != None):
        print("successful connection")

    disconnectDB(conn, cursor)
    print("successful disconnection")

# Convert date from "x days ago" to a real date string


def convertDate(days_ago):
    cur_date = date.today()
    days = days_ago.split()[0]

    new_date = cur_date - datetime.timedelta(int(days))
    return new_date.strftime("%Y-%m-%d")

# Clean the location to be single city


def cleanLocation(location):
    if location is None:
        return "undisclosed"

    for city in locations:
        if city in location:
            return city


# Insert into internships table
def insertInternships(title, location, description, pay, date_posted, link, image_url):
    conn, cursor = connectDB()

    query = """INSERT INTO test_internships(title, location, description, pay,
             date, exclusive, views, image_url, fav, link, date_posted)
             VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

    # Default values for database
    exclusive = False
    views = 0
    fav = False
    date = None
    # date_posted = date.today().strftime("%Y-%m-%d")

    try:
        # Execute query with variables
        cursor.execute(query, (title, location, description,
                               pay, date, exclusive, views, image_url,
                               fav, link, date_posted))

        # Commit execution of query to update db
        conn.commit()

    except Exception as error:
        print(error)
        return False

    finally:
        disconnectDB(conn, cursor)

    return True
