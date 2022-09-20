const { readFile, writeFile } = require('fs');
const dotenv = require('dotenv')

dotenv.config()

const readFromFile = () => {
    return new Promise(
        (resolve, reject) => {
            readFile(process.env.PRODUCTS_FILE_PATH, (err, data) => {
                if (data) {
                    resolve(JSON.parse(data.toString()))
                }
                if (err)
                    reject(e.message)
            });
        }
    );
}

const writeIntoFile = (data) => {
    return new Promise(
        (resolve, reject) => {
            writeFile(process.env.PRODUCTS_FILE_PATH, JSON.stringify(data), (err) => {
                if (err) {
                    reject('could not write..')

                } else {
                    resolve('success')
                }
            });
        }
    )
}

module.exports = {
    read: readFromFile,
    write: writeIntoFile
}