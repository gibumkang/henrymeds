import Availability from "@/components/Calendar/Availability"
import Calendar from "@/components/Calendar/Calendar"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import useHeader from "@/components/Header/useHeader"
import useLogic, { User } from "@/hooks/useLogic"
import { Button, Dialog, DialogBody, DialogFooter, Input, DialogHeader } from "@material-tailwind/react"

export default function Home() {
    const { user, setUser, providers, getProviders } = useLogic()
    const { open, setOpen } = useHeader()

    const signInHandler = () => {
        user === User.provider ? setUser(User.client) : setUser(User.provider)
        setOpen(!open)
        return
    }

    return (
        <>
            <Header setUser={setUser} user={user} setOpen={setOpen} />
            {providers && (
                <main className="border rounded-2xl py-5 px-10 w-9/12 mx-auto mt-10">
                    <div>{user === User.provider ? <Availability user={user} providers={providers!} getProviders={getProviders} /> : <Calendar user={user} providers={providers} />}</div>
                </main>
            )}
            <Footer />
            <Dialog open={open} handler={() => setOpen(!open)} className="bg-white">
                <DialogHeader>Login</DialogHeader>
                <DialogBody divider>
                    <div className="mb-5">
                        <Input label="Username" defaultValue={user === User.provider ? "client" : "provider"} />
                    </div>
                    <div className="mb-5">
                        <Input label="Password" type="password" defaultValue={"12345"} />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={() => setOpen(!open)} className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="text" color="green" onClick={() => signInHandler()}>
                        <span>Sign In</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}
