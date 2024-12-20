const cors = require("cors");
const express = require("express");
const { getAllMovies, getMovieById } = require("./controllers");

const app = express();
app.use(express.json());
app.use(cors());

//Endpoint to get all movie
app.get("/movies", async (req, res) => {
  let result = await getAllMovies();
  res.json({ result });
});

//Endpoint to get movie by id
app.get("/movies/details/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let result = await getMovieById(id);
    res.json({ result });
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  app,
};
