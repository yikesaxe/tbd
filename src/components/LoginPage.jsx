'use client'
import React, {useState} from "react";
import { useRouter } from 'next/navigation';


export default function LoginPage() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.password) {
            router.push('/feed')
        }
    }

    return (
        <div className="w-screen h-screen grid grid-cols-2">
            <div
                className="col-start-2 flex items-center bg-blue-200"
            >
                <form onSubmit={(e) => handleSubmit(e)} className="mx-auto flex flex-col gap-5">
                    <div className="flex gap-4 justify-between">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
                            className="px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="flex gap-4 justify-between">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.currentTarget.value })}
                            className="px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <button className="">Log In</button>
                </form>
            </div>
        </div>
    )
}