import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
            property.type === 'For Sale' ? 'bg-green-500' :
            property.type === 'For Rent' ? 'bg-blue-500' :
            property.type === 'Commercial' ? 'bg-purple-500' :
            'bg-orange-500'
          }`}>
            {property.type}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>

      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {property.title}
        </h3>

        {property.type !== 'Land' && (
          <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                {property.bedrooms} bed{property.bedrooms > 1 ? 's' : ''}
              </div>
            )}
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              {property.bathrooms} bath{property.bathrooms > 1 ? 's' : ''}
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              {property.area.toLocaleString()} sq ft
            </div>
          </div>
        )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <div className="flex justify-end">
          <Link
            to={`/properties/${property.id}`}
            className="w-full text-center bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;