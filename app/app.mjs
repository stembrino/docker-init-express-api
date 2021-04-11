import express from "express";
import cors from "cors";
import router from "./routes/router.mjs";

const app = express();
app.use(cors());
app.use(router);

var server = app.listen(process.env.PORT, function () {
  console.log(`Listening on port  ${server.address().port}`);
});
