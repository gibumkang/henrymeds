import React from "react"
import useHeader from "./useHeader"
import { User } from "@/hooks/useLogic"

type HeaderProps = {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = () => {
    return <div>Modal</div>
}

const Header: React.FC<HeaderProps> = (props) => {
    const { user, setUser, setOpen } = props

    const styles = () => {
        if (user === User.client) {
            return "bg-gray-100"
        } else {
            return "bg-blue-100"
        }
    }

    return (
        <>
            <header className={`w-full p-5 border-b flex items-center transition-all ${styles()}`}>
                <div className="flex-grow font-semibold">HenryMeds</div>
                <div className="flex-1 flex text-right justify-end gap-5">
                    <div>Link 1</div>
                    <div>Link 2</div>
                    <div>Link 3</div>
                    <div>
                        <button onClick={() => setOpen(true)} className="whitespace-nowrap border rounded-2xl border-blue-700 transition-all hover:bg-blue-700 px-3 py-1 bg-blue-600 text-white text-xs uppercase">
                            Login as a {user === User.provider ? "client" : "provider"}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
