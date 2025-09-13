"use client"

const Login = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
                <div className="mb-8">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl text-gray-400">404</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
                    <p className="text-gray-600 mb-6">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
