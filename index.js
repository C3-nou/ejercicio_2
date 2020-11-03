const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/database/conn.js");
const app = express();
const sync = require("./src/sync_info.js");

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync();
var corsOptions = {
  origin: "http://localhost:3000"
};


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./src/routes.js")(app);

const fetch = require('node-fetch');
async function search () {
    let response = await fetch('https://www.datos.gov.co/resource/gt2j-8ykr.json');
    let covidData = await response.json();
    covidData.forEach(async function(data) {
      status_create = await sync.create(data);
      console.log("Retorna: ", status_create);
      if(typeof status_create === 'string'){
        console.log(`Error al sincronizar`)
      }
    });
}

setInterval(search, 600000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
