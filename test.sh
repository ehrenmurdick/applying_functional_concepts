#!/bin/bash

for file in code/*.js
do
  node "$file"
done
