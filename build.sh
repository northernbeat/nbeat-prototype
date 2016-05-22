#!/bin/bash

cd scss/nbeat-project
sass nbeat-project.scss > nbeat-project.css && sass -t compressed nbeat-project.scss > nbeat-project.min.css
cd ../..
