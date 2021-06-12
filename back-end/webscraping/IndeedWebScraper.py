from bs4 import BeautifulSoup
import requests

html_text = requests.get(
    "https://uk.indeed.com/jobs?q=software+intern&l=London%2C+Greater+London").text
soup = BeautifulSoup(html_text, 'lxml')
jobs = soup.findAll(
    'div', class_='jobsearch-SerpJobCard unifiedRow row result')

for op in jobs:
    # Role
    print("Role: " + op.find('h2', class_='title').find('a').get('title'))

    # Company
    company = op.find('div', class_='sjcl').find(
        'div').find('span', class_='company')
    if company.find('a', class_="turnstileLink") != None:
        print("Company: " + company.find('a').text.strip())
    else:
        print("Company: " + company.text.strip())

    # Location
    location = op.find('div', class_='sjcl').find(
        'span', class_='location accessible-contrast-color-location')
    if location != None:
        print("Location: " + location.text.strip())

    # Summary
    print('Summary: \"' + op.find('div',
          class_='summary').find('ul').find('li').text.strip() + '\"')

    # Date posted
    print("Date posted: " + op.find('div', class_='jobsearch-SerpJobCard-footer').find('div', class_='jobsearch-SerpJobCard-footerActions').find('div',
          class_='result-link-bar-container').find('div', class_='result-link-bar').find('span', class_='date date-a11y').text.strip())

    # link
    print("Link: " + "https://uk.indeed.com" +
          op.find('h2', class_='title').find('a').get('href'))
    print("\n")

#Add python and bs4 