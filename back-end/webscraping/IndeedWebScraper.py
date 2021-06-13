from bs4 import BeautifulSoup
from utility import *
from insert import *
import requests

html_text = requests.get(
    "https://uk.indeed.com/jobs?q=software+intern&l=London%2C+Greater+London").text
soup = BeautifulSoup(html_text, 'lxml')
jobs = soup.findAll(
    'div', class_='jobsearch-SerpJobCard unifiedRow row result')

for op in jobs:
    # Role
    role = op.find('h2', class_='title').find('a').get('title')

    # Company
    company = op.find('div', class_='sjcl').find(
        'div').find('span', class_='company')
    if company.find('a', class_="turnstileLink") != None:
        company = company.find('a').text.strip()
    else:
        company = company.text.strip()

    # Title
    title = role + " at " + company

    # Location
    location = op.find('div', class_='sjcl').find(
        'span', class_='location accessible-contrast-color-location')
    if location != None:
        location = location.text.strip()

    # Summary
    summary = op.find('div', class_='summary').find(
        'ul').find('li').text.strip()

    # Date posted
    date_posted = op.find('div', class_='jobsearch-SerpJobCard-footer').find('div', class_='jobsearch-SerpJobCard-footerActions').find('div',
                                                                                                                                       class_='result-link-bar-container').find('div', class_='result-link-bar').find('span', class_='date date-a11y').text.strip()

    # link
    link = "https://uk.indeed.com" + \
        op.find('h2', class_='title').find('a').get('href')

    # Output all findings to console
    print("Role: ", role)
    print("Company: ", company)
    print("Location: ", location)
    print('Summary: \"' + summary + '\"')
    print("Date posted: ", date_posted)
    print("Link: ", link)

    # Skip any posts that are older than a month
    if date_posted == "30+ days ago":
        printPurple("SKIPPED: \"" + title + "\"" + " AS POSTED 30+ DAYS AGO")
        print("\n")
        continue

    # Skip any posts that already exist in the database
    if not isUnique(link):
        printPurple("SKIPPED: \"" + title + "\"" + " AS ALREADY INSERTED")
        print("\n")
        continue

    # Insert findings into database
    if insertInternships(title, cleanLocation(location), summary, -1, convertDate(date_posted), link, None):
        printGreen("INSERTION SUCCESSFUL FOR: \"" + title + "\"")
    else:
        printRed("INSERTION FAILED FOR: \"" + title + "\"")
    
    print("\n")
