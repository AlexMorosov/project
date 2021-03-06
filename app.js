const express = require("express");
const logger = require("./utils/logger");
const handlebars = require("express-handlebars");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.static("public"));

app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

const routes = require("./routes");
app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(`Web App template listening on ${process.env.PORT}`);
});


console.log(`Connection string ${process.env.DATABASE}`);


module.exports = app;
