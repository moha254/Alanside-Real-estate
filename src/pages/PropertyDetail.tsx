import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Share,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { properties } from '../data/mockData';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-blue-800 hover:underline">
            ← Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/properties"
            className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Properties
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-800" />
                    </button>
                  </>
                )}

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                    property.type === 'For Sale' ? 'bg-green-500' :
                    property.type === 'For Rent' ? 'bg-blue-500' :
                    property.type === 'Commercial' ? 'bg-purple-500' :
                    'bg-orange-500'
                  }`}>
                    {property.type}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200">
                    <Heart className="h-5 w-5 text-gray-800" />
                  </button>
                  <button className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200">
                    <Share className="h-5 w-5 text-gray-800" />
                  </button>
                </div>
              </div>

              {/* Image Thumbnails */}
              {property.images.length > 1 && (
                <div className="flex space-x-2 mt-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  {property.location}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{property.title}</h1>
              </div>

              {property.type !== 'Land' && (
                <div className="flex items-center space-x-8 mb-8 pb-8 border-b border-gray-200">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <Bed className="h-6 w-6 text-gray-600 mr-2" />
                      <span className="text-lg font-semibold">{property.bedrooms}</span>
                      <span className="text-gray-600 ml-1">bedroom{property.bedrooms > 1 ? 's' : ''}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath className="h-6 w-6 text-gray-600 mr-2" />
                    <span className="text-lg font-semibold">{property.bathrooms}</span>
                    <span className="text-gray-600 ml-1">bathroom{property.bathrooms > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-6 w-6 text-gray-600 mr-2" />
                    <span className="text-lg font-semibold">{property.area.toLocaleString()}</span>
                    <span className="text-gray-600 ml-1">sq ft</span>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Location:</strong> Nairobi, Eastleigh
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Phone:</strong> +254 725 238789 / +254 792 837410
                </p>
              </div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;