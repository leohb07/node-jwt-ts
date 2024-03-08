import "dotenv/config";

import express from "express";
import cors from "cors";

import { connection } from "./database";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT, async () => {
  console.log(`Server started on port: ${process.env.PORT}`);

  await connection();
});

export { app };
