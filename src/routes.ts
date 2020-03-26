import * as express from "express";
import { ongController } from './controllers/OngController';
import { incidentController } from './controllers/IncidentController';
import index from './controllers/OngIncidentsController';
import login from './controllers/LoginController';

const routes = express.Router();

routes.post("/login", login)

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

routes.get("/incidents", incidentController.index);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

routes.get("/ong/incidents", index);

export default routes;