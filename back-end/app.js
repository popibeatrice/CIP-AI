const express = require("express");
const app = express();

///ROUTS
const educationRout = require("./routes/education");
const medicalRout = require("./routes/medicina");
const tabelRout = require("./routes/tabelas");
const artRout = require("./routes/art");

require("dotenv").config();

app.use(express.static("../front-end/public"));
app.use(express.json());

app.use("/educatie", educationRout);
app.use("/medicina", medicalRout);
app.use("/tabel", tabelRout);
app.use("/arta", artRout);

///Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
