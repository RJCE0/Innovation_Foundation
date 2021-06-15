from insert import *
import datetime
from datetime import date

# Script to delete any posts which were posted 30+ days ago
TIME_TO_LIVE = 30

conn, cursor = connectDB()

query = """DELETE FROM internships
                WHERE date_posted<=%s"""

expiry_date = date.today() - datetime.timedelta(TIME_TO_LIVE)
expiry_date.strftime("%Y-%m-%d")

cursor.execute(query, (expiry_date,))

# Check all rows were deleted
check_query = """SELECT FROM test_internships
                WHERE date_posted<=%s"""
cursor.execute(check_query, (expiry_date,))             

if cursor.rowcount == 0:
  printGreen("SUCCESSFUL DELETION")
else:
  printRed("UNSUCCESSFUL DELETION")

disconnectDB(conn, cursor)