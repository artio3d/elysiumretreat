import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InteractiveMap } from '../components/InteractiveMap';
import { parkingLocations, attractions, foodDrink, elysiumLocation } from '../data/mapData';

export const TheArea = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [foodSubfilter, setFoodSubfilter] = useState(null);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Combine all locations
  const allLocations = [
    ...parkingLocations,
    ...attractions,
    ...(foodSubfilter 
      ? foodDrink.filter(item => item.category === foodSubfilter)
      : foodDrink)
  ];

  const toggleFilter = (filter) => {
    if (filter === 'food') {
      if (activeFilters.includes('brunch') || activeFilters.includes('lunch') || activeFilters.includes('nightout')) {
        // Remove all food filters
        setActiveFilters(activeFilters.filter(f => !['brunch', 'lunch', 'nightout'].includes(f)));
        setFoodSubfilter(null);
      } else {
        // Add all food filters
        setActiveFilters([...activeFilters.filter(f => !['brunch', 'lunch', 'nightout'].includes(f)), 'brunch', 'lunch', 'nightout']);
      }
    } else {
      setActiveFilters(
        activeFilters.includes(filter)
          ? activeFilters.filter(f => f !== filter)
          : [...activeFilters, filter]
      );
    }
  };

  const toggleFoodSubfilter = (subfilter) => {
    if (activeFilters.includes(subfilter)) {
      setActiveFilters(activeFilters.filter(f => f !== subfilter));
      if (foodSubfilter === subfilter) setFoodSubfilter(null);
    } else {
      setActiveFilters([...activeFilters.filter(f => !['brunch', 'lunch', 'nightout'].includes(f)), subfilter]);
      setFoodSubfilter(subfilter);
    }
  };

  const isFoodFilterActive = activeFilters.includes('brunch') || activeFilters.includes('lunch') || activeFilters.includes('nightout');

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
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding-small bg-[#f6f5e8]"
      >
        <div className="container">
          <h2 className="heading-1 mb-8 text-center" style={{ color: '#C86432' }}>
            Interactive Area Guide
          </h2>
          
          {/* Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <button
                onClick={() => toggleFilter('parking')}
                className={`px-6 py-3 border transition-smooth ${
                  activeFilters.includes('parking')
                    ? 'bg-[#707038] text-[#fffef2] border-[#707038]'
                    : 'bg-transparent text-[#707038] border-[#707038] hover:bg-[#707038] hover:text-[#fffef2]'
                }`}
                style={{ borderRadius: '0px' }}
              >
                Parking
              </button>
              
              <button
                onClick={() => toggleFilter('attraction')}
                className={`px-6 py-3 border transition-smooth ${
                  activeFilters.includes('attraction')
                    ? 'bg-[#C86432] text-[#fffef2] border-[#C86432]'
                    : 'bg-transparent text-[#C86432] border-[#C86432] hover:bg-[#C86432] hover:text-[#fffef2]'
                }`}
                style={{ borderRadius: '0px' }}
              >
                Attractions
              </button>
              
              <button
                onClick={() => toggleFilter('food')}
                className={`px-6 py-3 border transition-smooth ${
                  isFoodFilterActive
                    ? 'bg-[#333333] text-[#fffef2] border-[#333333]'
                    : 'bg-transparent text-[#333333] border-[#333333] hover:bg-[#333333] hover:text-[#fffef2]'
                }`}
                style={{ borderRadius: '0px' }}
              >
                Food & Drink
              </button>
            </div>

            {/* Food Subfilters */}
            {isFoodFilterActive && (
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => toggleFoodSubfilter('brunch')}
                  className={`px-4 py-2 text-sm border transition-smooth ${
                    activeFilters.includes('brunch')
                      ? 'bg-[#9B59B6] text-[#fffef2] border-[#9B59B6]'
                      : 'bg-transparent text-[#9B59B6] border-[#9B59B6] hover:bg-[#9B59B6] hover:text-[#fffef2]'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  Brunch
                </button>
                
                <button
                  onClick={() => toggleFoodSubfilter('lunch')}
                  className={`px-4 py-2 text-sm border transition-smooth ${
                    activeFilters.includes('lunch')
                      ? 'bg-[#3498DB] text-[#fffef2] border-[#3498DB]'
                      : 'bg-transparent text-[#3498DB] border-[#3498DB] hover:bg-[#3498DB] hover:text-[#fffef2]'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  Lunch
                </button>
                
                <button
                  onClick={() => toggleFoodSubfilter('nightout')}
                  className={`px-4 py-2 text-sm border transition-smooth ${
                    activeFilters.includes('nightout')
                      ? 'bg-[#E74C3C] text-[#fffef2] border-[#E74C3C]'
                      : 'bg-transparent text-[#E74C3C] border-[#E74C3C] hover:bg-[#E74C3C] hover:text-[#fffef2]'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  Night Out
                </button>
              </div>
            )}
          </div>

          {/* Map */}
          <div className="border-2 border-[#bcbbb4] overflow-hidden">
            <InteractiveMap
              center={elysiumLocation}
              locations={allLocations}
              filters={activeFilters.length > 0 ? activeFilters : ['parking', 'attraction', 'brunch', 'lunch', 'nightout']}
            />
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#707038]"></div>
              <span>Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#C86432]"></div>
              <span>Attractions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#9B59B6]"></div>
              <span>Brunch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#3498DB]"></div>
              <span>Lunch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#E74C3C]"></div>
              <span>Night Out</span>
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
        className="section-padding"
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