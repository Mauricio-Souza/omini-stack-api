"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const OngController_1 = require("./controllers/OngController");
const IncidentController_1 = require("./controllers/IncidentController");
const OngIncidentsController_1 = require("./controllers/OngIncidentsController");
const LoginController_1 = require("./controllers/LoginController");
const routes = express.Router();
routes.post("/login", LoginController_1.default);
routes.get("/ongs", OngController_1.ongController.index);
routes.post("/ongs", OngController_1.ongController.create);
routes.get("/incidents", IncidentController_1.incidentController.index);
routes.post("/incidents", IncidentController_1.incidentController.create);
routes.delete("/incidents/:id", IncidentController_1.incidentController.delete);
routes.get("/ong/incidents", OngIncidentsController_1.default);
exports.default = routes;
//# sourceMappingURL=routes.js.map