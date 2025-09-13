export interface LandProperty {
    id: string
    position: [number, number]
    type: 'Agricultural' | 'Residential' | 'Commercial' | 'Industrial'
    price: number
    pricePerAcre: number
    area: number
    location: string
    description: string
    verified: boolean
    amenities: string[]
    contactInfo: {
        name: string
        phone: string
        email?: string
    }
    lastUpdated: Date
}

type SubscriberCallback = (properties: LandProperty[]) => void

class LandDataService {
    private properties: LandProperty[] = []
    private subscribers: SubscriberCallback[] = []

    constructor() {
        this.initializeSampleData()
    }

    private initializeSampleData() {
        this.properties = [
            {
                id: '1',
                position: [28.6139, 77.2090],
                type: 'Agricultural',
                price: 125,
                pricePerAcre: 25,
                area: 5,
                location: 'Sector 89, Gurgaon, Haryana',
                description: 'Premium agricultural land with good water access and fertile soil.',
                verified: true,
                amenities: ['Water Supply', 'Road Access', 'Electricity', 'Boundary Wall'],
                contactInfo: {
                    name: 'Rajesh Kumar',
                    phone: '+91-9876543210',
                    email: 'rajesh@example.com'
                },
                lastUpdated: new Date('2024-01-15')
            },
            {
                id: '2',
                position: [19.0760, 72.8777],
                type: 'Commercial',
                price: 500,
                pricePerAcre: 250,
                area: 2,
                location: 'Vashi, Navi Mumbai, Maharashtra',
                description: 'Prime commercial land suitable for office complex or retail development.',
                verified: true,
                amenities: ['Metro Access', 'Highway Connectivity', 'Commercial Zone', 'Utilities'],
                contactInfo: {
                    name: 'Priya Sharma',
                    phone: '+91-9123456789',
                    email: 'priya@example.com'
                },
                lastUpdated: new Date('2024-01-20')
            },
            {
                id: '3',
                position: [12.9716, 77.5946],
                type: 'Residential',
                price: 240,
                pricePerAcre: 80,
                area: 3,
                location: 'Electronic City Phase 2, Bangalore',
                description: 'Residential plot in IT hub with excellent connectivity and amenities.',
                verified: false,
                amenities: ['IT Park Nearby', 'School Access', 'Hospital Nearby', 'Public Transport'],
                contactInfo: {
                    name: 'Suresh Reddy',
                    phone: '+91-9876512345',
                    email: 'suresh@example.com'
                },
                lastUpdated: new Date('2024-01-18')
            },
            {
                id: '4',
                position: [13.0827, 80.2707],
                type: 'Industrial',
                price: 159,
                pricePerAcre: 53,
                area: 3,
                location: 'Sriperumbudur, Chennai, Tamil Nadu',
                description: 'Industrial land suitable for manufacturing units with good logistics access.',
                verified: true,
                amenities: ['Port Access', 'Industrial Zone', 'Power Supply', 'Railway Connectivity'],
                contactInfo: {
                    name: 'Lakshmi Narayanan',
                    phone: '+91-9345678901',
                    email: 'lakshmi@example.com'
                },
                lastUpdated: new Date('2024-01-22')
            },
            {
                id: '5',
                position: [22.5726, 88.3639],
                type: 'Agricultural',
                price: 68,
                pricePerAcre: 17,
                area: 4,
                location: 'New Town, Kolkata, West Bengal',
                description: 'Fertile agricultural land with irrigation facilities and good market access.',
                verified: true,
                amenities: ['Irrigation', 'Market Access', 'Storage Facility', 'Transportation'],
                contactInfo: {
                    name: 'Amit Bose',
                    phone: '+91-9876098760',
                    email: 'amit@example.com'
                },
                lastUpdated: new Date('2024-01-25')
            },
            {
                id: '6',
                position: [23.0225, 72.5714],
                type: 'Commercial',
                price: 400,
                pricePerAcre: 100,
                area: 4,
                location: 'Satellite, Ahmedabad, Gujarat',
                description: 'Commercial land in prime location with high footfall and visibility.',
                verified: true,
                amenities: ['Main Road', 'Shopping Complex', 'Metro Station', 'Parking'],
                contactInfo: {
                    name: 'Nikhil Patel',
                    phone: '+91-9727272727',
                    email: 'nikhil@example.com'
                },
                lastUpdated: new Date('2024-01-28')
            },
            {
                id: '7',
                position: [26.9124, 75.7873],
                type: 'Residential',
                price: 150,
                pricePerAcre: 30,
                area: 5,
                location: 'Mansarovar, Jaipur, Rajasthan',
                description: 'Residential plot in developing area with good investment potential.',
                verified: false,
                amenities: ['Developing Area', 'School Planned', 'Water Supply', 'Road Access'],
                contactInfo: {
                    name: 'Deepak Agarwal',
                    phone: '+91-9414141414',
                    email: 'deepak@example.com'
                },
                lastUpdated: new Date('2024-01-30')
            },
            {
                id: '8',
                position: [17.3850, 78.4867],
                type: 'Industrial',
                price: 320,
                pricePerAcre: 64,
                area: 5,
                location: 'Genome Valley, Hyderabad, Telangana',
                description: 'Industrial land in biotech park with modern infrastructure.',
                verified: true,
                amenities: ['Biotech Zone', 'Research Facilities', 'International Airport', 'IT Corridor'],
                contactInfo: {
                    name: 'Venkat Rao',
                    phone: '+91-9848484848',
                    email: 'venkat@example.com'
                },
                lastUpdated: new Date('2024-02-01')
            }
        ]

        // Notify all subscribers about the initial data
        this.notifySubscribers()
    }

