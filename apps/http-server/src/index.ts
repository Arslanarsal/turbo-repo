import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/users", async (req, res) => {
    const { username, email } = req.body;
    try {
        const user = await client.user.create({
            data: {
                username,
                email,
            },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
})

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
