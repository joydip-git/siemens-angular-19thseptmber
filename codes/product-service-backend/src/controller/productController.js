const productBo = require('../bo/productBo');
const { Status } = require('../models/status');

async function fetchProducts(req, res) {
    console.log('request came')
    try {
        let data = await productBo.getProducts();
        res.end(JSON.stringify(data));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

async function fetchProduct(req, res) {
    let pid = parseInt(req.params.id);
    console.log('request came for' + pid)
    try {
        let found = await productBo.getProductById(pid);
        res.end(JSON.stringify(found));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

async function insertProduct(req, res) {
    let p = req.body;
    let status = await productBo.addProduct(p);
    try {
        res.end(JSON.stringify(status));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

async function deleteProduct(req, res) {
    let pid = parseInt(req.params.id);
    try {
        let status = await productBo.removeProduct(pid);
        res.end(JSON.stringify(status));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

async function modifyProduct(req, res) {
    let p = req.body;
    let pid = Number(req.params.id);
    try {
        let status = await productBo.updateProduct(p, pid);
        res.end(JSON.stringify(status));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

module.exports = {
    fetchProduct,
    fetchProducts,
    insertProduct,
    deleteProduct,
    modifyProduct
};