

const customerRepository = require('../repository/customer-repository')();

const customerService = () => {
    return {
        save: (customer) => {
            return customerRepository.save(customer);
        },
        countTotal: () => {
            return customerRepository.list().length;
        }
    }
}

module.exports = customerService;
