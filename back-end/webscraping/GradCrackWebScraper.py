from bs4 import BeautifulSoup
import requests

html_text = requests.get(
    "https://www.gradcracker.com/search/computing-technology/work-placements-internships").text
soup = BeautifulSoup(html_text, 'lxml')
jobs = soup.find('div', class_='page-wrap').find_all('div', class_ = 'result-card')

for op in jobs:
    #Role
    role = op.find('div', class_ = 'row is-flex flex-wrap no-gutter')
    if role != None:
        print("Role: " + role.find('div', class_='job-item').find('h2').find('a').text.strip())
    
    #Company
    company = op.find('div', class_='col-md-2 cell')
    if company != None:
        print("Company: " + company.find('a', class_ = 'masthead').get('title'))
    
 
    prer = ""
    
    #Location, Salary, Prerequisite
    col = op.find('div', class_ = 'row overview no-gutter')
    if col != None:
        ls = col.find_all('ul', class_="item fa-ul")
        locationSalary = ls[0].find_all('li')
        prereq = ls[1].find_all('li')
        #Location
        print("Location: " , locationSalary[1].text.strip())
        #Salary
        print("Salary: " , locationSalary[0].text.strip())
        #Prerequisite
        prer += prereq[0].text.strip()
        
    
    #Summary
    sum = op.find('a', class_ = 'summary col-md-7 cell font-semibold font-md-14 text-white')
    if sum != None:
        print("Desciption: " + "\"" + sum.text.strip() + " Looking for " + prer.lower() +"\"")
        
    #Link 
    if role != None:
        print("Link: " + role.find('div', class_='job-item').find('h2').find('a').get('href'))
    
    print('\n')