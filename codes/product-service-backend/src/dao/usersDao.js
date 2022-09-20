const { readFile, writeFile } = require('fs');
const dotenv = require('dotenv')
dotenv.config()

const readUsers = async () => {
    return new Promise(
        (resolve, reject) => {
            readFile(process.env.USERS_FILE_PATH, (err, data) => {
                if (data) {
                    console.log(data)
                    resolve(JSON.parse(data.toString()))
                }
                if (err) {
                    console.log(err)
                    reject('could not read data')
                }
            });
        }
    );
}

const writeUser = async (data) => {
    return new Promise(
        (resolve, reject) => {
            writeFile(
                process.env.USERS_FILE_PATH, JSON.stringify(data), (err) => {
                    if (err) {
                        reject('could not write..')

                    } else {
                        resolve('success')
                    }
                }
            )
        })
}

module.exports = {
    readUsers,
    writeUser
}