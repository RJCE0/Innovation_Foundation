#!/bin/sh
pip install -r requirements.txt
python3 cleanInternships.py
python3 GradCrackWebScraper.py
python3 IndeedWebScraper.py
