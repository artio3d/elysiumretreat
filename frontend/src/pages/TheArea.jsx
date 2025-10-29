import React from 'react';
import { motion } from 'framer-motion';
import { parkingLocations, attractions, foodDrink } from '../data/mapData';
import { MapPin, Clock, Euro, Star, ExternalLink } from 'lucide-react';

export const TheArea = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const LocationCard = ({ location }) => (
    <a
      href={location.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 border border-[#ebeade] hover:border-[#C86432] hover:shadow-lg transition-all hover-lift rounded-xl"
    >
      <h3 className="heading-3 mb-4 text-[#333333]">{location.name}</h3>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-[#666666]">
          <MapPin size={16} style={{ color: '#C86432' }} />
          <span>{location.distance}</span>
        </div>

        {location.hours && (
          <div className="flex items-center gap-2 text-sm text-[#666666]">
            <Clock size={16} style={{ color: '#C86432' }} />
            <span>{location.hours}</span>
          </div>
        )}

        {location.price && (
          <div className="flex items-center gap-2 text-sm text-[#666666]">
            <Euro size={16} style={{ color: '#C86432' }} />
            <span>{location.price}</span>
          </div>
        )}

        {location.rating && (
          <div className="flex items-center gap-2 text-sm text-[#666666]">
            <Star size={16} fill="#C86432" style={{ color: '#C86432' }} />
            <span>{location.rating}/5</span>
          </div>
        )}

        {location.description && (
          <p className="text-sm text-[#666666] mt-3 line-clamp-2">
            {location.description}
          </p>
        )}

        {location.subcategory && (
          <span 
            className="inline-block px-3 py-1 text-xs mt-3" 
            style={{ 
              background: '#f6f5e8',
              color: '#707038',
              border: '1px solid #bcbbb4'
            }}
          >
            {location.subcategory}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4 text-sm" style={{ color: '#C86432' }}>
        <span className="font-medium">View on Google Maps</span>
        <ExternalLink size={14} />
      </div>
    </a>
  );

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
            Your curated guide to the best of Thessaloniki. Find parking, explore historic attractions, and discover exceptional dining—all within walking distance of Elysium Retreat.
          </p>
        </div>
      </motion.section>

      {/* PARKING SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding-small"
      >
        <div className="container">
          <h2 className="heading-1 mb-4" style={{ color: '#707038' }}>
            Parking
          </h2>
          <p className="body-regular text-[#666666] mb-12">
            Convenient parking options within 5 minutes of Elysium Retreat. Click any card to view location and directions on Google Maps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parkingLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <LocationCard location={location} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ATTRACTIONS SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding-small bg-[#f6f5e8]"
      >
        <div className="container">
          <h2 className="heading-1 mb-4" style={{ color: '#C86432' }}>
            Attractions
          </h2>
          <p className="body-regular text-[#666666] mb-12">
            Explore Thessaloniki's rich history and culture. From the iconic White Tower to ancient Roman monuments, immerse yourself in millennia of heritage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <LocationCard location={location} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOD & DRINK SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding"
      >
        <div className="container">
          <h2 className="heading-1 mb-4" style={{ color: '#9B59B6' }}>
            Food & Drink
          </h2>
          <p className="body-regular text-[#666666] mb-12">
            Savor Thessaloniki's vibrant culinary scene. From charming brunch spots to elegant restaurants and lively bars, discover your next favorite place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foodDrink.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <LocationCard location={location} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
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
            Elysium Retreat's prime location puts you at the center of Thessaloniki's cultural and culinary scene. Most attractions are within a comfortable 5-15 minute walk.
          </p>
          <a href="/#contact" className="btn-primary">
            Book Your Stay
          </a>
        </div>
      </motion.section>
    </div>
  );
};