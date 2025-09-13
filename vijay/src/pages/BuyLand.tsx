import { ArrowRight, Handshake, Users } from "lucide-react"
import { Link } from "react-router-dom"

const BuyLand = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Aerial View */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src="/aerial-satellite-view-of-agricultural-land-with-gr.avif"
                    alt="Aerial view of terraced agricultural fields"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Buy <span className="text-gray-600">Through 1acre</span>
                    </h1>
                </div>

                {/* Service Cards */}
                <div className="space-y-6">
                    {/* Hand Holding Card */}
                    <Link to="/handholding">
                        <div className="bg-yellow-100 rounded-2xl p-8 flex items-center justify-between hover:bg-yellow-200 transition-colors cursor-pointer">
                            <div className="flex items-center">
                                <div className="mr-6">
                                    <Handshake className="w-8 h-8 text-gray-700" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Hand holding</h3>
                                    <p className="text-gray-700 text-lg">We help you find, evaluate, and buy the right lands.</p>
                                </div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-gray-600" />
                        </div>
                    </Link>

                    {/* Tag Along Card */}
                    <Link to="/tag-along">
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex items-center">
                                <div className="mr-6">
                                    <Users className="w-8 h-8 text-gray-700" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Tag along</h3>
                                    <p className="text-gray-700 text-lg">
                                        We Buy Lands. You can tag-along with us. (Starting at 4 lakh/ acre)
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-gray-600" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BuyLand
