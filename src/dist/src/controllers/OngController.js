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
const crypto = require("crypto");
const connection_1 = require("../database/connection");
class OngController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, whatsapp, city, uf } = req.body;
            const id = crypto.randomBytes(4).toString("HEX");
            yield connection_1.connection("ongs").insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            });
            return res.json({ id });
        });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ongs = yield connection_1.connection("ongs").select("*");
            return res.json(ongs);
        });
    }
}
exports.ongController = new OngController();
//# sourceMappingURL=OngController.js.map