
const database = require('../database/database')()

const customerRepository = () => {
    return {
        save: (newCustomer) => {
            database.save(newCustomer);    
        },
        list: () => {
            return database.list();
        }
    }
}

module.exports = customerRepository;