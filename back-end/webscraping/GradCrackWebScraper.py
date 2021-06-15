from bs4 import BeautifulSoup
from insert import *
from utility import *
import requests

html_text = requests.get(
    "https://www.gradcracker.com/search/computing-technology/work-placements-internships").text
soup = BeautifulSoup(html_text, 'lxml')
jobs = soup.find('div', class_='page-wrap').find_all('div',
                                                     class_='result-card')
                                                     
printGreen("-----------------------------------------------------------------------------------------------------")
for op in jobs:
    # Role
    roleLink = op.find('div', class_='row is-flex flex-wrap no-gutter')
    role = ""
    if roleLink != None:
        role = roleLink.find(
            'div', class_='job-item').find('h2').find('a').text.strip()
    else:
        continue

    # Company
    company = op.find('div', class_='col-md-2 cell')
    image_url = ""
    if company != None:
        titleImg = company.find('a', class_='masthead')
        company = titleImg.get('title')
        # Image
        image_url = titleImg.find('img', class_='logo').get('data-original')
    else:
        continue

    #Location,  Prerequisite
    prereq = ""
    location = ""
    col = op.find('div', class_='row overview no-gutter')
    if col != None:
        ls = col.find_all('ul', class_="item fa-ul")
        p = ls[1].find_all('li')
        # Location
        location = ls[0].find_all('li')[1].text.strip()
        # Prerequisite
        prereq += p[0].text.strip()
    else:
        continue

    # Summary
    summary = op.find(
        'a', class_='summary col-md-7 cell font-semibold font-md-14 text-white')
    if summary != None:
        summary = summary.text.strip() + " Looking for " + prereq.lower()
    else:
        continue

    # Title
    title = role + " at " + company

    # Link
    link = ""
    link = roleLink.find(
        'div', class_='job-item').find('h2').find('a').get('href')

    # Output all information
    print("Role: ", role)
    print("Company: ", company)
    print("Image URL: ", image_url)
    print("Location: ", location)
    print("Description: " + "\"" + summary + "\"")
    print("Link: ", link)

    # Skip any posts that already exist in the database
    if not isUnique(link):
        printPurple("SKIPPED: \"" + title + "\"" + " AS ALREADY INSERTED")
        print("\n")
        continue

    # Insert findings into database
    if insertInternships(title, cleanLocation(location), summary, -1, None, link, image_url):
        printGreen("INSERTION SUCCESSFUL FOR: \"" + title + "\"")
    else:
        printRed("INSERTION FAILED FOR: \"" + title + "\"")
    print("\n")
