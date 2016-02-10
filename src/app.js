/*! app.js */

import express from "express";

const { PORT = 8080 } = process.env;

const app = express();

app.get("/", function(request, response) {

    response
        .send("hello augo reacts");
});

app.listen(PORT);
