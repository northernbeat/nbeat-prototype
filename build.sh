#!/bin/bash

cd scss/nbeat/internal
sass nbeat-concept.scss > nbeat-concept.css && sass -t compressed nbeat-concept.scss > nbeat-concept.min.css
cd ../../..
