import { Check, Info } from "lucide-react"

const Subscribe = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
                            Premium
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">1acre Premium</h1>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                            Your access to all good
                            <br />
                            Land Deals!
                        </h2>

                        {/* Phone Mockups */}
                        <div className="flex justify-center items-center space-x-8 mb-16">
                            <img
                                src="premium-phones.jpg"
                                alt="1acre Premium App Interface"
                                className="max-w-4xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* What's Included Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 rounded-3xl p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Side - Features */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-10">What's Included?</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">Unlimited Seller Contacts</h3>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-xl font-semibold text-gray-900">Unlock All Landowner Listings</h3>
                                            <Info className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                Exclusive Access To Facilitated Land Deals
                                            </h3>
                                            <Info className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                Discover Exclusive Tag-Along Opportunities
                                            </h3>
                                            <Info className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">Visualise with Premium Map Layers</h3>
                                            <p className="text-sm text-blue-600 mt-2 cursor-pointer hover:underline font-medium">
                                                See Full List
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">Early Access to Future Features</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Pricing & Community */}
                            <div className="space-y-8">
                                {/* Community Section */}
                                <div className="text-center">
                                    <p className="text-gray-600 mb-2 text-lg">Join our community of</p>
                                    <p className="text-2xl font-bold text-gray-900 mb-8">3000+ premium members</p>

                                    {/* Avatar Row */}
                                    <div className="flex justify-center space-x-1 mb-12">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                                            alt="Member"
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                                            alt="Member"
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
                                            alt="Member"
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face"
                                            alt="Member"
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face"
                                            alt="Member"
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=40&h=40&fit=crop&crop=face"
                                            alt="Member"
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=40&h=40&fit=crop&crop=face"
                                            alt="Member"
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face"
                                            alt="Member"
                                            className="w-12 h-12 rounded-full border-2 border-white"
                                        />
                                    </div>
                                </div>

                                {/* Pricing Card */}
                                <div className="bg-amber-300 rounded-2xl p-8">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">Rs 5000</div>
                                    <div className="text-gray-800 mb-8 text-lg">Lifetime Access</div>
                                    <button className="w-full bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center text-lg">
                                        Subscribe
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Security Badge */}
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-red-500 font-medium">⚡ limited time only!</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-600">Secured by</span>
                                        <span className="font-semibold text-blue-600">Razorpay</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call Scheduling Section */}
            <div className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg text-gray-700">
                        <span className="font-semibold">Once you subscribe,</span> we will schedule a call with you to get you
                        started. 📞
                    </p>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-20">What people think about us?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Testimonial 1 */}
                        <div className="bg-white">
                            <div className="flex items-start space-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=face"
                                    alt="Dr. Santosh KrishnaMadikiri"
                                    className="w-14 h-14 rounded-full flex-shrink-0"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">Dr. Santosh KrishnaMadikiri</h3>
                                    <p className="text-sm text-gray-600 mb-4">Radiation Oncologist, KIMS</p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Map view on 1acre.in is a great tool to quickly discover lands and agents especially with my hectic
                                        schedule.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white">
                            <div className="flex items-start space-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face"
                                    alt="YVST Sai"
                                    className="w-14 h-14 rounded-full flex-shrink-0"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">YVST Sai</h3>
                                    <p className="text-sm text-gray-600 mb-4">Retd. Income-tax commissioner</p>
                                    <p className="text-gray-700 leading-relaxed">
                                        The MapView was extremely helpful, when I wanted to sell my land at Allipur and wanted to come up
                                        with the right pricing for it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white">
                            <div className="flex items-start space-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                                    alt="Tulasi Krishna Chaitanya"
                                    className="w-14 h-14 rounded-full flex-shrink-0"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">Tulasi Krishna Chaitanya</h3>
                                    <p className="text-sm text-gray-600 mb-4">Director, Tulasi seeds</p>
                                    <p className="text-gray-700 leading-relaxed">
                                        We were looking to establish seed processing unit on Vijayawada highway. The HMDA zoning on
                                        1acre.in's map helped me short list areas in conservation zone and made the search much easier.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex justify-center space-x-4 mt-12">
                        <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
