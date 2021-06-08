const mongoose = require('mongoose');

const dbName = process.env.DATABASE_NAME;

async function connect() {
    await mongoose
        .connect(
            `mongodb://localhost/${dbName}?authSource=${dbName}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(db => console.log('Db connection established succefully to', db.connection.host))
        .catch(err => console.error(err));
}

module.exports = {
    connect,
}
