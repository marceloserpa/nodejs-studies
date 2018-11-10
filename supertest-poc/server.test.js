const message = require('./src/message');
jest.doMock('./src/message', () => {
  let sayhelloMock = () => 'hello supertest';
  return { sayHello: sayhelloMock };
});

jest.mock("./src/database-fake");
var databaseMock = require('./src/database-fake');

var request = require('supertest');
var app = require('./src/app');

test('Test save user', done => {
  request(app)
    .post('/save')
    .set('Accept', /application\/json/)
    .send({name: 'john'})
    .then(response => {
      expect(databaseMock.save.mock.calls[0][0].name).toBe('john');
      expect(response.statusCode).toBe(200);
      done();
    });
});

test('Test Hello World Endpoint', done => {
  request(app)
    .get('/hello-world')
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('hello supertest');
      done();
    });
});
