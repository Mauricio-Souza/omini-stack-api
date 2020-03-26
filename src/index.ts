import * as express from "express";
import * as cors from "cors";
import { enviroment } from "./common/enviroment";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(enviroment.server.port);