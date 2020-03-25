const express = require("express");
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const OngIncidentsController = require('./controllers/OngIncidentsController');
const LoginController = require('./controllers/LoginController');

routes.post("/login", LoginController.login)

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/ong/incidents", OngIncidentsController.index);

module.exports = routes