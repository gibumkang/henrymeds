import { Request } from "express"
import { Error } from "mongoose"

export interface RequestProps extends Request {
    user: {
        id: string
        role?: string
    }
}

export interface ErrorProps extends Error {
    statusCode: number
}

export type EmailOptionProps = {
    email: string
    subject: string
    message: string
}
