export interface LandProperty {
    id: string
    position: [number, number]
    price: number
    pricePerAcre: number
    area: number
    location: string
    city: string
    type: "Agricultural" | "Residential" | "Commercial"
    verified: boolean
    amenities: string[]
    description: string
    images: string[]
    contactInfo: {
        name: string
        phone: string
    }
    lastUpdated: Date
}

class LandDataService {
    private properties: Map<string, LandProperty> = new Map()
    private subscribers: ((properties: LandProperty[]) => void)[] = []

    constructor() {
        this.generateInitialData()
        this.startRealTimeUpdates()
    }

    private generateInitialData() {
        const cities = [
            { name: "Hyderabad", lat: 17.385, lng: 78.4867, density: 500 },
            { name: "Bangalore", lat: 12.9716, lng: 77.5946, density: 400 },
            { name: "Chennai", lat: 13.0827, lng: 80.2707, density: 350 },
            { name: "Mumbai", lat: 19.076, lng: 72.8777, density: 300 },
            { name: "Delhi", lat: 28.6139, lng: 77.209, density: 450 },
            { name: "Pune", lat: 18.5204, lng: 73.8567, density: 250 },
            { name: "Kolkata", lat: 22.5726, lng: 88.3639, density: 200 },
            { name: "Ahmedabad", lat: 23.0225, lng: 72.5714, density: 180 },
            { name: "Jaipur", lat: 26.9124, lng: 75.7873, density: 150 },
            { name: "Lucknow", lat: 26.8467, lng: 80.9462, density: 120 },
            { name: "Kanpur", lat: 26.4499, lng: 80.3319, density: 100 },
            { name: "Nagpur", lat: 21.1458, lng: 79.0882, density: 130 },
            { name: "Indore", lat: 22.7196, lng: 75.8577, density: 110 },
            { name: "Thane", lat: 19.2183, lng: 72.9781, density: 90 },
            { name: "Bhopal", lat: 23.2599, lng: 77.4126, density: 85 },
            { name: "Visakhapatnam", lat: 17.6868, lng: 83.2185, density: 95 },
            { name: "Pimpri-Chinchwad", lat: 18.6298, lng: 73.7997, density: 80 },
            { name: "Patna", lat: 25.5941, lng: 85.1376, density: 75 },
            { name: "Vadodara", lat: 22.3072, lng: 73.1812, density: 70 },
            { name: "Ludhiana", lat: 30.901, lng: 75.8573, density: 65 },
        ]

        let id = 1
        cities.forEach((city) => {
            for (let i = 0; i < city.density; i++) {
                const lat = city.lat + (Math.random() - 0.5) * 2
                const lng = city.lng + (Math.random() - 0.5) * 2

                const pricePerAcre = Math.floor(Math.random() * 150 + 10) // 10-160 lakh per acre
                const area = Number.parseFloat((Math.random() * 5 + 0.5).toFixed(1))
                const totalPrice = Math.floor(pricePerAcre * area)

                const property: LandProperty = {
                    id: `land_${id++}`,
                    position: [lat, lng],
                    price: totalPrice,
                    pricePerAcre,
                    area,
                    location: `${city.name} Region`,
                    city: city.name,
                    type: ["Agricultural", "Residential", "Commercial"][Math.floor(Math.random() * 3)] as any,
                    verified: Math.random() > 0.3,
                    amenities: this.generateAmenities(),
                    description: this.generateDescription(),
                    images: [`/placeholder.svg?height=200&width=300&query=land property ${city.name}`],
                    contactInfo: {
                        name: this.generateName(),
                        phone: this.generatePhone(),
                    },
                    lastUpdated: new Date(),
                }

                this.properties.set(property.id, property)
            }
        })

        // Add scattered rural properties
        for (let i = 0; i < 2000; i++) {
            const lat = 8 + Math.random() * 28
            const lng = 68 + Math.random() * 30

            const pricePerAcre = Math.floor(Math.random() * 80 + 5)
            const area = Number.parseFloat((Math.random() * 4 + 0.3).toFixed(1))
            const totalPrice = Math.floor(pricePerAcre * area)

            const property: LandProperty = {
                id: `rural_${id++}`,
                position: [lat, lng],
                price: totalPrice,
                pricePerAcre,
                area,
                location: "Rural Area",
                city: "Rural",
                type: ["Agricultural", "Residential"][Math.floor(Math.random() * 2)] as any,
                verified: Math.random() > 0.5,
                amenities: this.generateAmenities(),
                description: this.generateDescription(),
                images: [`/placeholder.svg?height=200&width=300&query=rural land property`],
                contactInfo: {
                    name: this.generateName(),
                    phone: this.generatePhone(),
                },
                lastUpdated: new Date(),
            }

            this.properties.set(property.id, property)
        }
    }

