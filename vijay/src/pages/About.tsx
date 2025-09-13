import { Users, Target, Award, MapPin } from "lucide-react"

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">About 1acre.in</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            India's most trusted platform for buying and selling verified agricultural and residential land. We're
                            revolutionizing the way people discover, evaluate, and transact land properties.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <Target className="w-12 h-12 text-yellow-400 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To democratize land ownership in India by providing a transparent, secure, and efficient platform that
                            connects verified land sellers with genuine buyers. We aim to eliminate the complexities and uncertainties
                            traditionally associated with land transactions.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8">
                        <Award className="w-12 h-12 text-yellow-400 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To become India's leading land marketplace, empowering millions of Indians to make informed land
                            investment decisions. We envision a future where every land transaction is transparent, documented, and
                            beneficial for all parties involved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Key Features */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose 1acre.in?</h2>
                        <p className="text-xl text-gray-600">We provide comprehensive solutions for all your land needs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Properties</h3>
                            <p className="text-gray-600">
                                All properties undergo thorough verification for legal compliance and authenticity
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Satellite Mapping</h3>
                            <p className="text-gray-600">
                                Advanced satellite imagery and mapping technology for accurate property visualization
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                            <p className="text-gray-600">
                                Dedicated team of land experts to guide you through every step of the process
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                            <p className="text-gray-600">Clear, upfront pricing with no hidden fees or surprise charges</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gray-900 rounded-lg p-12 text-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
                        <p className="text-xl text-gray-300">Trusted by thousands across India</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">10,000+</div>
                            <div className="text-gray-300">Properties Listed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">5,000+</div>
                            <div className="text-gray-300">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                            <div className="text-gray-300">Cities Covered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">₹500Cr+</div>
                            <div className="text-gray-300">Transactions Facilitated</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
                        <p className="text-xl text-gray-600">Experienced professionals dedicated to transforming the land market</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img
                                src="/ceo-headshot.png"
                                alt="CEO"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Rajesh Kumar</h3>
                            <p className="text-yellow-600 mb-2">Founder & CEO</p>
                            <p className="text-gray-600 text-sm">15+ years in real estate and technology</p>
                        </div>

                        <div className="text-center">
                            <img
                                src="/professional-cto-headshot.png"
                                alt="CTO"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Priya Sharma</h3>
                            <p className="text-yellow-600 mb-2">Chief Technology Officer</p>
                            <p className="text-gray-600 text-sm">Expert in GIS and mapping technologies</p>
                        </div>

                        <div className="text-center">
                            <img
                                src="/coo-headshot.png"
                                alt="COO"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Amit Patel</h3>
                            <p className="text-yellow-600 mb-2">Chief Operating Officer</p>
                            <p className="text-gray-600 text-sm">Operations and business development specialist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
