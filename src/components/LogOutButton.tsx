import { signOut } from "next-auth/react";
import Button from "./Button";
import { FaSignOutAlt } from "react-icons/fa";

const LogOutButton = () => {
    return (
        <div className="flex items-center justify-center">
        <Button
                onClick={ async () => {
            await signOut({
                callbackUrl: "/",
            })
            }}>
                <FaSignOutAlt />
        </Button>
    </div>
    )
}

export default LogOutButton;