import { getSession } from "../_lib/sessionhandler"
import LoginButton from "./loginbutton";
import LogoutButton from "./logoutbutton";

export default async function AccountAction() {
    const session = await getSession();

    if (!session) {
        return (
            <LoginButton />
        )
    } else {
        return (
            <div className="flex flex-row gap-2"><LogoutButton /> {session.user.name}</div>
        )
    }
}