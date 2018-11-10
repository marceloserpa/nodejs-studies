const message = require('./src/message');
jest.doMock('./src/message', () => {
  let sayhelloMock = () => 'hello supertest';
  return { sayHello: sayhelloMock };
});

let databaseMock = require('./src/database-fake');

var request = require('supertest');
var app = require('./src/app');

describe('Test my API', () => {

  beforeEach(() => {
    jest.resetModules();
  });

  test('Test Hello World Endpoint', done => {

    request(app).get('/hello-world').then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('hello supertest');
      done();
    });
  });

  test('Test save user', done => {

    const databaseSaveSpy = jest.spyOn(databaseMock, 'save');

    request(app).post('/save').send({name: 'john'}).then(response => {
      expect(response.statusCode).toBe(200);
      expect(databaseSaveSpy).toHaveBeenCalled();
      done();
    });
  });

});
