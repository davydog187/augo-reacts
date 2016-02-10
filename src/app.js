/*! app.js */

import express from "express";

import HomeView from "./pages/home/HomeView";

const { PORT = 8080 } = process.env;

const app = express();

app.get("/", function(request, response) {

    const homeView = new HomeView();

    response
        .send(homeView.render());
});

app.listen(PORT);
