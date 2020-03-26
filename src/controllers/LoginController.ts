import { connection }  from "../database/connection";

export default async function login(req, res) {
    const { id } = req.body;

    const exists = await connection("ongs")
        .where("id", id)
        .first();

    if (exists === undefined)
        return res.status(400).json({ error: "No ONG found with this ID." });

    return res.send(200);
}