const Home = () => {
    return (
        <div className="relative h-screen bg-gray-900 overflow-hidden">
            {/* Interactive Map Container */}
            <div className="relative w-full h-full">
                {/* Map tiles grid background */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 p-4">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-green-800 via-yellow-700 to-brown-600 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                    ))}
                </div>

                {/* Map overlay with land markers */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Land plot markers */}
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse pointer-events-auto cursor-pointer" />
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse pointer-events-auto cursor-pointer" />
                    <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse pointer-events-auto cursor-pointer" />
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse pointer-events-auto cursor-pointer" />
                    <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse pointer-events-auto cursor-pointer" />
                </div>

                {/* Map controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="bg-white/90 hover:bg-white p-2 rounded-lg shadow-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    <button className="bg-white/90 hover:bg-white p-2 rounded-lg shadow-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    </button>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Showing land in Karnataka, India</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
