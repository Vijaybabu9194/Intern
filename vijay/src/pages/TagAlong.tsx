import { ArrowLeft, Play } from "lucide-react"
import { Link } from "react-router-dom"

export default function TagAlong() {
    const testimonials = [
        {
            name: "V. Sai Teja",
            title: "Partner, A&T Law Partners",
            quote: "Seamless Experience",
            content:
                "1acre has made land investment incredibly accessible. I invested in a land parcel in Maharashtra through their tag-along model, and the experience was seamless. Their transparent process and professional team make it easy for individual investors to get started.",
        },
        {
            name: "Rohith Sampathi",
            title: "Entrepreneur",
            quote: "My First Land Purchase",
            content:
                "This is my first Land Purchase. I bought 10 acres and I would have never bought a Land if not for 1acre. The way they took care of everything, made my life much easier and added a lot of Joy to my Land Ownership journey. Keep sending me good opportunities.",
        },
        {
            name: "Mithun Sagar",
            title: "Software Engineer",
            quote: "1 Month From Start To Finish",
            content:
                "I was here in Hyderabad, for a month in between my on-site at the USA and the entire process including the registration got finished in this time.",
        },
        {
            name: "Neha Raj",
            title: "Maxillofacial Surgeon",
            quote: "Took Only Two Trips",
            content:
                "I always kept postponing the idea of owning beautiful Land parcels (where I eventually want to settle with family). 1acre helped me buy more than 25 acres beside a river, that too in two visits - one visit, to look at all the options and the other, for the registration.",
        },
    ]

    const completedDeals = [
        { month: "July '25", location: "Jambhora", acres: "8 Acres", price: "4.5 lakh / acre" },
        { month: "July '25", location: "Jambhora", acres: "5 Acres", price: "4.9 lakh / acre" },
        { month: "July '25", location: "Nade Sawangi", acres: "2 Acres", price: "8 lakh / acre" },
        { month: "July '25", location: "Bhamb Raja", acres: "5 Acres", price: "4.5 lakh / acre" },
        { month: "June '25", location: "Nade Sawangi", acres: "5 Acres", price: "7 lakh / acre" },
        { month: "May '25", location: "Chandapur", acres: "9 Acres", price: "3.75 lakh / acre" },
        { month: "May '25", location: "Pidha", acres: "24 Acres", price: "3.9 lakh / acre" },
        { month: "May '25", location: "Jambhora", acres: "5 Acres", price: "4.5 lakh / acre" },
    ]

    const availableDeals = [
        { location: "Tambha", acres: "12 acres", price: "6 lakh/acre", feature: "Riverside" },
        { location: "Chandapur", acres: "11 acres", price: "6 lakh/acre", feature: "Stream" },
        { location: "Kalamb", acres: "5 acres", price: "7 lakh/acre", feature: "" },
        { location: "Chandapur", acres: "12 Acres", price: "3.75 lakh/acre", feature: "Next to Forest" },
        { location: "Chandapur", acres: "6 Acres", price: "3.75 lakh/acre", feature: "Hilltop" },
        { location: "Jambhora", acres: "15 Acres", price: "5 lakh/acre", feature: "" },
        { location: "Jambhora", acres: "5 Acres", price: "5 lakh/acre", feature: "" },
        { location: "Bhamb Raja", acres: "25 Acres", price: "5 lakh/acre", feature: "Next to Forest" },
    ]

    const teamMembers = [
        {
            name: "Yashaswy Rao",
            title: "Head, Tag-along",
            education: "Alumnus, BITS Pilani",
        },
        {
            name: "Ratna Kiran",
            title: "Co-Founder, 1acre.in",
            education: "Architect, School of Planning & Architecture, New Delhi.",
        },
        {
            name: "Satish Chandra",
            title: "Co-Founder, 1acre.in",
            education: "Director- Mordor Intelligence\nIIM Ahmedabad, BITS Pilani",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link to="/buy-land" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Buy Land
                    </Link>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Tag-along</h1>
                    <p className="text-xl text-gray-600 mb-4">
                        We are buying large parcels of land for cheap, you can tag along.
                    </p>
                    <p className="text-lg text-gray-500">*Starting at 4 lakh/acre</p>
                </div>
            </div>

            {/* Video Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-12">
                    <Play className="w-16 h-16 text-white" />
                </div>

                {/* Stats Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">400+ Acres</div>
                        <div className="text-gray-600">Land Transacted So Far</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">1000+ Acres</div>
                        <div className="text-gray-600">Land Under Processing</div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="bg-gray-50 rounded-lg p-8 mb-16 text-center">
                    <p className="text-xl text-gray-700 italic leading-relaxed">
                        "We invest ourselves, in agricultural lands, in regions that we believe have the maximum potential for
                        returns. While at it, we help you build your large land portfolio in the same regions. For requirements
                        above 100 acres, we charge as low as 30k per acre"
                    </p>
                </div>

                {/* Testimonials */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Testimonials</h2>

                    <div className="space-y-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">"{testimonial.quote}"</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">{testimonial.content}</p>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-gray-600">{testimonial.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Already Bought Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Already Bought</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {completedDeals.map((deal, index) => (
                            <div key={index} className="bg-white border rounded-lg p-6">
                                <div className="text-sm text-green-600 font-semibold mb-2">Registration: Complete</div>
                                <div className="text-sm text-gray-500 mb-2">{deal.month}</div>
                                <div className="font-bold text-gray-900 mb-1">{deal.location}</div>
                                <div className="text-lg font-semibold text-gray-900">{deal.acres}</div>
                                <div className="text-green-600 font-semibold">{deal.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Currently Available Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Currently Available</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {availableDeals.map((deal, index) => (
                            <div key={index} className="bg-white border rounded-lg p-6">
                                {deal.feature && <div className="text-sm text-blue-600 font-semibold mb-2">{deal.feature}</div>}
                                <div className="font-bold text-gray-900 mb-1">{deal.location}</div>
                                <div className="text-lg font-semibold text-gray-900">{deal.acres}</div>
                                <div className="text-green-600 font-semibold">{deal.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Premium Access Section */}
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-8 text-center text-white mb-16">
                    <h2 className="text-2xl font-bold mb-4">
                        Tag-Along opportunities are only accessible by our ✨ Premium Subscribers
                    </h2>

                    <div className="bg-white text-gray-900 rounded-lg p-6 max-w-md mx-auto mb-6">
                        <h3 className="text-xl font-bold mb-4">Premium</h3>
                        <div className="space-y-2 text-left">
                            <div>✓ Unlimited Seller Contacts</div>
                            <div>✓ Unlock All Landowner Listings</div>
                            <div>✓ Exclusive Access To Facilitated Land Deals</div>
                            <div>✓ Discover Exclusive Tag-Along Opportunities</div>
                            <div>✓ Visualise with Premium Map Layers</div>
                            <div>✓ Early Access to Future Features</div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="text-3xl font-bold">Rs 5000</div>
                        <div className="text-yellow-100">Lifetime Access</div>
                    </div>

                    <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Subscribe
                    </button>

                    <p className="text-yellow-100 text-sm mt-4">for limited time only!</p>
                </div>

                {/* Meet the Team */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Team</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4"></div>
                                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-gray-600 text-sm mb-1">{member.title}</p>
                                <p className="text-gray-500 text-xs whitespace-pre-line">{member.education}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        <div className="border-b pb-4">
                            <h3 className="font-semibold text-gray-900">Is the Land Registered in my name or is it group-buying?</h3>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="font-semibold text-gray-900">Who will take care of the Land after I Purchase?</h3>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="font-semibold text-gray-900">Will you help me sell?</h3>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="font-semibold text-gray-900">Can NRIs also buy?</h3>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="font-semibold text-gray-900">What is a Lifetime subscription?</h3>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center">
                    <div className="mb-4">
                        <div className="text-3xl font-bold text-gray-900">Rs 5000</div>
                        <div className="text-gray-600">Lifetime Access</div>
                    </div>
                    <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                        Subscribe
                    </button>
                    <p className="text-gray-500 text-sm mt-4">for limited time only!</p>
                </div>
            </div>
        </div>
    )
}
