import express from 'express';

export default class PersonRoutes {

  constructor() {
    this.PEOPLE_API = '/api/person/v1/people';
    this.router = express.Router();
  }

  configure() {
    var people = [];
    this.router.get(this.PEOPLE_API, function(req, res){
      res.send(people);
    });
    this.router.post(this.PEOPLE_API, function(req, res){
      people.push(req.body)
      res.status(201).send('Created')
    });
    return this.router;
  }

}
