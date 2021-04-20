import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/router.mjs";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

var server = app.listen(process.env.PORT, function () {
  console.log(`Listening on port  ${server.address().port}`);
});
