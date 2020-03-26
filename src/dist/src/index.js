"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const routes_1 = require("./routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes_1.default);
app.listen(3333);
//# sourceMappingURL=index.js.map