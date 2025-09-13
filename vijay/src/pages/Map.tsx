"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, CircleMarker, Popup, Marker } from "react-leaflet"
import { Search, Filter, Layers, Plus, Minus, X, ChevronDown } from "lucide-react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { landDataService, type LandProperty } from "../services/landDataService"

const createCityLabelIcon = (cityName: string) => {
    return L.divIcon({
        className: "city-label",
        html: `<div style="
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      white-space: nowrap;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      border: 1px solid rgba(255,255,255,0.3);
    ">${cityName}</div>`,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
    })
}

const Map = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [showFilters, setShowFilters] = useState(false)
    const [showLayers, setShowLayers] = useState(false)
    const [properties, setProperties] = useState<LandProperty[]>([])
    const [filteredProperties, setFilteredProperties] = useState<LandProperty[]>([])

    const [filters, setFilters] = useState({
        type: { lands: true, plots: true },
        listedBy: { owner: false, agent: false, acre: false } as Record<string, boolean>,
        uploadDate: "All",
        roadWidth: [0, 100],
        budget: [0, 30],
        size: [0, 30],
    })

    const majorCities = [
        { name: "Mumbai", lat: 19.076, lng: 72.8777 },
        { name: "Delhi", lat: 28.6139, lng: 77.209 },
        { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
        { name: "Hyderabad", lat: 17.385, lng: 78.4867 },
        { name: "Chennai", lat: 13.0827, lng: 80.2707 },
        { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
        { name: "Pune", lat: 18.5204, lng: 73.8567 },
        { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
        { name: "Jaipur", lat: 26.9124, lng: 75.7873 },
        { name: "Surat", lat: 21.1702, lng: 72.8311 },
        { name: "Lucknow", lat: 26.8467, lng: 80.9462 },
        { name: "Kanpur", lat: 26.4499, lng: 80.3319 },
        { name: "Nagpur", lat: 21.1458, lng: 79.0882 },
        { name: "Indore", lat: 22.7196, lng: 75.8577 },
        { name: "Bhopal", lat: 23.2599, lng: 77.4126 },
        { name: "Visakhapatnam", lat: 17.6868, lng: 83.2185 },
        { name: "Patna", lat: 25.5941, lng: 85.1376 },
        { name: "Vadodara", lat: 22.3072, lng: 73.1812 },
        { name: "Ludhiana", lat: 30.901, lng: 75.8573 },
        { name: "Agra", lat: 27.1767, lng: 78.0081 },
        { name: "Nashik", lat: 19.9975, lng: 73.7898 },
        { name: "Faridabad", lat: 28.4089, lng: 77.3178 },
        { name: "Meerut", lat: 28.9845, lng: 77.7064 },
        { name: "Rajkot", lat: 22.3039, lng: 70.8022 },
        { name: "Kalyan-Dombivali", lat: 19.2403, lng: 73.1305 },
        { name: "Vasai-Virar", lat: 19.4912, lng: 72.8054 },
        { name: "Varanasi", lat: 25.3176, lng: 82.9739 },
        { name: "Srinagar", lat: 34.0837, lng: 74.7973 },
        { name: "Aurangabad", lat: 19.8762, lng: 75.3433 },
        { name: "Dhanbad", lat: 23.7957, lng: 86.4304 },
        { name: "Amritsar", lat: 31.634, lng: 74.8723 },
        { name: "Navi Mumbai", lat: 19.033, lng: 73.0297 },
        { name: "Allahabad", lat: 25.4358, lng: 81.8463 },
        { name: "Ranchi", lat: 23.3441, lng: 85.3096 },
        { name: "Howrah", lat: 22.5958, lng: 88.2636 },
        { name: "Coimbatore", lat: 11.0168, lng: 76.9558 },
        { name: "Jabalpur", lat: 23.1815, lng: 79.9864 },
        { name: "Gwalior", lat: 26.2183, lng: 78.1828 },
        { name: "Vijayawada", lat: 16.5062, lng: 80.648 },
        { name: "Jodhpur", lat: 26.2389, lng: 73.0243 },
        { name: "Madurai", lat: 9.9252, lng: 78.1198 },
        { name: "Raipur", lat: 21.2514, lng: 81.6296 },
        { name: "Kota", lat: 25.2138, lng: 75.8648 },
        { name: "Chandigarh", lat: 30.7333, lng: 76.7794 },
        { name: "Guwahati", lat: 26.1445, lng: 91.7362 },
        { name: "Solapur", lat: 17.6599, lng: 75.9064 },
        { name: "Hubli-Dharwad", lat: 15.3647, lng: 75.124 },
        { name: "Bareilly", lat: 28.367, lng: 79.4304 },
        { name: "Moradabad", lat: 28.8386, lng: 78.7733 },
        { name: "Mysore", lat: 12.2958, lng: 76.6394 },
        { name: "Gurgaon", lat: 28.4595, lng: 77.0266 },
        { name: "Aligarh", lat: 27.8974, lng: 78.088 },
        { name: "Jalandhar", lat: 31.326, lng: 75.5762 },
        { name: "Tiruchirappalli", lat: 10.7905, lng: 78.7047 },
        { name: "Bhubaneswar", lat: 20.2961, lng: 85.8245 },
        { name: "Salem", lat: 11.664, lng: 78.146 },
        { name: "Warangal", lat: 17.9689, lng: 79.5941 },
        { name: "Mira-Bhayandar", lat: 19.2952, lng: 72.8544 },
        { name: "Thiruvananthapuram", lat: 8.5241, lng: 76.9366 },
        { name: "Bhiwandi", lat: 19.3002, lng: 73.0635 },
        { name: "Saharanpur", lat: 29.968, lng: 77.5552 },
        { name: "Gorakhpur", lat: 26.7606, lng: 83.3732 },
        { name: "Guntur", lat: 16.3067, lng: 80.4365 },
        { name: "Bikaner", lat: 28.0229, lng: 73.3119 },
        { name: "Amravati", lat: 20.9374, lng: 77.7796 },
        { name: "Noida", lat: 28.5355, lng: 77.391 },
        { name: "Jamshedpur", lat: 22.8046, lng: 86.2029 },
        { name: "Bhilai Nagar", lat: 21.1938, lng: 81.3509 },
        { name: "Cuttack", lat: 20.4625, lng: 75.8828 },
        { name: "Firozabad", lat: 27.1592, lng: 78.3957 },
        { name: "Kochi", lat: 9.9312, lng: 76.2673 },
        { name: "Bhavnagar", lat: 21.7645, lng: 72.1519 },
        { name: "Dehradun", lat: 30.3165, lng: 78.0322 },
        { name: "Durgapur", lat: 23.48, lng: 87.3119 },
        { name: "Asansol", lat: 23.6739, lng: 86.9524 },
        { name: "Nanded Waghala", lat: 19.1383, lng: 77.2975 },
        { name: "Kolhapur", lat: 16.705, lng: 74.2433 },
        { name: "Ajmer", lat: 26.4499, lng: 74.6399 },
        { name: "Gulbarga", lat: 17.3297, lng: 76.8343 },
        { name: "Jamnagar", lat: 22.4707, lng: 70.0577 },
        { name: "Ujjain", lat: 23.1765, lng: 75.7885 },
        { name: "Loni", lat: 28.7333, lng: 77.2833 },
        { name: "Siliguri", lat: 26.7271, lng: 88.3953 },
        { name: "Jhansi", lat: 25.4484, lng: 78.5685 },
        { name: "Ulhasnagar", lat: 19.2215, lng: 73.1645 },
        { name: "Nellore", lat: 14.4426, lng: 79.9865 },
        { name: "Jammu", lat: 32.7266, lng: 74.857 },
        { name: "Sangli-Miraj & Kupwad", lat: 16.8524, lng: 74.5815 },
        { name: "Belgaum", lat: 15.8497, lng: 74.4977 },
        { name: "Mangalore", lat: 12.9141, lng: 74.856 },
        { name: "Ambattur", lat: 13.1143, lng: 80.1548 },
        { name: "Tirunelveli", lat: 8.7139, lng: 77.7567 },
        { name: "Malegaon", lat: 20.5579, lng: 74.5287 },
        { name: "Gaya", lat: 24.7914, lng: 85.0002 },
    ]

    useEffect(() => {
        const unsubscribe = landDataService.subscribe((newProperties) => {
            setProperties(newProperties)
            setFilteredProperties(newProperties)
        })

        return unsubscribe
    }, [])

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredProperties(properties)
        } else {
            const filtered = landDataService.searchProperties(searchQuery)
            setFilteredProperties(filtered)
        }
    }, [searchQuery, properties])

    const getMarkerColor = (pricePerAcre: number) => {
        if (pricePerAcre < 20) return "#FEF08A" // Light yellow
        if (pricePerAcre < 40) return "#FDE047" // Yellow
        if (pricePerAcre < 60) return "#FACC15" // Darker yellow
        if (pricePerAcre < 80) return "#F59E0B" // Amber/Orange
        if (pricePerAcre < 100) return "#F97316" // Orange
        if (pricePerAcre < 120) return "#EA580C" // Dark orange
        return "#DC2626" // Red
    }

    return (
        <div className="h-screen w-full relative bg-white">
            <MapContainer
                center={[16.5062, 80.648]} // Centered on Vijayawada region like 1acre.in screenshot
                zoom={10} // Increased zoom to match 1acre.in view level
                style={{ height: "100%", width: "100%" }}
                className="z-0"
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={19}
                />

                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}"
                    opacity={0.7}
                />

                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                    opacity={0.8}
                />

                {majorCities.map((city) => (
                    <Marker key={city.name} position={[city.lat, city.lng]} icon={createCityLabelIcon(city.name)} />
                ))}

                {filteredProperties.map((property) => (
                    <CircleMarker
                        key={property.id}
                        center={property.position}
                        radius={6} // Increased marker size to match 1acre.in
                        pathOptions={{
                            fillColor: getMarkerColor(property.pricePerAcre),
                            color: getMarkerColor(property.pricePerAcre),
                            weight: 2, // Increased border weight for better visibility
                            opacity: 0.9, // Increased opacity to match 1acre.in
                            fillOpacity: 0.8,
                        }}
                    >
                        <Popup maxWidth={400} className="custom-popup">
                            <div className="w-80 bg-white rounded-lg shadow-lg">
                                {/* Header with close button */}
                                <div className="flex items-center justify-between p-4 border-b">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-semibold text-gray-900">{Math.round(property.area * 4840)} Sq Yards</h3>
                                        {property.verified && (
                                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="px-4 py-2">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-sm">{property.location}</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="px-4 py-2">
                                    <div className="text-lg font-semibold text-gray-900">
                                        ₹ {Math.round(property.pricePerAcre * 1000).toLocaleString()} /sq yard
                                    </div>
                                    <div className="text-sm text-gray-500">(Total - {(property.price / 10).toFixed(2)} Cr)</div>
                                </div>

                                {/* Facilitated by */}
                                <div className="px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                        <span className="text-sm text-gray-700">Facilitated by 1acre</span>
                                        <button className="text-blue-500 text-sm hover:underline">What's This?</button>
                                    </div>
                                </div>

                                {/* Property Image */}
                                <div className="px-4 py-2">
                                    <div className="relative bg-gray-200 rounded-lg h-40 overflow-hidden">
                                        <img
                                            src="/agricultural-land-plot-with-soil.jpg"
                                            alt="Property"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Navigation arrows */}
                                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="px-4 py-3">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex space-x-6">
                                            <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                                                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                    />
                                                </svg>
                                                <span className="text-xs">Shortlist</span>
                                            </button>
                                            <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                                                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                                    />
                                                </svg>
                                                <span className="text-xs">Share</span>
                                            </button>
                                            <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                                                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                                    />
                                                </svg>
                                                <span className="text-xs">Directions</span>
                                            </button>
                                            <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                                                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                                <span className="text-xs">New tab</span>
                                            </button>
                                        </div>
                                    </div>

                                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors">
                                        Contact 1acre
                                    </button>
                                </div>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>

            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                {/* Search and Filters */}
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Enter Location"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-80 pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-gray-700"
                        />
                    </div>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700"
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                {/* Layers Control */}
                <button
                    onClick={() => setShowLayers(!showLayers)}
                    className="px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700"
                >
                    <Layers className="w-4 h-4" />
                    Layers
                </button>
            </div>

            <div className="absolute bottom-6 right-6 z-10 flex flex-col space-y-2">
                <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Plus className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Minus className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {showFilters && (
                <div className="absolute top-20 left-4 z-20 bg-white rounded-lg shadow-lg border border-gray-200 w-96 max-h-[80vh] overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
                        <button onClick={() => setShowFilters(false)} className="p-1 hover:bg-gray-100 rounded">
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    <div className="p-4 space-y-6">
                        {/* Type Section */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">Type</h4>
                            <div className="flex gap-3">
                                <button
                                    className={`px-4 py-2 rounded-full border-2 flex items-center gap-2 ${filters.type.lands ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300"
                                        }`}
                                    onClick={() => setFilters((prev) => ({ ...prev, type: { ...prev.type, lands: !prev.type.lands } }))}
                                >
                                    Lands
                                    {filters.type.lands && (
                                        <div className="w-4 h-4 bg-white text-black rounded flex items-center justify-center text-xs">
                                            ✓
                                        </div>
                                    )}
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-full border-2 flex items-center gap-2 ${filters.type.plots ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300"
                                        }`}
                                    onClick={() => setFilters((prev) => ({ ...prev, type: { ...prev.type, plots: !prev.type.plots } }))}
                                >
                                    Plots
                                    {filters.type.plots && (
                                        <div className="w-4 h-4 bg-white text-black rounded flex items-center justify-center text-xs">
                                            ✓
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Listed By Section */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">Listed By:</h4>
                            <div className="flex gap-3">
                                {["Owner", "Agent", "1acre"].map((type) => (
                                    <button
                                        key={type}
                                        className={`px-4 py-2 rounded-full border-2 flex items-center gap-2 ${filters.listedBy[type.toLowerCase() === "1acre" ? "acre" : type.toLowerCase()]
                                                ? "bg-gray-200 border-gray-400"
                                                : "bg-white text-gray-500 border-gray-300"
                                            }`}
                                        onClick={() => {
                                            const key = type.toLowerCase() === "1acre" ? "acre" : type.toLowerCase()
                                            setFilters((prev) => ({ ...prev, listedBy: { ...prev.listedBy, [key]: !prev.listedBy[key] } }))
                                        }}
                                    >
                                        {type}
                                        <div className="w-4 h-4 border border-gray-400 rounded"></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Upload Date Section */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">Upload Date</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {["Last 1 Week", "Last 1 Month", "Last 3 Months", "Last 6 Months", "Last 1 Year", "All"].map(
                                    (period) => (
                                        <button
                                            key={period}
                                            className={`px-4 py-2 rounded-full border-2 flex items-center justify-between ${filters.uploadDate === period
                                                    ? "bg-black text-white border-black"
                                                    : "bg-white text-gray-700 border-gray-300"
                                                }`}
                                            onClick={() => setFilters((prev) => ({ ...prev, uploadDate: period }))}
                                        >
                                            {period}
                                            <div
                                                className={`w-4 h-4 rounded-full border-2 ${filters.uploadDate === period ? "bg-white border-white" : "border-gray-400"
                                                    }`}
                                            >
                                                {filters.uploadDate === period && <div className="w-2 h-2 bg-black rounded-full m-0.5"></div>}
                                            </div>
                                        </button>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Approach Road Width Section */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">Approach Road Width</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="px-3 py-1 border border-gray-300 rounded text-sm">0</div>
                                    <div className="px-3 py-1 border border-gray-300 rounded text-sm">100ft+</div>
                                </div>
                                <div className="relative">
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-2 bg-black rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                    <div className="absolute left-0 top-0 w-4 h-4 bg-gray-400 rounded-full -mt-1 cursor-pointer"></div>
                                    <div className="absolute right-0 top-0 w-4 h-4 bg-gray-400 rounded-full -mt-1 cursor-pointer"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>0</span>
                                    <span>20ft</span>
                                    <span>40ft</span>
                                    <span>60ft</span>
                                    <span>80ft</span>
                                    <span>100ft+</span>
                                </div>
                            </div>
                        </div>

                        {/* Budget Section */}
                        <div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3">Budget</h4>
                            <div className="space-y-4">
                                <div className="flex justify-end">
                                    <div className="px-3 py-1 bg-gray-200 rounded text-sm">30Cr+</div>
                                </div>
                                <div className="relative">
                                    <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"></div>
                                    <div className="absolute left-0 top-0 w-4 h-4 bg-gray-400 rounded-full -mt-1 cursor-pointer"></div>
                                    <div className="absolute right-0 top-0 w-4 h-4 bg-gray-400 rounded-full -mt-1 cursor-pointer"></div>
                                </div>
                                <div className="text-sm text-gray-700">0Cr</div>
                            </div>
                        </div>

                        {/* Size Section */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-lg font-medium text-gray-900">Size</h4>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-700">Acres</span>
                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-end">
                                    <div className="px-3 py-1 border border-gray-300 rounded text-sm">30+</div>
                                </div>
                                <div className="relative">
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-2 bg-black rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                    <div className="absolute left-0 top-0 w-4 h-4 bg-gray-400 rounded-full -mt-1 cursor-pointer"></div>
                                    <div className="absolute right-0 top-0 w-4 h-4 bg-gray-400 rounded-full -mt-1 cursor-pointer"></div>
                                </div>
                                <div className="flex justify-start">
                                    <div className="px-3 py-1 border border-gray-300 rounded text-sm">0</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex gap-3 p-4 border-t">
                        <button
                            className="flex-1 px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
                            onClick={() =>
                                setFilters({
                                    type: { lands: true, plots: true },
                                    listedBy: { owner: false, agent: false, acre: false },
                                    uploadDate: "All",
                                    roadWidth: [0, 100],
                                    budget: [0, 30],
                                    size: [0, 30],
                                })
                            }
                        >
                            Clear all
                        </button>
                        <button className="flex-1 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 flex items-center justify-center gap-2">
                            Apply
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {showLayers && (
                <div className="absolute top-20 right-4 z-20 bg-white rounded-lg shadow-lg border border-gray-200 w-96 max-h-[80vh] overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-xl font-semibold text-gray-900">Layers</h3>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded">
                                <span className="text-sm text-gray-700">Andhra Pradesh</span>
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </div>
                            <button onClick={() => setShowLayers(false)} className="p-1 hover:bg-gray-100 rounded">
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                    </div>

                    <div className="p-4 space-y-6">
                        {/* Andhra Pradesh Section */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Andhra Pradesh</h4>

                            {/* Listings */}
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                        <div className="w-8 h-6 bg-gradient-to-r from-green-200 to-orange-200 rounded-sm relative">
                                            <div className="absolute inset-1 flex items-center justify-center">
                                                <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                                                <div className="w-1 h-1 bg-yellow-400 rounded-full ml-1"></div>
                                                <div className="w-1 h-1 bg-green-400 rounded-full ml-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-gray-700">Listings</span>
                                </div>
                                <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rounded flex items-center justify-center">
                                        <span className="text-gray-600 text-xs">✓</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Amaravati Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">Amaravati</h4>
                                <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                                    <div className="w-3 h-3 bg-black rounded-full"></div>
                                </div>
                            </div>

                            {/* Masterplan */}
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                        <div className="w-8 h-6 bg-gradient-to-r from-blue-200 to-purple-200 rounded-sm relative">
                                            <div className="absolute inset-1 grid grid-cols-3 gap-px">
                                                {[...Array(9)].map((_, i) => (
                                                    <div key={i} className="bg-gray-400 rounded-sm"></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-900 font-medium">Masterplan</span>
                                            <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-gray-600 text-xs">i</span>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500">APCRDA Masterplan 2050</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Upcoming</div>
                            </div>
                        </div>

                        {/* Kakinada Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">Kakinada</h4>
                                <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                            </div>

                            {/* Masterplan */}
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                        <div className="w-8 h-6 bg-gradient-to-r from-green-200 to-yellow-200 rounded-sm relative">
                                            <div className="absolute inset-1 grid grid-cols-3 gap-px">
                                                {[...Array(9)].map((_, i) => (
                                                    <div key={i} className="bg-gray-400 rounded-sm"></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-medium">Masterplan</div>
                                        <div className="text-sm text-gray-500">GUDA Masterplan 2050</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Upcoming</div>
                            </div>
                        </div>

                        {/* Tirupati Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">Tirupati</h4>
                                <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                            </div>

                            {/* Masterplan */}
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                        <div className="w-8 h-6 bg-gradient-to-r from-orange-200 to-red-200 rounded-sm relative">
                                            <div className="absolute inset-1 grid grid-cols-3 gap-px">
                                                {[...Array(9)].map((_, i) => (
                                                    <div key={i} className="bg-gray-400 rounded-sm"></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-medium">Masterplan</div>
                                        <div className="text-sm text-gray-500">TUDA Masterplan 2050</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Upcoming</div>
                            </div>
                        </div>

                        {/* VGTM Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">VGTM</h4>
                                <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                            </div>

                            {/* Masterplan */}
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                        <div className="w-8 h-6 bg-gradient-to-r from-purple-200 to-pink-200 rounded-sm relative">
                                            <div className="absolute inset-1 grid grid-cols-3 gap-px">
                                                {[...Array(9)].map((_, i) => (
                                                    <div key={i} className="bg-gray-400 rounded-sm"></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-medium">Masterplan</div>
                                        <div className="text-sm text-gray-500">APCRDA Region Masterplan 2050 ...</div>
                                        <button className="text-blue-500 text-sm hover:underline">More</button>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Upcoming</div>
                            </div>
                        </div>

                        {/* Visakhapatnam Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">Visakhapatnam</h4>
                                <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                            </div>

                            {/* Masterplan */}
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                        <div className="w-8 h-6 bg-gradient-to-r from-teal-200 to-blue-200 rounded-sm relative">
                                            <div className="absolute inset-1 grid grid-cols-3 gap-px">
                                                {[...Array(9)].map((_, i) => (
                                                    <div key={i} className="bg-gray-400 rounded-sm"></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-900 font-medium">Masterplan</span>
                                            <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-gray-600 text-xs">i</span>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500">VMRDA Masterplan 2041</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Upcoming</div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Button */}
                    <div className="p-4 border-t">
                        <button className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 flex items-center justify-center gap-2">
                            Apply
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Map
