import express from "express"

const app = express()

// app.use("/api/v1")

app.get("/", (req, res) => {
    res.json({
        message: "hello from localhost"
    })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
})