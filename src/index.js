import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`mongo db connection is failed: ${err}`);
  });
