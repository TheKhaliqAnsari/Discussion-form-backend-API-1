
const app = require('./app.js')
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config({path: './.env'})
const port = process.env.PORT;

const DATABASE_URL = process.env.mongo_url;

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((conncection) => console.log("connected to mongodb"))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))