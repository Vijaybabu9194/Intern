"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
    Menu,
    X,
    MapPin,
    User,
    Info,
    CheckSquare,
    Phone,
    ChevronRight,
    Shield,
    FileText,
    ChevronDown,
} from "lucide-react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("")

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const openLoginModal = () => {
        setShowLoginModal(true)
        setIsMenuOpen(false)
    }

    const closeLoginModal = () => {
        setShowLoginModal(false)
    }

    const handleSendOTP = () => {
        console.log("Sending OTP to:", phoneNumber)
        // Add OTP sending logic here
    }

    return (
        <>
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo and tagline */}
                        <div className="flex items-center gap-3">
                            <Link to="/" className="flex items-center">
                                <div className="text-black font-bold text-2xl tracking-tight">
                                    <span className="bg-yellow-400 px-2 py-1 rounded">1a</span>
                                    <span>cre.in</span>
                                </div>
                            </Link>
                            <span className="text-gray-700 font-medium text-lg">Buy & Sell Verified Lands</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/map"
                                className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1"
                            >
                                <MapPin className="w-4 h-4" />
                                Map
                            </Link>
                            <Link to="/buy-land" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                Buy Land
                            </Link>
                            <Link to="/sell-land" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                Sell Land
                            </Link>
                            <Link
                                to="/subscribe"
                                className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1"
                            >
                                <User className="w-4 h-4" />
                                Subscribe
                            </Link>
                        </nav>

                        {/* Login Button & Mobile Menu */}
                        <div className="flex items-center gap-4 ml-8">
                            <button
                                onClick={openLoginModal}
                                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
                            >
                                Login
                                <span className="text-sm">→</span>
                            </button>

                            {/* Mobile menu button */}
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
                    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto">
                        <div className="p-6">
                            {/* Header with Login and Close */}
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <button onClick={openLoginModal} className="text-xl font-semibold text-black underline">
                                        Login
                                    </button>
                                </div>
                                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                    <X className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <nav className="space-y-6">
                                <Link
                                    to="/about"
                                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Info className="w-5 h-5 text-gray-500" />
                                    <span className="text-lg">About Us</span>
                                </Link>

                                <Link
                                    to="/verification"
                                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <CheckSquare className="w-5 h-5 text-gray-500" />
                                    <span className="text-lg">Our Verification Process</span>
                                </Link>

                                <Link
                                    to="/contact"
                                    className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gray-500" />
                                        <span className="text-lg">Contact Us</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                </Link>
                            </nav>

                            {/* Tag Along Section */}
                            <div className="mt-8 bg-yellow-400 rounded-2xl p-6 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-black mb-3">Tag Along</h3>
                                    <p className="text-black text-lg leading-relaxed">
                                        Buy Large Land Parcels
                                        <br />
                                        with us, starting
                                        <br />
                                        <span className="font-semibold">@ 4 Lakh/ Acre.</span>
                                    </p>
                                </div>
                                <div className="absolute right-4 top-4">
                                    <div className="relative">
                                        <div className="w-24 h-32 bg-yellow-300 rounded-2xl transform rotate-12 opacity-80"></div>
                                        <div className="absolute top-2 left-2 space-y-2">
                                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                                            </div>
                                            <div className="w-6 h-6 bg-white rounded-full shadow-sm"></div>
                                            <div className="w-6 h-6 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Links */}
                            <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                                <Link
                                    to="/privacy"
                                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Shield className="w-5 h-5" />
                                    <span>Privacy Policy</span>
                                </Link>
                                <Link
                                    to="/terms"
                                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FileText className="w-5 h-5" />
                                    <span>Terms & Conditions</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showLoginModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeLoginModal} />
                    <div className="relative bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-black">Login</h2>
                            <button onClick={closeLoginModal} className="p-2 hover:bg-gray-100 rounded-full">
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        {/* Phone Number Input */}
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700 mb-4">Phone number</label>
                            <div className="flex">
                                <div className="flex items-center gap-2 px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                                    <img
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3Crect width='3' height='2' fill='%23ff9933'/%3E%3Crect width='3' height='0.67' y='0.67' fill='%23ffffff'/%3E%3Crect width='3' height='0.67' y='1.33' fill='%23138808'/%3E%3C/svg%3E"
                                        alt="India"
                                        className="w-6 h-4"
                                    />
                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                </div>
                                <div className="px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-700">+91</div>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-gray-500 text-center mb-8 italic">Don't worry, we neither cold call you nor spam you!</p>

                        {/* Send OTP Button */}
                        <button
                            onClick={handleSendOTP}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                        >
                            Send OTP
                            <span>→</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header
