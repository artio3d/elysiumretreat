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
      <section className="section-padding-small">
        <div className="container">
          <h1 className="hero-large mb-6 text-center">
            Discover Thessaloniki
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            Elysium Retreat places you at the heart of one of Greece's most vibrant cities. From ancient landmarks to modern dining, everything is within easy reach.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <h2 className="heading-1 mb-8 text-center">Our Location</h2>
          <div className="w-full" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8!2d22.9444!3d40.6401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM4JzI0LjQiTiAyMsKwNTYnMzkuOCJF!5e0!3m2!1sen!2sgr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elysium Retreat Location"
            />
          </div>
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/9kMGhxrQjmSf4Q4h7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <MapPin size={12} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Points of Interest */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-1 mb-16 text-center">Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sightseeing */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Landmark size={24} className="text-[#333333]" />
                <h3 className="heading-3">Sightseeing</h3>
              </div>
              <div className="space-y-4">
                {sightseeing.map((place, index) => (
                  <div key={index} className="border-b border-[#ebeade] pb-4">
                    <p className="body-regular font-medium mb-1">{place.name}</p>
                    <p className="body-small text-[#666666]">{place.distance} • {place.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dining */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Utensils size={24} className="text-[#333333]" />
                <h3 className="heading-3">Food & Drink</h3>
              </div>
              <div className="space-y-4">
                {dining.map((place, index) => (
                  <div key={index} className="border-b border-[#ebeade] pb-4">
                    <p className="body-regular font-medium mb-1">{place.name}</p>
                    <p className="body-small text-[#666666]">{place.distance} • {place.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shopping */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <ShoppingBag size={24} className="text-[#333333]" />
                <h3 className="heading-3">Shopping</h3>
              </div>
              <div className="space-y-4">
                {shopping.map((place, index) => (
                  <div key={index} className="border-b border-[#ebeade] pb-4">
                    <p className="body-regular font-medium mb-1">{place.name}</p>
                    <p className="body-small text-[#666666]">{place.distance} • {place.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container text-center">
          <h2 className="hero-medium mb-8">
            Your Thessaloniki Adventure Awaits
          </h2>
          <p className="body-large text-[#666666] mb-12 max-w-2xl mx-auto">
            Book your stay and discover why Thessaloniki is one of Greece's most captivating cities.
          </p>
          <a href="/contact" className="btn-primary">
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
};