

const database = () => {
    return {
        save: (newCustomer) => {
            console.log("executing real database to save.");
            console.log(newCustomer);
            
        },
        list: () => {
            console.log("executing real database to list");
            return [
                {"id": 1,"name": "marcelo"},
                {"id": 2,"name": "marcelo3"}
            ]
        }
    }
}

module.exports = database;

