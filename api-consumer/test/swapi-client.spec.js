var expect = require('chai').expect;
var getPerson = require('../swapi-client').getPerson;

describe('GET person by id', function() {
  it('returns person found', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(30000);

    var personId = 1;

    getPerson(personId, function(err, person) {

      expect(person).to.have.property('name').to.equal('Luke Skywalker');

      expect(person).to.have.property('films').with.length(5);
      done();
    });

  });
});
