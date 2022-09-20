const dotenv = require('dotenv')
const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const routerMiddleware = require('./routes/app-routes');

dotenv.config()

const PORT = process.env.PORT
const PRODUCTS_BASE_URL = process.env.PRODUCTS_BASE_URL
const AUTH_BASE_URL = process.env.AUTH_BASE_URL

const app = express();
app.use(cors({ origin: '*', methods: '*' }));
app.use(express.json());
app.use(routerMiddleware)


app.listen(PORT, () => {
    console.log(`Product Service is running at http://127.0.0.1:${PORT}${PRODUCTS_BASE_URL}`)
    console.log(`Auth Service is running at http://127.0.0.1:${PORT}${AUTH_BASE_URL}`)
})