#!/bin/sh
apt install python3-pip
pip3 install -r requirements.txt
python3 cleanInternships.py
python3 GradCrackWebScraper.py
python3 IndeedWebScraper.py
