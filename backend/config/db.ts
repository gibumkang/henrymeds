import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.set("strictQuery", false)
    mongoose.connect("mongodb+srv://ben123:ben123@studio-kanvas.tuaxrfb.mongodb.net/henrymeds")
    //@ts-ignore
    console.log(`MongoDB Connected`.rainbow)
}
