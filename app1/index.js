const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>App 1 Running</h1>
        <p>Welcome to Application 1</p>
    `);
});

app.listen(3000, () => {
    console.log("App1 running on port 3000");
});
