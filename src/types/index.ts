export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'For Sale' | 'For Rent' | 'Commercial' | 'Land';
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  description: string;
  features: string[];
  agent: Agent;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  specialties: string[];
  experience: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}