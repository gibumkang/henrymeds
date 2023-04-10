import { api } from "@/api/fetch"
import { useEffect, useState } from "react"

export type ProviderProps = {
    id: string
    name: string
    schedule: string
    shiftStart: string
    shiftEnd: string
}

export enum User {
    provider,
    client,
}

const useLogic = () => {
    const [user, setUser] = useState<User>(User.provider)
    const [providers, setProviders] = useState<ProviderProps[]>()
    const getProviders = () => {
        api("GET", "/providers/schedule", null)
            .then((response) => {
                setProviders(response.data)
            })
            .catch((error) => console.error(error))
    }
    useEffect(() => {
        getProviders()
    }, [])
    return {
        user,
        setUser,
        providers,
        setProviders,
        getProviders,
    }
}

export default useLogic
