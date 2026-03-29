"use client";

import { signIn } from "next-auth/react"
import { useState } from "react";

export default function Login() {
    const [show, setShow] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            callbackUrl: "/dashboard"
        });
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen paper-texture top-0 left-0">
                {show ? (
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start gap-4 p-4 bg-white rounded-md shadow">
                        <p className="bold text-xl">Login</p>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="py-2 px-4"/>
                        <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password} className="py-2 px-4" />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"> Login </button>
                    </form>
                ) : (
                    <p>Error 404</p>
                )}
            <div className="h-4 w-4 absolute top-0 right-0" onClick={() => setShow(true)}>
            </div>
        </div>    
    )
}