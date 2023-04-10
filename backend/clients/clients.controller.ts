import { NextFunction, Request, Response } from "express"
const Clients = require("./clients.model")
const Reservations = require("./reservations.model")

// @desc        Create client
// @route       POST /api/v1/clients
// @access      public
exports.createClients = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = await Clients.create(req.body)
        res.status(201).json({
            success: true,
            data: client,
        })
    } catch (error) {
        next(new Error(`There was an error trying to create a client: ${error}`))
    }
}

// @desc        Set reservation
// @route       POST /api/v1/schedule
// @access      private
exports.setReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reservation = await Reservations.create(req.body)
        res.status(201).json({
            success: true,
            data: reservation,
        })
    } catch (error) {
        next(new Error(`There was an error trying to create a reservation: ${error}`))
    }
}
