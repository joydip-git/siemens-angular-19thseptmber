const { read, write } = require('../dao/productsDao');
const { Status } = require('../models/status');


async function getProducts() {
    try {
        const data = await read();
        if (data && data.length > 0)
            return new Status("records found", data);
        else
            return new Status("no product record found");
    } catch (e) {
        throw e
    }
}

async function getProductById(pid) {
    try {
        if (pid && pid !== 0) {
            let products = await read();
            let found = products.find((p) => p.productId === pid);
            if (found)
                return new Status("record found", found);
            else
                return new Status("no such record exists");
        } else {
            return new Status("pass a proper id");
        }
    } catch (e) {
        throw e
    }
}

async function addProduct(product) {
    try {
        if (product) {
            let products = await read();
            if (products.length > 0) {
                let found = products.find(px => px.productId === product.productId);
                if (found === undefined) {
                    products.push(product);
                    let status = await write(products);
                    if (!status)
                        return new Status("couldn't add product");
                    else
                        return new Status("added product successfully", await read());
                } else
                    return new Status("product exists");
            } else
                return new Status("no product record found");
        }
        else {
            return new Status("no product data was sent");
        }
    }
    catch (e) {
        throw e
    }
}

async function removeProduct(pid) {
    try {
        if (pid && pid !== 0) {
            let products = await read();
            if (products.length > 0) {
                if (products.find((p) => p.productId === pid) !== undefined) {
                    let filtered = products.filter((p) => p.productId !== pid);
                    let status = await write(filtered);
                    if (!status)
                        return new Status("couldn't remove product");
                    else
                        return new Status("removed product successfully", await read());
                } else
                    return new Status("no such record exists");
            } else
                return new Status("no product record found");
        } else
            return new Status("pass a proper product id");
    }
    catch (e) {
        throw e
    }
}

async function updateProduct(product, pid) {
    try {
        let products = await read();
        if (products.length > 0) {

            const index = products.findIndex(p => p.productId === pid);

            if (index !== -1) {
                products.splice(index, 1, {
                    ...product,
                    productId: pid
                });
                let status = await write(products);
                if (!status)
                    return new Status("couldn't update product");
                else
                    return new Status("updated product successfully", await read());
            } else
                return new Status("no such record exists");
        } else
            return new Status("no product record found");
    }
    catch (e) {
        throw e
    }
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    removeProduct,
    updateProduct
}