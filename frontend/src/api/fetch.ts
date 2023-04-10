type OptionProps = {
    method: "GET" | "PUT" | "POST" | "DELETE"
    headers: {
        "Content-Type": string
        Accept: string
    }
    body?: any
    credentials: "same-origin" | "include"
}

export const api = async (method: "GET" | "PUT" | "POST" | "DELETE", path: string, payload: any) => {
    // hardcoded route for challenge purposes
    const url = "http://localhost:3500/api/v1" + path
    const options: OptionProps = {
        method,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }

    if (payload) {
        options.body = JSON.stringify(payload)
    }

    try {
        const response = await fetch(url, options)
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}
