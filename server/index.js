const express = require("express");
const app = express();
const port = 1234;



app.get("/api", (req, res) => {
    res.send("Hello world from express!");
});

app.listen(port, ()=> {
    console.log(`App listening at port ${port}`);
})