#!/bin/bash

collegeindex=0

while (( collegeindex <= 46 ));
do
    node fakerr.js $collegeindex
    echo $collegeindex

    sleep 1

    collegeindex=$((collegeindex+1))
done

