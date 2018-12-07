module.exports = [
  {
    request: {
      method: 'get',
      path: '/api/helloworld/setheaders',
    },
    response: {
      data: {
        'key': 'Hello World!',
      },
      headers: {
        'lookAtMe': 'imMrMeeSeks!'
      }
    },
  },
];
