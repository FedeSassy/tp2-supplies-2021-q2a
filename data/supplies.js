const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const objectId = require('mongodb').ObjectId;


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSale(id){
    const connectiondb = await conn.getConnection();
    const supply = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .findOne({_id: new objectId(id)});
    return supply;
}

async function getSalesByMethod(method){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({purchaseMethod: method})
                    .toArray();
    return supplies;
}

async function getSalesByCustomer(email) {
    const connectiondb = await conn.getConnection();
    const salesByCustomer = await connectiondb
                            .db(DATABASE)
                            .collection(SALES)
                            .find({"customer.email": email})
                            .toArray();
    return salesByCustomer;
}

async function getCustomersInsatisfechos() {
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({ "customer.satisfaction": { $lt: 3 } })
                    .toArray();
    return customers;
}

async function getUnstatifiedCustomers() {
    const connectiondb = await conn.getConnection();
    const unsatisfiedCustomers = await connectiondb
      .db(DATABASE)
      .collection(SALES)
      .find({ "customer.satisfaction": { $lt: 3 } })
      .toArray();
    console.log(unsatisfiedCustomers);
    return unsatisfiedCustomers;
}

module.exports = {getAllSales, getSale, getSalesByMethod, getSalesByCustomer, getCustomersInsatisfechos, getUnstatifiedCustomers};