/*! app.js */

import express from "express";

import HomeView from "./pages/home/HomeView";
import UploadPageView from "./pages/upload/UploadPageView";

const { PORT = 8080 } = process.env;

const app = express();

app.use("/public", express.static("public"));

app.get("/", function(request, response) {

    const homeView = new HomeView();

    response
        .send(homeView.render());
});

app.get("/upload", function(request, response) {

    const uploadPageView = new UploadPageView();

    response
        .send(uploadPageView.render());
});


app.listen(PORT);
