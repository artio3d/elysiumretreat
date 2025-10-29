import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, Wine, MapPin } from 'lucide-react';

export const Amenities = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const essentialAmenities = [
    '70 sq.m. (753 sq.ft.) spacious apartment',
    'King size bed with anatomic mattress',
    'Second full bed in separate bedroom',
    'Sofa bed in living room (sleeps 5 guests total)',
    'Premium linens and bath towels',
    'Hypo-allergenic bedding',
  ];

  const kitchenDining = [
    'Fully-equipped kitchen',
    'Refrigerator',
    'Stovetop',
    'Oven',
    'Nespresso Coffee Machine with capsules',
    'Dishwasher',
    'Microwave',
    'Kitchen utensils and cookware',
    'Dining table with seating',
    'Toaster'
  ];

  const entertainmentTech = [
    '50\" Flat-screen Smart TV',
    'Streaming services (Netflix, etc.)',
    'High-speed Free Wi-Fi throughout',
    'Work desk',
    'Telephone'
  ];

  const comfortClimate = [
    'Air conditioning',
    'Heating',
    'Soundproofing',
    'Terrace',
    'Balcony with city and garden views',
    'Private entrance',
    'Entire apartment to yourself'
  ];

  const bathroomAmenities = [
    'Walk-in shower',
    'Premium toiletries',
    'Hairdryer',
    'Fresh towels',
    'Bidet',
    'Toilet paper'
  ];

  const laundryStorage = [
    'Washing machine',
    'Iron and ironing board',
    'Drying rack for clothes',
    'Clothes rack'
  ];

  const accessibilityServices = [
    'Elevator access',
    'Private check-in/check-out',
    'Self check-in with keyless entry',
    'Contactless check-in'
  ];

  const safetyFeatures = [
    'Fire extinguisher',
    'Smoke alarms',
    'Carbon monoxide alarm',
    'First aid kit'
  ];

  const additionalServices = [
    'Non-smoking throughout',
    'Family rooms',
    'Cleaning supplies provided',
    'Trash cans',
    'Socket near the bed'
  ];

  const experiences = [
    {
      icon: <Utensils size={24} />,
      title: 'Private Dining',
      description: 'Enjoy a curated meal prepared by local chefs in the comfort of your suite. Perfect for special occasions or a romantic evening.'
    },
    {
      icon: <Wine size={24} />,
      title: 'Wine Tasting',
      description: 'Discover the rich flavors of Greek wines with a personalized tasting experience featuring selections from local vineyards.'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Guided City Tours',
      description: 'Explore Thessaloniki with a knowledgeable local guide who will reveal hidden gems and share the city\'s fascinating history.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Wellness Services',
      description: 'Indulge in spa treatments, yoga sessions, or massage therapy through our partnerships with premier local wellness providers.'
    }
  ];

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
            Amenities & Experiences
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            Everything you need for a comfortable, memorable stay—and the opportunity to create truly exceptional moments.
          </p>
        </div>
      </motion.section>

      {/* Comprehensive Amenities */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUpVariants}
            className="heading-1 mb-16 text-center"
          >
            Comprehensive Amenities
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            {/* Essential Features */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className="heading-2 mb-6">Essential Features</h3>
              <div className="space-y-3">
                {essentialAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                    <span className="body-regular">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Kitchen & Dining */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className="heading-2 mb-6">Kitchen & Dining</h3>
              <div className="space-y-3">
                {kitchenDining.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                    <span className="body-regular">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Entertainment & Technology */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className="heading-2 mb-6">Entertainment & Technology</h3>
              <div className="space-y-3">
                {entertainmentTech.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                    <span className="body-regular">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Comfort & Climate */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className="heading-2 mb-6">Comfort & Climate</h3>
              <div className="space-y-3">
                {comfortClimate.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                    <span className="body-regular">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bathroom */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className="heading-2 mb-6">Bathroom</h3>
              <div className="space-y-3">
                {bathroomAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                    <span className="body-regular">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Laundry & Storage */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className="heading-2 mb-6">Laundry & Storage</h3>
              <div className="space-y-3">
                {laundryStorage.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                    <span className="body-regular">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Accessibility & Services */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className="heading-2 mb-6">Accessibility & Services</h3>
              <div className="space-y-3">
                {accessibilityServices.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                    <span className="body-regular">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Safety Features */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className="heading-2 mb-6">Safety Features</h3>
              <div className="space-y-3">
                {safetyFeatures.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                    <span className="body-regular">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Curated Experiences */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding"
      >
        <div className="container">
          <h2 className="heading-1 mb-8 text-center">Curated Experiences</h2>
          <p className="body-large text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            Enhance your stay with optional add-on experiences. Contact us to arrange any of these special services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="border border-[#bcbbb4] p-8 hover-lift">
                <div className="text-[#333333] mb-6">{experience.icon}</div>
                <h3 className="heading-3 mb-4">{experience.title}</h3>
                <p className="body-regular text-[#666666]">{experience.description}</p>
              </div>
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
            Create Your Perfect Experience
          </h2>
          <p className="body-large text-[#666666] mb-12 max-w-2xl mx-auto">
            Have questions about our amenities or want to arrange a special experience? We're here to help.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </motion.section>
    </div>
  );
};