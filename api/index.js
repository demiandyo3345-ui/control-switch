let SYSTEM = "on"

export default function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json({ system: SYSTEM })
    }

    if (req.method === "POST") {
        if (req.query.key !== process.env.SECRET_KEY) {
            return res.status(403).json({ error: "Forbidden" })
        }

        if (req.query.action === "off") SYSTEM = "off"
        if (req.query.action === "on") SYSTEM = "on"

        return res.json({ system: SYSTEM })
    }

    res.status(405).end()
    }
