const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">Last updated: January 1, 2025</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We collect information you provide directly to us, such as when you create an account, list a property,
                                or contact us for support.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information:</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>Name, email address, and phone number</li>
                                <li>Property details and location information</li>
                                <li>Payment and transaction information</li>
                                <li>Communication preferences</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send you technical notices and support messages</li>
                                <li>Communicate with you about products, services, and events</li>
                                <li>Monitor and analyze trends and usage</li>
                                <li>Detect, investigate, and prevent fraudulent transactions</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may share your information in the following situations:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>With your consent or at your direction</li>
                                <li>With service providers who perform services on our behalf</li>
                                <li>For legal reasons or to protect rights and safety</li>
                                <li>In connection with a merger, acquisition, or sale of assets</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We implement appropriate technical and organizational measures to protect your personal information
                                against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibent text-gray-900 mb-4">5. Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>Access and update your personal information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Object to processing of your personal information</li>
                                <li>Request data portability</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to collect and use personal information about you. You
                                can control cookies through your browser settings.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700">Email: support@1acre.in</p>
                                <p className="text-gray-700">Phone: +918341109311</p>
                                <p className="text-gray-700">Address: Bangalore, Karnataka, India</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
