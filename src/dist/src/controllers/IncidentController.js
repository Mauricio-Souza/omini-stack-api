"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../database/connection");
class IncidentController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, value } = req.body;
            const ong_id = req.headers.authorization;
            const [id] = yield connection_1.connection("incidents").insert({
                title,
                description,
                value,
                ong_id
            });
            return res.json({ id });
        });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page = 1 } = req.query;
            const max = 5;
            const [total] = yield connection_1.connection("incidents").count();
            const incidents = yield connection_1.connection("incidents")
                .join("ongs", "ongs.id", "=", "incidents.ong_id")
                .limit(max)
                .offset((page - 1) * max)
                .select([
                "incidents.*",
                "ongs.name",
                "ongs.email",
                "ongs.whatsapp",
                "ongs.city",
                "ongs.uf"
            ]);
            res.header("X-Total-Count", total["count(*)"]);
            return res.json(incidents);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ong_id = req.headers.authorization;
            const incident = yield connection_1.connection("incidents")
                .where("id", id)
                .select("ong_id")
                .first();
            if (incident.ong_id !== ong_id) {
                return res.status(401).json({
                    error: "Operation not permited."
                });
            }
            yield connection_1.connection("incidents")
                .where("id", id)
                .delete();
            return res.status(204).send();
        });
    }
}
exports.incidentController = new IncidentController();
//# sourceMappingURL=IncidentController.js.map