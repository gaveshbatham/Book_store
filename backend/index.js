import express, { json, response } from "express";
import mongoose from "mongoose";
import { PORT, mongodbURL } from "./config.js";
import router from "./routes/bookRouts.js";
import cors from "cors";

const app = express();

app.use(cors())

// giving custum cors
// app.use(
//   cors({
//     origin:'http://localhost:3000',
//     methods: ['GET','PUT','POST','DELETE'],
//     allowedHeaders: [  'content-Type']
//   })
// )

app.use(express.json());
app.use('/books',router);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });




app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`);
});
