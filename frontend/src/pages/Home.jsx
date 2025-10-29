import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Sparkles, MapPin } from 'lucide-react';

export const Home = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/k1sgno7v_DSC_0648.jpg"
          alt="Elysium Retreat Suite"
          className="hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fffef2]/95 via-[#fffef2]/40 to-transparent flex items-end">
          <div className="container pb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-large max-w-2xl mb-4 text-[#333333]"
            >
              Your Private Sanctuary in the Heart of Thessaloniki
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Block 1: See the Space */}
            <motion.div variants={fadeInUpVariants}>
              <Link 
                to="/suite#tour" 
                className="group block border border-[#bcbbb4] hover:border-[#333333] transition-smooth overflow-hidden h-full"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/olpbcj2y_DSC_0754.jpg"
                    alt="3D Virtual Tour"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent flex items-end p-6">
                    <div className="text-[#fffef2]">
                      <Eye size={32} className="mb-3" />
                      <h3 className="heading-2 text-[#fffef2] mb-2">See the Space</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#fffef2]">
                  <p className="body-regular text-[#666666]">
                    Take an immersive 3D tour and explore every corner of your future sanctuary.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Block 2: Explore the Amenities */}
            <motion.div variants={fadeInUpVariants}>
              <Link 
                to="/amenities" 
                className="group block border border-[#bcbbb4] hover:border-[#333333] transition-smooth overflow-hidden h-full"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/e62wvh9t_DSC_0769.jpg"
                    alt="Luxury Amenities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent flex items-end p-6">
                    <div className="text-[#fffef2]">
                      <Sparkles size={32} className="mb-3" />
                      <h3 className="heading-2 text-[#fffef2] mb-2">Explore the Amenities</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#fffef2]">
                  <p className="body-regular text-[#666666]">
                    Luxury amenities for a perfect stay, from fully-equipped kitchen to premium entertainment.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Block 3: Discover the Area */}
            <motion.div variants={fadeInUpVariants}>
              <Link 
                to="/area" 
                className="group block border border-[#bcbbb4] hover:border-[#333333] transition-smooth overflow-hidden h-full"
              >
                <div className="relative h-[300px] overflow-hidden bg-[#f6f5e8] flex items-center justify-center">
                  <div className="w-full h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8!2d22.9444!3d40.6401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM4JzI0LjQiTiAyMsKwNTYnMzkuOCJF!5e0!3m2!1sen!2sgr!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0, pointerEvents: 'none' }}
                      loading="lazy"
                      title="Location Preview"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent flex items-end p-6">
                    <div className="text-[#fffef2]">
                      <MapPin size={32} className="mb-3" />
                      <h3 className="heading-2 text-[#fffef2] mb-2">Discover the Area</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#fffef2]">
                  <p className="body-regular text-[#666666]">
                    Located moments from the city's heart, with landmarks and attractions at your doorstep.
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="section-padding-small bg-[#f6f5e8]"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="hero-medium mb-8">
              Where Minimalist Design Meets Mediterranean Warmth
            </h2>
            <p className="body-large text-[#666666] mb-12">
              Elysium Retreat offers an exclusive urban sanctuary where tranquility and comfort converge. Experience authentic Greek hospitality in a meticulously designed space that invites you to breathe, relax, and feel at home.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUpVariants}
            className="heading-1 text-center mb-16"
          >
            Designed for Your Comfort
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeInUpVariants} className="text-center">
              <div className="mb-6">
                <img
                  src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/rmxjodi4_DSC_0728.jpg"
                  alt="Luxury Bathroom"
                  className="w-full h-[240px] object-cover mb-4"
                />
              </div>
              <h3 className="heading-3 mb-4">Refined Elegance</h3>
              <p className="body-regular text-[#666666]">
                Every detail has been carefully considered, from the anatomic mattress to the walk-in shower, ensuring your absolute comfort.
              </p>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="text-center">
              <div className="mb-6">
                <img
                  src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/e62wvh9t_DSC_0769.jpg"
                  alt="Fully Equipped Kitchen"
                  className="w-full h-[240px] object-cover mb-4"
                />
              </div>
              <h3 className="heading-3 mb-4">Home Away From Home</h3>
              <p className="body-regular text-[#666666]">
                A fully-equipped kitchen with premium appliances, including a Nespresso machine, lets you feel truly at home during your stay.
              </p>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="text-center">
              <div className="mb-6">
                <img
                  src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/py256jjy_DSC_0695.jpg"
                  alt="Serene Bedroom"
                  className="w-full h-[240px] object-cover mb-4"
                />
              </div>
              <h3 className="heading-3 mb-4">Perfect Location</h3>
              <p className="body-regular text-[#666666]">
                Located in the heart of Thessaloniki, you're steps away from the city's best restaurants, shops, and cultural landmarks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="section-padding-small bg-[#f6f5e8]"
      >
        <div className="container text-center">
          <h2 className="hero-medium mb-8">
            Ready to Experience Tranquility?
          </h2>
          <p className="body-large text-[#666666] mb-12 max-w-2xl mx-auto">
            Reserve your stay at Elysium Retreat and discover your private sanctuary in Thessaloniki.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Book Your Stay
            </Link>
            <Link to="/suite" className="btn-secondary">
              Explore the Suite
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};