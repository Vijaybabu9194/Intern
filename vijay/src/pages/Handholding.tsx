import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function Handholding() {
    const testimonials = [
        {
            name: "Suryakamal",
            title: "Founder, Everrise Infra",
            content:
                "The team is highly supportive, always accessible to address any queries promptly. They are young, enthusiastic, and proactive, offering valuable insights into market dynamics and helping us evaluate the feasibility of various deals. Their handholding process is smooth, transparent, and reassuring throughout. What sets them apart is their approach to connecting clients directly with property owners, actively participating in negotiations while maintaining a neutral stance—unlike other brokers who often withhold crucial information.",
        },
        {
            name: "Vishwanadh Malladi",
            title: "Founder, Sky Reach Villas",
            content:
                "Real estate is a largely unorganized sector, and with that comes the fundamental challenge of building trust. In such an open and fragmented space, anyone can enter the market—so finding a team with a scientific, process-oriented approach is rare. That's where 1acre.in truly stands out. The biggest value they bring is their structured and trustworthy process. They don't just help bridge the trust gap—they save time and effort. What usually takes two or three meetings to establish credibility can now be cut down significantly. The team is incredibly friendly, proactive, and responsive. Every interaction is met with energy and genuine feedback, which makes the entire experience more positive and seamless. I see immense potential in this service. As 1acre.in continues to grow and refine their offering, I believe more people in the real estate ecosystem will benefit from what they're building. Thank you for the great service",
        },
        {
            name: "Sushanth",
            title: "Actor",
            content:
                "My experience with 1acre's handholding service was seamless and incredibly valuable. Vishal, who was assigned to me, helped me discover a wide range of land options with fully verified documents—something that's often hard to come by in real estate. The time and effort their team saved me, especially around legal due diligence and document verification, was immense. Their intuitive zoning map tool also made land selection much simpler compared to navigating official portals. With 1acre, I felt confident and well-supported throughout the process.",
        },
        {
            name: "Namit Agarwal",
            title: "Director, Mohan Steels",
            content:
                "I had a great experience with 1acre.in. The team is extremely efficient, responsive and quick to understand the needs of the client and address them in an apt manner. I was able to short list lands very quickly. As the process is very transperant you are only paying for the sellers price and no hidden cuts that brokers usually dupe the clients into paying. I would highly recommend them for buying/selling lands.",
        },
        {
            name: "Umakanth Katta",
            title: "Director, Anuktha Avenues",
            content:
                "Handholding is really useful as they give us exact properties matching our criteria. Team is always listening and they gave us lot of filtered properties matching our requirement.",
        },
        {
            name: "Prasanna",
            title: "Entrepreneur & Developer",
            content:
                "I would like to extend my sincere appreciation for the excellent service provided by Vishal from 1acre team. Throughout the property search process, he demonstrated exceptional diligence, professionalism, and integrity. Vishal took the time to understand my needs and consistently presented a variety of suitable properties, always following up promptly and thoroughly. I particularly appreciated his transparency in discussing the commission and terms right from the outset, which helped build a strong foundation of trust. It was a pleasure working with someone so knowledgeable, proactive, and honest. I would not hesitate to recommend Vishal to anyone in need of a reliable and committed real estate professional.",
        },
    ]

    const teamMembers = [
        {
            name: "Vishal Ponugoti",
            title: "Head, Transactions",
            location: "Telangana & AP",
            education: "Alumnus, BITS Pilani",
        },
        {
            name: "Pavan Chandana",
            title: "Head, Transactions",
            location: "Bangalore, Goa & Chennai",
            education: "Alumnus, BITS Pilani",
        },
        {
            name: "Ratna Kiran",
            title: "Co-Founder, 1acre.in",
            location: "",
            education: "Architect, School of Planning & Architecture, New Delhi.",
        },
        {
            name: "Satish Chandra",
            title: "Co-Founder, 1acre.in",
            location: "",
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
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Hand Holding</h1>
                    <p className="text-xl text-gray-600 max-w-4xl">
                        If you are actively looking to buy Lands and want our help with it, we can help you find, evaluate and buy
                        the right Lands, through our Hand-holding Service.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* The Advantage Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">The Advantage:</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Find More Options Faster</h3>
                            <p className="text-gray-600">
                                We tap into our 1200+ seller network to source the best available lands, even those not listed on
                                1acre.in
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Avoid Common Pitfalls</h3>
                            <p className="text-gray-600">
                                We share what we know about the land—commercials, risks, and paperwork—so you can decide with
                                confidence.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">With You Till The End</h3>
                            <p className="text-gray-600">
                                From search to final transaction, we stay involved to make sure things go smoothly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">What Customers Say:</h2>

                    <div className="space-y-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-8">
                                <div className="flex items-start mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-gray-600">{testimonial.title}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fair & Transparent Terms */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Fair & Transparent Terms:</h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">2%</div>
                            <div className="text-gray-600">Fee On Transaction</div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">₹50K</div>
                            <div className="text-gray-600">Screening Fee (Deductible)</div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">₹3cr</div>
                            <div className="text-gray-600">Min Budget</div>
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <a
                            href="https://calendar.app.google/hdj6bkThhjvx8DER7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                        >
                            Book a free call
                        </a>
                    </div>
                </div>

                {/* Meet the Team */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Team</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4"></div>
                                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-gray-600 text-sm mb-1">{member.title}</p>
                                {member.location && <p className="text-gray-600 text-sm mb-1">{member.location}</p>}
                                <p className="text-gray-500 text-xs whitespace-pre-line">{member.education}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
