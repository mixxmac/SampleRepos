#!/bin/sh

npm install -g serverless
npm install
sls deploy --stage prod
