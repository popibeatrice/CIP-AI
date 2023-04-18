const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.static("../front-end/public"));
const PORT = process.env.PORT || 5050;
app.listen(PORT, `0.0.0.0`, () => {
    console.log(`listening on port ${PORT}...`);
});
