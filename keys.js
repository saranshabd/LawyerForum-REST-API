'use strict';

const axios = require('axios');

// database configuration keys and passwords
const dbUsername = 'admin';
const dbPassword = 'pass123';
const dbName = 'test-db';

// facebook-sdk app keys
const facebookAppID = 2110899535664683;
const facebookAppSecret = '4ff7e794c6c7b75ae3794db1345da63e';
let facebookAppAccessToken = '2110899535664683|Muk_nBoJuqWZt4HiC5uTU8MmRw0';

// secret of json-web-token access tokens
const jwtAppSecret = 'X9QUAdwn5CFhKIkzpYJm';

module.exports = {
  dbUsername,
  dbPassword,
  dbName,
  facebookAppID,
  facebookAppSecret,
  facebookAppAccessToken,
  jwtAppSecret
};