    private generateAmenities(): string[] {
        const allAmenities = [
            "Water Supply",
            "Electricity",
            "Road Access",
            "Drainage",
            "Security",
            "Garden",
            "Parking",
            "Boundary Wall",
            "Bore Well",
            "Irrigation",
        ]
        const count = Math.floor(Math.random() * 5) + 2
        return allAmenities.sort(() => 0.5 - Math.random()).slice(0, count)
    }

    private generateDescription(): string {
        const descriptions = [
            "Prime agricultural land with excellent soil quality and water access.",
            "Residential plot in developing area with good connectivity.",
            "Commercial land suitable for various business purposes.",
            "Fertile farmland ideal for crop cultivation.",
            "Well-located plot with all basic amenities nearby.",
        ]
        return descriptions[Math.floor(Math.random() * descriptions.length)]
    }

    private generateName(): string {
        const names = [
            "Rajesh Kumar",
            "Priya Sharma",
            "Amit Patel",
            "Sunita Singh",
            "Vikram Reddy",
            "Meera Gupta",
            "Ravi Agarwal",
            "Kavita Joshi",
            "Suresh Yadav",
            "Anita Verma",
        ]
        return names[Math.floor(Math.random() * names.length)]
    }

    private generatePhone(): string {
        return `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`
    }

    private startRealTimeUpdates() {
        // Simulate real-time price updates every 30 seconds
        setInterval(() => {
            const propertyIds = Array.from(this.properties.keys())
            const randomId = propertyIds[Math.floor(Math.random() * propertyIds.length)]
            const property = this.properties.get(randomId)

            if (property) {
                // Update price by ±5%
                const priceChange = (Math.random() - 0.5) * 0.1
                property.pricePerAcre = Math.floor(property.pricePerAcre * (1 + priceChange))
                property.price = Math.floor(property.pricePerAcre * property.area)
                property.lastUpdated = new Date()

                this.notifySubscribers()
            }
        }, 30000)

        // Add new properties occasionally
        setInterval(() => {
            if (Math.random() > 0.7) {
                this.addRandomProperty()
            }
        }, 60000)
    }

    private addRandomProperty() {
        const cities = ["Hyderabad", "Bangalore", "Chennai", "Mumbai", "Delhi"]
        const city = cities[Math.floor(Math.random() * cities.length)]
        const cityCoords = {
            Hyderabad: [17.385, 78.4867],
            Bangalore: [12.9716, 77.5946],
            Chennai: [13.0827, 80.2707],
            Mumbai: [19.076, 72.8777],
            Delhi: [28.6139, 77.209],
        }

        const coords = cityCoords[city as keyof typeof cityCoords]
        const lat = coords[0] + (Math.random() - 0.5) * 2
        const lng = coords[1] + (Math.random() - 0.5) * 2

        const pricePerAcre = Math.floor(Math.random() * 150 + 10)
        const area = Number.parseFloat((Math.random() * 5 + 0.5).toFixed(1))

        const property: LandProperty = {
            id: `new_${Date.now()}`,
            position: [lat, lng],
            price: Math.floor(pricePerAcre * area),
            pricePerAcre,
            area,
            location: `${city} Region`,
            city,
            type: ["Agricultural", "Residential", "Commercial"][Math.floor(Math.random() * 3)] as any,
            verified: Math.random() > 0.3,
            amenities: this.generateAmenities(),
            description: this.generateDescription(),
            images: [`/placeholder.svg?height=200&width=300&query=new land property ${city}`],
            contactInfo: {
                name: this.generateName(),
                phone: this.generatePhone(),
            },
            lastUpdated: new Date(),
        }

        this.properties.set(property.id, property)
        this.notifySubscribers()
    }

    private notifySubscribers() {
        const allProperties = Array.from(this.properties.values())
        this.subscribers.forEach((callback) => callback(allProperties))
    }

    subscribe(callback: (properties: LandProperty[]) => void) {
        this.subscribers.push(callback)
        // Immediately call with current data
        callback(Array.from(this.properties.values()))

        // Return unsubscribe function
        return () => {
            const index = this.subscribers.indexOf(callback)
            if (index > -1) {
                this.subscribers.splice(index, 1)
            }
        }
    }

    getProperties(): LandProperty[] {
        return Array.from(this.properties.values())
    }

    getProperty(id: string): LandProperty | undefined {
        return this.properties.get(id)
    }

    searchProperties(query: string): LandProperty[] {
        const lowercaseQuery = query.toLowerCase()
        return Array.from(this.properties.values()).filter(
            (property) =>
                property.location.toLowerCase().includes(lowercaseQuery) ||
                property.city.toLowerCase().includes(lowercaseQuery) ||
                property.type.toLowerCase().includes(lowercaseQuery),
        )
    }
}

export const landDataService = new LandDataService()
