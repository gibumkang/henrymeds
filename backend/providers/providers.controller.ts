import { NextFunction, Request, Response } from "express"
const Providers = require("./providers.model")

// @desc        Get work schedule
// @route       POST /api/v1/providers/schedule
// @access      public
exports.getProviders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schedules = await Providers.find()
        res.status(200).json({
            success: true,
            data: schedules,
        })
    } catch (error) {
        next(new Error(`There was an error fetching providers: ${error}`))
    }
}

// @desc        Create provider
// @route       POST /api/v1/providers
// @access      public
exports.createProvider = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const provider = await Providers.create(req.body)
        res.status(201).json({
            success: true,
            data: provider,
        })
    } catch (error) {
        next(new Error(`There was an error trying to create a provider: ${error}`))
    }
}

// @desc        Set work schedule
// @route       PUT /api/v1/providers/schedule
// @access      private
exports.setSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("body: ", req.body)
        let provider = await Providers.findById(req.params.id)
        if (!provider) {
            next(new Error(`There was no matching provider found.`))
        }
        provider = await Providers.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            success: true,
            data: provider,
        })
    } catch (error) {
        next(new Error(`There was an error updating the provider`))
    }
}
