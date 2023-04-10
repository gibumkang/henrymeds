import { ProviderProps, User } from "@/hooks/useLogic"
import { Button, Alert } from "@material-tailwind/react"
import { FormEvent, useState } from "react"
import DatePicker from "react-date-picker"
import TimePicker from "react-time-picker"
import "react-time-picker/dist/TimePicker.css"
import "react-clock/dist/Clock.css"
import "react-date-picker/dist/DatePicker.css"
import "react-calendar/dist/Calendar.css"
import { Value } from "react-date-picker/dist/cjs/shared/types"
import { api } from "@/api/fetch"

type AvailabilityProps = {
    user: User
    providers: ProviderProps[]
    getProviders: () => void
}

type PayloadProps = {
    schedule: Value
    shiftStart: string
    shiftEnd: string
}

const Availability: React.FC<AvailabilityProps> = (props) => {
    const { providers, getProviders } = props
    const [startDate, setStartDate] = useState<Date | Value>()
    const [startTime, setStartTime] = useState<string>()
    const [endTime, setEndTime] = useState<string>()
    const [success, setSuccess] = useState<boolean>(false)

    const startDateHandler = (e: Value) => {
        setStartDate(e)
        setStartTime("8:00")
    }

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!startDate || !startTime || !endTime) return

        const payload: PayloadProps = {
            schedule: startDate!,
            shiftStart: startTime!,
            shiftEnd: endTime!,
        }

        // hardcoding an existing ID just to demonstrate
        const response = await api("PUT", `/providers/schedule/64336005ee9f490e7dc562e6`, payload!)
        if (response) {
            setSuccess(true)
            getProviders()
        }
    }

    return (
        <div>
            <h1 className="font-header font-bold text-2xl mb-3">Hello, {providers[0].name}!</h1>
            <p>Thank you for being a provider at HenryMeds.</p>
            <p>Please select your work availability.</p>
            <form action="" className="mt-10" onSubmit={(e) => submitHandler(e)}>
                <div className="mb-5">
                    <div className="mb-3">First, select the day are you available.</div>
                    <DatePicker className="text-xl" value={startDate} clearIcon={null} onChange={(e) => startDateHandler(e)} minDate={new Date()} />
                </div>
                {startTime && (
                    <div className="mb-5">
                        <div className="mb-3">Next, select your available shift.</div>
                        <TimePicker className="text-xl" disableClock={true} clearIcon={null} value={startTime} onChange={(e) => setStartTime(e!)} /> to <TimePicker className="text-xl" disableClock={true} minTime={startTime} value={endTime} onChange={(e) => setEndTime(e!)} />
                    </div>
                )}
                {endTime && <Button type="submit">Submit Availability</Button>}
                {success && (
                    <Alert color="green" className="text-sm mt-3">
                        Thank you for submitting your availability!
                    </Alert>
                )}
            </form>
        </div>
    )
}

export default Availability
