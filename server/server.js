const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("strictQuery", false);
const movieRoutes = require('./routes/moiveRoutes')

//express app
const app = express()
app.use(express.json())
//cors policy
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});



app.use('/api/movies',movieRoutes)



mongoose
  .connect("mongodb://localhost:27017/movieApp")
  .then(() => {
    //listen for request
    app.listen(4040, () => {
      console.log(`Database connected and listening port ${4040}`);
    });
  })
  .catch((err) => console.log(err));