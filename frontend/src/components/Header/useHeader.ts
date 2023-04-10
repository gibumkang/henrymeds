import { User } from "@/hooks/useLogic"
import React, { useState } from "react"

const useHeader = () => {
    const [open, setOpen] = useState<boolean>(false)
    return {
        open,
        setOpen,
    }
}

export default useHeader
