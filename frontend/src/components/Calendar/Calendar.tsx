import { ProviderProps, User } from "@/hooks/useLogic"
import { Button } from "@material-tailwind/react"
import moment from "moment"
import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { Value } from "react-calendar/dist/cjs/shared/types"
import styled from "styled-components"

type CalendarProps = {
    user: User
    providers: ProviderProps[]
}

const StyledCalendar = styled(Calendar)`
    .react-calendar__tile:disabled {
        background: #fff;
    }
    .react-calendar__tile--now {
        background: lightblue !important;
        color: #000;
    }
`

const CalendarComponent: React.FC<CalendarProps> = (props) => {
    const { user, providers } = props
    const [value, setValue] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Value>()

    const onChangeHandler = (e: Value) => {
        console.log("change handler: ", e)
        setSelectedDate(e)
    }

    return (
        <div className="block items-center justify-center xl:flex">
            <div className="flex-1">
                <StyledCalendar tileDisabled={({ activeStartDate, date, view }) => moment(date).format("MMM Do YY") !== moment(providers[0].schedule).format("MMM Do YY")} tileContent={({ activeStartDate, date, view }) => (view === "month" && moment(date).format("MMM Do YY") === moment(providers[0].schedule).format("MMM Do YY") ? <div className="relative bg-blue-500 h-1">&nbsp;</div> : null)} onChange={(e) => onChangeHandler(e)} value={value} minDate={new Date()} />
            </div>
            <div className="hidden xl:block w-3 h-40 px-3 flex items-center border-l justify-center align-middle" />
            <div className="mt-5 xl:mt-0 flex-1">
                <div className="mb-5">The date(s) with the blue underline indicates when a provider is available. Please select an available date.</div>
                {selectedDate && (
                    <>
                        <div>
                            You have selected <strong>{moment(selectedDate.toString()).format("MMM Do, YYYY")}.</strong> Your provider will be {providers[0].name}. Please select a timeframe to schedule your 15 minute reservation based on your provider's availability.
                        </div>
                        <div className="mt-5">
                            {providers[0].name} is available from {providers[0].shiftStart} to {providers[0].shiftEnd}.
                        </div>
                        <div className="mt-5">
                            <Button>Book an appointment</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default CalendarComponent
