from dotenv import load_dotenv
from datetime import date
import psycopg2
import os

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

    # close connection if exists and error occurrs
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')

    return conn, cursor

# Disconnect cursor and database connection
def disconnectDB(conn, cursor):
    cursor.close()
    conn.close()

# Insert into internships table
def insertInternships(title, location, description, pay, date, image_url):
    conn, cursor = connectDB()

    query = """INSERT INTO internships(title, location, description, pay,
             date, exclusive, views, image_url, fav, link, date_posted)
             VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

    # Default values for database
    exclusive = False
    views = 0
    fav = False
    date_posted = date.today().strftime("%Y-%m-%d")

    try:
        # Execute query with variables
        cursor.execute(query, (title, location, descripton,
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