    subscribe(callback: SubscriberCallback): () => void {
        this.subscribers.push(callback)
        // Immediately call the callback with current data
        callback([...this.properties])

        // Return unsubscribe function
        return () => {
            const index = this.subscribers.indexOf(callback)
            if (index > -1) {
                this.subscribers.splice(index, 1)
            }
        }
    }

    private notifySubscribers() {
        this.subscribers.forEach(callback => callback([...this.properties]))
    }

    getProperties(): LandProperty[] {
        return [...this.properties]
    }

    getPropertyById(id: string): LandProperty | undefined {
        return this.properties.find(property => property.id === id)
    }

    searchProperties(query: string): LandProperty[] {
        const lowercaseQuery = query.toLowerCase()
        return this.properties.filter(property =>
            property.location.toLowerCase().includes(lowercaseQuery) ||
            property.type.toLowerCase().includes(lowercaseQuery) ||
            property.description.toLowerCase().includes(lowercaseQuery)
        )
    }

    filterProperties(filters: {
        type?: string
        minPrice?: number
        maxPrice?: number
        minArea?: number
        maxArea?: number
        verified?: boolean
    }): LandProperty[] {
        return this.properties.filter(property => {
            if (filters.type && property.type !== filters.type) return false
            if (filters.minPrice && property.price < filters.minPrice) return false
            if (filters.maxPrice && property.price > filters.maxPrice) return false
            if (filters.minArea && property.area < filters.minArea) return false
            if (filters.maxArea && property.area > filters.maxArea) return false
            if (filters.verified !== undefined && property.verified !== filters.verified) return false
            return true
        })
    }

    addProperty(property: Omit<LandProperty, 'id' | 'lastUpdated'>): LandProperty {
        const newProperty: LandProperty = {
            ...property,
            id: Date.now().toString(),
            lastUpdated: new Date()
        }
        this.properties.push(newProperty)
        this.notifySubscribers()
        return newProperty
    }

    updateProperty(id: string, updates: Partial<LandProperty>): LandProperty | null {
        const index = this.properties.findIndex(property => property.id === id)
        if (index === -1) return null

        this.properties[index] = {
            ...this.properties[index],
            ...updates,
            lastUpdated: new Date()
        }
        this.notifySubscribers()
        return this.properties[index]
    }

    deleteProperty(id: string): boolean {
        const index = this.properties.findIndex(property => property.id === id)
        if (index === -1) return false

        this.properties.splice(index, 1)
        this.notifySubscribers()
        return true
    }
}

// Create a singleton instance
export const landDataService = new LandDataService()
