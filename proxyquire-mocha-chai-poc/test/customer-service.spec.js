
const expect = require('chai').expect;
const proxyquire = require('proxyquire');


var stub = {
  '../repository/customer-repository': () => {     
    return {
      list: () => [ {"id": 1,"name": "stub-customer"}]
    } 
  }
};

var customerService = proxyquire('../src/service/customer-service.js', stub)();

describe('customer', function() {
  it('should return lenght of users', () => {
    const customers = customerService.countTotal();
    expect(customers).to.equal(1);
  });
});
