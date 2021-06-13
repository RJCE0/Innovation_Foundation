from bs4 import BeautifulSoup
import requests
from insert import *

html_text = requests.get(
    "https://uk.indeed.com/jobs?q=software+intern&l=London%2C+Greater+London").text
soup = BeautifulSoup(html_text, 'lxml')
jobs = soup.findAll(
    'div', class_='jobsearch-SerpJobCard unifiedRow row result')

for op in jobs:
    # Role
    role = op.find('h2', class_='title').find('a').get('title')
    print("Role: ", role)

    # Company
    company = op.find('div', class_='sjcl').find(
        'div').find('span', class_='company')
    if company.find('a', class_="turnstileLink") != None:
        company = company.find('a').text.strip()
    else:
        company = company.text.strip()
    print("Company: ", company)

    # Title
    title = role + "at" + company

    # Location
    location = op.find('div', class_='sjcl').find(
        'span', class_='location accessible-contrast-color-location')
    if location != None:
        location = location.text.strip()
    print("Location: ", location)

    # Summary
    summary = op.find('div', class_='summary').find(
        'ul').find('li').text.strip()
    print('Summary: \"' + summary + '\"')

    # Date posted
    date_posted = op.find('div', class_='jobsearch-SerpJobCard-footer').find('div', class_='jobsearch-SerpJobCard-footerActions').find('div',
                                                                                                                                       class_='result-link-bar-container').find('div', class_='result-link-bar').find('span', class_='date date-a11y').text.strip()
    print("Date posted: ", date_posted)

    # skip any posts that are older than a month
    if date_posted == "30+ days ago":
        continue
    
    # link
    link = "https://uk.indeed.com" + \
        op.find('h2', class_='title').find('a').get('href')
    print("Link: ", link)
    print("\n")

    check()
    #prototype code to insert into database
    # if insertInternships(title, cleanLocation(location), summary, -1, convertDate(date_posted), link, None):
    #     print("INSERTION SUCCESSFUL FOR: \"" + title + "\"")
    # else:
    #     print("INSERTION FAILED FOR: \"" + title + "\"")

# Add python and bs4s
