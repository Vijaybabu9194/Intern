import { Link } from "react-router-dom"
import { Instagram, Youtube, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Services Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/services/hand-holding" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Hand Holding
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/tag-along" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Tag Along
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <p className="text-gray-600">
                                <a href="tel:+918341109311" className="hover:text-gray-900 transition-colors">
                                    +918341109311
                                </a>
                            </p>
                            <p className="text-gray-600">
                                <span>email: </span>
                                <a href="mailto:support@1acre.in" className="hover:text-gray-900 transition-colors">
                                    support@1acre.in
                                </a>
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex space-x-4 pt-2">
                                <a
                                    href="https://instagram.com/1acre.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://youtube.com/@1acre.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com/company/1acre.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-yellow-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-black font-medium">© 2025 - 1acre.in - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
