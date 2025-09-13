import { Tag, Phone, Clock } from "lucide-react"

const SellLand = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Sell your land
                                <br />
                                faster with 1acre
                            </h1>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="relative w-72 h-auto transform rotate-3">
                                <img
                                    src="phone-mockup-sell.jpg"
                                    alt="1acre mobile app"
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Property Listings Section */}
            <div className="py-8 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative w-full max-w-3xl mx-auto overflow-hidden bg-gray-50 rounded-lg p-4">
                        <div className="animate-scroll-left flex items-center space-x-16 whitespace-nowrap">
                            {/* Duplicate the content multiple times for seamless loop */}
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="flex items-center space-x-16 flex-shrink-0">
                                    <div className="flex items-center space-x-4">
                                        <img src="/rural-land-property.png" alt="Property" className="w-14 h-14 rounded-lg object-cover" />
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm font-semibold text-gray-900">SUNNY</span>
                                                <span className="px-2 py-1 bg-amber-200 text-amber-800 text-xs rounded font-semibold">
                                                    Agent
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 font-medium">180 Sq Yards • Andhra Pradesh</p>
                                            <div className="flex items-center space-x-1">
                                                <span className="text-blue-500 text-xs">✓</span>
                                                <span className="text-xs text-gray-500">Plot Listed • 1hr ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <img src="/agricultural-land.png" alt="Property" className="w-14 h-14 rounded-lg object-cover" />
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm font-semibold text-gray-900">Charan M N</span>
                                                <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded font-semibold">
                                                    Owner
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 font-medium">1 Acre • Karnataka</p>
                                            <div className="flex items-center space-x-1">
                                                <span className="text-blue-500 text-xs">✓</span>
                                                <span className="text-xs text-gray-500">Land Listed • 1hr ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <img src="/rural-land-property.png" alt="Property" className="w-14 h-14 rounded-lg object-cover" />
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm font-semibold text-gray-900">Rajesh Kumar</span>
                                                <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded font-semibold">
                                                    Owner
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 font-medium">12.5 Acres • Karnataka</p>
                                            <div className="flex items-center space-x-1">
                                                <span className="text-blue-500 text-xs">✓</span>
                                                <span className="text-xs text-gray-500">Verified • 1hr ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <img src="/agricultural-land.png" alt="Property" className="w-14 h-14 rounded-lg object-cover" />
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm font-semibold text-gray-900">Priya Sharma</span>
                                                <span className="px-2 py-1 bg-amber-200 text-amber-800 text-xs rounded font-semibold">
                                                    Agent
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 font-medium">3.2 Acres • Maharashtra</p>
                                            <div className="flex items-center space-x-1">
                                                <span className="text-blue-500 text-xs">✓</span>
                                                <span className="text-xs text-gray-500">Premium Listed • 3hrs ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                            <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 border border-gray-200">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 border border-gray-200">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why List With 1acre Section */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">Why List With 1acre?</h2>

                        <div className="space-y-10">
                            <div className="flex items-start space-x-6">
                                <div className="w-16 h-16 bg-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Tag className="w-8 h-8 text-amber-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">FREE Listings!</h3>
                                    <p className="text-gray-600 text-lg">Post your land at zero cost.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-16 h-16 bg-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-8 h-8 text-amber-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Buyer Calls</h3>
                                    <p className="text-gray-600 text-lg">Your number is listed, and buyers reach out to you.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-16 h-16 bg-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-8 h-8 text-amber-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Faster Discovery</h3>
                                    <p className="text-gray-600 text-lg">
                                        Our interactive map helps serious buyers, including NRIs and investors, find your land quickly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Go Live Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Go LIVE in 24 hours</h2>
                        <p className="text-gray-600 mb-12 text-lg">with 3 simple steps</p>

                        <div className="flex items-center justify-between mb-12">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center mb-6 relative">
                                    <svg className="w-10 h-10 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-900 text-base">Land Details</h3>
                            </div>

                            <div className="flex-1 h-px bg-gray-300 mx-8 relative">
                                <div className="absolute inset-0 border-t-2 border-dashed border-gray-400"></div>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center mb-6 relative">
                                    <svg className="w-10 h-10 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-900 text-base">Verification</h3>
                            </div>

                            <div className="flex-1 h-px bg-gray-300 mx-8 relative">
                                <div className="absolute inset-0 border-t-2 border-dashed border-gray-400"></div>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center mb-6 relative">
                                    <svg className="w-10 h-10 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-900 text-base">Go Live</h3>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="px-10 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-500 transition-colors flex items-center mx-auto text-lg shadow-lg">
                                List your land for free
                                <svg className="w-6 h-6 ml-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            "How much do you charge for listing?",
                            "Why are you asking for documents?",
                            "Can I list my flat or house for sale?",
                            "Can I list my layout / Venture / project on 1acre?",
                            "I want to give my land for development. Can I list?",
                            "I want to give my land on lease. Can I list?",
                            "How long will it take to list?",
                        ].map((question, index) => (
                            <div key={index} className="border-b border-gray-700 pb-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">{question}</h3>
                                    <button className="text-2xl text-gray-400 hover:text-white">+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fixed CTA Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full shadow-2xl hover:bg-amber-500 transition-colors flex items-center text-base">
                    List your land for free
                    <svg className="w-5 h-5 ml-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SellLand
