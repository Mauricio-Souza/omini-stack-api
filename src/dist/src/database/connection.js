"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
const configuration = require("../../knexfile");
exports.connection = knex(configuration.development);
//# sourceMappingURL=connection.js.map