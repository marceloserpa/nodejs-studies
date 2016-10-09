import express from 'express';

import MongoClient from '../models/mongo.js';

export default class PersonRoutes {

  constructor() {
    this.PEOPLE_API = '/api/person/v1/people';
    this.router = express.Router();
  }

  configure() {
    var people = [];
    this.router.get(this.PEOPLE_API, function(req, res){
      var response = {};
      MongoClient.find({},function(err,data){
          if(err) {
              response = {"error" : true,"message" : "Error fetching data"};
          } else {
              response = {"error" : false,"message" : data};
          }
          res.status(200).json(response);
      });
    });
    this.router.post(this.PEOPLE_API, function(req, res){
      var db = new MongoClient();
      db.name = req.body.name;
      db.surname = req.body.surname;
      db.save(function(err){
          var response = {};
          if(err) {
              response = {"error" : true,"message" : "Error adding data"};
          } else {
              response = {"error" : false,"message" : "Data added"};
          }
          res.status(201).send(response)
        });
    });
    return this.router;
  }

}
