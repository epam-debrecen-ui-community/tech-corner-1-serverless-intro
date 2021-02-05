/**
 * Serverless itself does not yet support ES Modules.
 * Bummer. Otherwise, this could have been an mjs if you are on Node.js 14.
 */
const express = require('express');
const serverless = require('serverless-http');

const app = express();

/**
 * serverless-offline has a bug which makes the root route fail, but only locally.
 * This is why I put /api here. You could not test / with serverless-offline now.
 */
app.get('/api', (_, response) => {
    response.send({
        data: 'funky'
    })
});

/**
 * serverless-http provider a wrapper function for
 * several Node.js web frameworks and it will construct
 * the necessary AWS Lambda handler for you in the
 * background.
 */
module.exports.handler = serverless(app);
