import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AreaMap } from '../components/AreaMap';
import { parkingLocations, attractions, foodDrink, elysiumLocation } from '../data/mapData';
import { MapPin, Clock, Euro, Star } from 'lucide-react';

export const TheArea = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Combine all locations
  const allLocations = [
    ...parkingLocations,
    ...attractions,
    ...foodDrink
  ];

  // Filter locations based on active filter
  const getFilteredLocations = () => {
    if (activeFilter === 'all') return allLocations;
    if (activeFilter === 'parking') return parkingLocations;
    if (activeFilter === 'attraction') return attractions;
    if (activeFilter === 'food') return foodDrink;
    return allLocations;
  };

  const filteredLocations = getFilteredLocations();

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const getCategoryColor = (category) => {
    const colors = {
      parking: '#707038',
      attraction: '#C86432',
      brunch: '#9B59B6',
      lunch: '#3498DB',
      nightout: '#E74C3C'
    };
    return colors[category] || '#333333';
  };

  return (
    <div>
      {/* Header */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="section-padding-small"
      >
        <div className="container">
          <h1 className="hero-large mb-6 text-center">
            Discover Thessaloniki
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            Your interactive guide to the best of Thessaloniki. Find parking, explore historic attractions, and discover exceptional dining—all within walking distance of Elysium Retreat.
          </p>
        </div>
      </motion.section>

      {/* Interactive Map Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUpVariants}
        className="pb-20"
      >
        <div className="container">
          <h2 className="heading-1 mb-12 text-center" style={{ color: '#C86432' }}>
            Interactive Area Guide
          </h2>
          
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8" style={{ minHeight: '700px' }}>
            {/* Left Column - Map (70%) */}
            <div className="h-[700px] border-2 border-[#bcbbb4]">
              <AreaMap
                center={elysiumLocation}
                locations={filteredLocations}
                onMarkerClick={handleLocationClick}
                selectedLocation={selectedLocation}
              />
            </div>

            {/* Right Column - List (30%) */}
            <div className="flex flex-col">
              {/* Filter Buttons */}
              <div className="mb-6 space-y-3">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`w-full px-4 py-3 text-left border transition-smooth ${
                    activeFilter === 'all'
                      ? 'bg-[#333333] text-[#fffef2] border-[#333333]'
                      : 'bg-transparent text-[#333333] border-[#bcbbb4] hover:border-[#333333]'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  <span className="body-regular font-bold">All Locations</span>
                </button>
                <button
                  onClick={() => setActiveFilter('parking')}
                  className={`w-full px-4 py-3 text-left border transition-smooth ${
                    activeFilter === 'parking'
                      ? 'bg-[#707038] text-[#fffef2] border-[#707038]'
                      : 'bg-transparent text-[#707038] border-[#707038] hover:bg-[#707038] hover:text-[#fffef2]'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  <span className="body-regular font-bold">Parking</span>
                </button>
                <button
                  onClick={() => setActiveFilter('attraction')}
                  className={`w-full px-4 py-3 text-left border transition-smooth ${
                    activeFilter === 'attraction'
                      ? 'bg-[#C86432] text-[#fffef2] border-[#C86432]'
                      : 'bg-transparent text-[#C86432] border-[#C86432] hover:bg-[#C86432] hover:text-[#fffef2]'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  <span className="body-regular font-bold">Attractions</span>
                </button>
                <button
                  onClick={() => setActiveFilter('food')}
                  className={`w-full px-4 py-3 text-left border transition-smooth ${
                    activeFilter === 'food'
                      ? 'bg-[#9B59B6] text-[#fffef2] border-[#9B59B6]'
                      : 'bg-transparent text-[#9B59B6] border-[#9B59B6] hover:bg-[#9B59B6] hover:text-[#fffef2]'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  <span className="body-regular font-bold">Food & Drink</span>
                </button>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto pr-2" style={{ maxHeight: '560px' }}>
                <div className="space-y-2">
                  {filteredLocations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => handleLocationClick(location)}
                      className={`w-full p-4 border text-left transition-smooth hover:border-[#C86432] ${
                        selectedLocation?.id === location.id
                          ? 'border-[#C86432] bg-[#f6f5e8]'
                          : 'border-[#ebeade] bg-[#fffef2]'
                      }`}
                      style={{ borderRadius: '0px' }}
                    >
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                          style={{ backgroundColor: getCategoryColor(location.category) }}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="body-regular font-bold text-[#333333] mb-1">
                            {location.name}
                          </h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-[#666666]">
                              <MapPin size={12} />
                              <span>{location.distance}</span>
                            </div>
                            {location.hours && (
                              <div className="flex items-center gap-2 text-xs text-[#666666]">
                                <Clock size={12} />
                                <span>{location.hours}</span>
                              </div>
                            )}
                            {location.price && (
                              <div className="flex items-center gap-2 text-xs text-[#666666]">
                                <Euro size={12} />
                                <span className="truncate">{location.price}</span>
                              </div>
                            )}
                            {location.rating && (
                              <div className="flex items-center gap-2 text-xs text-[#666666]">
                                <Star size={12} fill="#C86432" style={{ color: '#C86432' }} />
                                <span>{location.rating}/5</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#000000] border-2 border-[#C86432]"></div>
              <span className="body-small">Elysium Retreat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#707038]"></div>
              <span className="body-small">Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#C86432]"></div>
              <span className="body-small">Attractions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#9B59B6]"></div>
              <span className="body-small">Brunch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#3498DB]"></div>
              <span className="body-small">Lunch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#E74C3C]"></div>
              <span className="body-small">Night Out</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Additional Info */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="section-padding-small bg-[#f6f5e8]"
      >
        <div className="container text-center">
          <h2 className="hero-medium mb-8">
            Everything Within Reach
          </h2>
          <p className="body-large text-[#666666] mb-12 max-w-2xl mx-auto">
            Elysium Retreat's prime location puts you at the center of Thessaloniki's cultural and culinary scene. Most attractions, restaurants, and amenities are within a comfortable 5-15 minute walk.
          </p>
          <a href="/contact" className="btn-primary">
            Book Your Stay
          </a>
        </div>
      </motion.section>
    </div>
  );
};