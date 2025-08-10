import { Property, Agent, BlogPost, Testimonial } from '../types';

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Agent',
    email: 'sarah@realestate.com',
    phone: '+1 (555) 123-4567',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'With over 10 years of experience in luxury real estate, Sarah specializes in high-end residential properties and has closed over $50M in sales.',
    specialties: ['Luxury Homes', 'Investment Properties', 'First-time Buyers'],
    experience: '10+ years'
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Commercial Real Estate Specialist',
    email: 'michael@realestate.com',
    phone: '+1 (555) 234-5678',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Michael brings extensive experience in commercial real estate transactions, helping businesses find the perfect location for growth.',
    specialties: ['Commercial Properties', 'Office Spaces', 'Retail Locations'],
    experience: '8+ years'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Residential Sales Agent',
    email: 'emily@realestate.com',
    phone: '+1 (555) 345-6789',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Emily is passionate about helping families find their dream homes. She excels at understanding client needs and matching them with perfect properties.',
    specialties: ['Family Homes', 'Condos', 'New Construction'],
    experience: '6+ years'
  }
];

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Downtown Penthouse',
    price: 2500000,
    location: 'Downtown Manhattan, NY',
    type: 'For Sale',
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2200,
    images: [
      'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stunning penthouse with panoramic city views, high-end finishes, and premium amenities. This exceptional property features floor-to-ceiling windows, designer kitchen, and private terrace.',
    features: ['City Views', 'Private Terrace', 'Concierge', 'Gym Access', 'Parking Included'],
    agent: agents[0],
    coordinates: { lat: 40.7589, lng: -73.9851 }
  },
  {
    id: '2',
    title: 'Modern Family Home',
    price: 750000,
    location: 'Suburbia Heights, CA',
    type: 'For Sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful family home in a quiet neighborhood with excellent schools. Features open concept living, gourmet kitchen, and large backyard perfect for entertaining.',
    features: ['Open Concept', 'Large Backyard', 'Garage', 'Near Schools', 'Updated Kitchen'],
    agent: agents[2],
    coordinates: { lat: 34.0522, lng: -118.2437 }
  },
  {
    id: '3',
    title: 'Cozy Urban Apartment',
    price: 3200,
    location: 'Brooklyn, NY',
    type: 'For Rent',
    bedrooms: 2,
    bathrooms: 1,
    area: 950,
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Charming apartment in trendy Brooklyn neighborhood. Walking distance to subway, restaurants, and parks. Perfect for young professionals.',
    features: ['Near Subway', 'Trendy Area', 'Pet Friendly', 'Laundry', 'Rooftop Access'],
    agent: agents[0],
    coordinates: { lat: 40.6782, lng: -73.9442 }
  },
  {
    id: '4',
    title: 'Prime Commercial Space',
    price: 8500,
    location: 'Business District, TX',
    type: 'Commercial',
    bedrooms: 0,
    bathrooms: 2,
    area: 3500,
    images: [
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium office space in the heart of the business district. Modern amenities, high-speed internet, and flexible lease terms available.',
    features: ['High-Speed Internet', 'Conference Rooms', 'Parking', 'Modern Amenities', 'Flexible Terms'],
    agent: agents[1],
    coordinates: { lat: 32.7767, lng: -96.7970 }
  },
  {
    id: '5',
    title: 'Development Land',
    price: 450000,
    location: 'Riverside County, CA',
    type: 'Land',
    bedrooms: 0,
    bathrooms: 0,
    area: 43560,
    images: [
      'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: '1-acre lot with development potential. Utilities available, great location for residential or commercial development.',
    features: ['Utilities Available', 'Zoned for Development', 'Great Location', 'Road Access'],
    agent: agents[2],
    coordinates: { lat: 33.7539, lng: -117.3262 }
  },
  {
    id: '6',
    title: 'Waterfront Villa',
    price: 1850000,
    location: 'Miami Beach, FL',
    type: 'For Sale',
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    images: [
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571479/pexels-photo-1571479.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Spectacular waterfront villa with private beach access. Luxurious amenities including infinity pool, wine cellar, and smart home technology.',
    features: ['Private Beach', 'Infinity Pool', 'Wine Cellar', 'Smart Home', 'Boat Dock'],
    agent: agents[0],
    coordinates: { lat: 25.7617, lng: -80.1918 }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Real Estate Market Trends for 2024',
    slug: 'real-estate-market-trends-2024',
    excerpt: 'Discover the latest trends shaping the real estate market and what they mean for buyers and sellers.',
    content: 'The real estate market continues to evolve with new trends emerging...',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Market Analysis'
  },
  {
    id: '2',
    title: 'First-Time Homebuyer Guide',
    slug: 'first-time-homebuyer-guide',
    excerpt: 'Everything you need to know about buying your first home, from financing to closing.',
    content: 'Buying your first home is an exciting milestone...',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    category: 'Buying Tips'
  },
  {
    id: '3',
    title: 'Commercial Real Estate Investment Opportunities',
    slug: 'commercial-real-estate-investment',
    excerpt: 'Exploring the benefits and strategies for investing in commercial real estate properties.',
    content: 'Commercial real estate offers unique investment opportunities...',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Michael Chen',
    date: '2024-01-05',
    category: 'Investment'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'David Thompson',
    role: 'Homeowner',
    content: 'Sarah helped us find our dream home within our budget. Her expertise and dedication made the entire process smooth and stress-free.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    id: '2',
    name: 'Lisa Wang',
    role: 'Business Owner',
    content: 'Michael found the perfect commercial space for our expanding business. His knowledge of the market was invaluable.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    id: '3',
    name: 'James Martinez',
    role: 'Investor',
    content: 'The team at this agency has consistently delivered excellent investment properties. Their market insights are second to none.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  }
];