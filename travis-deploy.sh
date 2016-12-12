#!/bin/sh

echo 'Install!'
npm install -g serverless

echo 'Deploy!'
sls deploy --stage prod
