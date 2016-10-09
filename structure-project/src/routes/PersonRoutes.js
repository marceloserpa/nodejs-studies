import express from 'express';

import MongoClient from '../models/mongo.js';
import ResponseUtils from '../utils/ResponseUtils.js';

export default class PersonRoutes {

  constructor() {
    this.PEOPLE_API = '/api/person/v1/people';
    this.router = express.Router();
  }

  configure() {
    var reponseBuilder = new ResponseUtils();

    this.router.get(this.PEOPLE_API, (req, res) => {
      MongoClient.find({},(err,data) =>
          res.status(200).json(reponseBuilder.buildResponse(err, data, "Error fetching data"))
      );
    });

    this.router.post(this.PEOPLE_API, (req, res) => {
      var db = new MongoClient();
      db.name = req.body.name;
      db.surname = req.body.surname;
      db.save((err) => res.status(201).send(reponseBuilder.buildResponse(err, "Data added", "Error fetching data")));
    })

    return this.router;
  }

}
