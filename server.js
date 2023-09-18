const express = require("express");
const fs = require("fs");
const app = express();
const port = 9999;

app.get("/", (req, res) => {
    res.send(
        fs.readFileSync("./index.html", { encoding: "utf-8" })
    );
    
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

