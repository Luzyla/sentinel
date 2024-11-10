import { signIn } from "next-auth/react";
import Button from "./Button"
import { FaGoogle, FaGithub } from "react-icons/fa6";

const LogInButtons = () => {
    const user = 'admin';
    
    return (
        <div className="flex flex-col">
        <Button 
        onClick={() => { 
            signIn("google", { callbackUrl: `/dashboard/${user}` })
        }}
        >
            <FaGoogle /> Sign in with Google
        </Button>
        <Button 
        onClick={() => {
            signIn("github", { callbackUrl: `/dashboard/${user}` })}}>
            <FaGithub /> Sign in with GitHub
        </Button>
    </div>
    )
}

export default LogInButtons;