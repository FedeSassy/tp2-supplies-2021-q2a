const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    const sale = await controller.getSale(req.params.id);
    res.json(sale);
});

router.get('/bymethod/:method', async (req, res) => {
    const sales = await controller.getSalesByMethod(req.params.method);
    res.json(sales);
});

router.get('/byemail/:email', async (req, res) => {
    const sales = await controller.getSalesByCustomer(req.params.email);
    res.json(sales);
});

router.get("/unsatisfycustomers/3", async (req, res) => {
    const customers = await controller.getCustomersInsatisfechos();
    res.json(customers);
});

router.get("/unsatisfiedCustomers/3", async (req, res) => {
    const customers = await controller.getUnstatifiedCustomers();
    res.json(customers);
  });

module.exports = router;