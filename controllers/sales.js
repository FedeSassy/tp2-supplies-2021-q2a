const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){ 
    return sales.getSale(id);
}

async function getSalesByMethod(method){ 
    return sales.getSalesByMethod(method);
}

async function getSalesByCustomer(email){ 
    return sales.getSalesByCustomer(email);
}

async function getCustomersInsatisfechos(){ 
    return sales.getCustomersInsatisfechos();
}

async function getUnstatifiedCustomers(){
    return sales.getUnstatifiedCustomers();
}
module.exports = {getSales, getSale, getSalesByMethod, getSalesByCustomer, getCustomersInsatisfechos, getUnstatifiedCustomers};