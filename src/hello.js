'use strict';

module.exports.hello = async (event) => {
  //code goes here
  return {
    status: 200,
    body: JSON.stringify(
      {
        message: 'Hello World!',
        input: event,
      },
      null,
      2
    ),
  };
};
