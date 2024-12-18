import express from "express"

import client from "@repo/db/client"

const app = express()
app.use(express.json())


app.use("/api/v1")


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}/api/v1`);
})