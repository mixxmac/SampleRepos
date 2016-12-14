'use strict';

import { Context, Callback } from 'aws-lambda';

module.exports.hello = (event: any, context: Context, callback: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'GoodMorning ' + event.pathParameters['name'] + '.',
      stage: 'domain ' + process.env.DOMAIN
    }),
  };

  callback(undefined, response);
};
