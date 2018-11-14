module.exports = [
  {
    request: {
      method: 'post',
      path: '/api/helloworld/simple',
      body: {
        val: "1",
      }
    },
    response: {
      data: {
        'key': 'Hello World!',
      }
    },
  },
];
