#!/bin/sh

echo 'deploy start.'
echo $PATH
echo $AWS_ACCESS_KEY_ID
npm install -g serverless
npm install

sls deploy --stage prod
