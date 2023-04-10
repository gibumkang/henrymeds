import express, { Express } from "express"
const dotenv = require("dotenv")
const path = require("path")
const cors = require("cors")
import { connectDB } from "./config/db"

// import routes
const providers = require("./providers/providers.route")

// load env variables
dotenv.config({ path: "./config/config.env" })

connectDB()

// initialize app
const app: Express = express()

// Body parser
app.use(express.json())

// allows other origins to utilize the API
// required to set token into cookie
const whitelist = ["http://localhost:3000"]
const corsOptions = {
    credentials: true,
    origin: (origin: string, callback: any) => {
        if (whitelist.includes(origin)) return callback(null, true)
        callback(new Error("Not allowed by CORS"))
    },
}

app.use(cors(corsOptions))

app.use("/api/v1/providers", providers)

const server = app.listen("3500", () => {
    // @ts-ignore
    console.log(`Server is running on Port 3500`)
})

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error, promise) => {
    console.log(`Error: ${err.message}`)
    // close server and exit process
    server.close(() => process.exit(1))
})
