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
function index(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const ong_id = req.headers.authorization;
        const incidents = yield connection_1.connection("incidents")
            .where("ong_id", ong_id)
            .select("*");
        return res.json(incidents);
    });
}
exports.default = index;
//# sourceMappingURL=OngIncidentsController.js.map