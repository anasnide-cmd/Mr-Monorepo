
import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <form className="flex flex-col w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-center">Login / Sign Up</h1>

                <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex gap-4">
                    <button formAction={login} className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Log in</button>
                    <button formAction={signup} className="flex-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">Sign up</button>
                </div>
            </form>
        </div>
    )
}
