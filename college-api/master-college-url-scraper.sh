#!/bin/bash

college=0

while (( college <= 49 ));
do
    node college-url-scraper.js $college
    echo $college

    sleep 1

    college=$((college+1))
done

