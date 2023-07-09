import * as express from "express";
import routes from "./routes";
import * as cors from "cors";

const app = express();

// Allow CORS for our front end app
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static("public"));
app.use(express.json());
app.use(routes);

export default app;
