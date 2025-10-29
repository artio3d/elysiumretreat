import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi, Tv, Coffee, Wind, Home as HomeIcon, Lock } from 'lucide-react';
import { ImageCarousel } from '../components/ImageCarousel';

export const Home = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const carouselImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/olpbcj2y_DSC_0754.jpg',
      alt: 'Living and dining area'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/k1sgno7v_DSC_0648.jpg',
      alt: 'Serene bedroom'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/e62wvh9t_DSC_0769.jpg',
      alt: 'Modern kitchen'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/rmxjodi4_DSC_0728.jpg',
      alt: 'Elegant bathroom'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/py256jjy_DSC_0695.jpg',
      alt: 'Bedroom details'
    }
  ];

  const amenities = [
    {
      icon: <HomeIcon size={32} />,
      title: '70 sq.m. Space',
      description: 'Spacious apartment designed for comfort'
    },
    {
      icon: <Wifi size={32} />,
      title: 'High-Speed Wi-Fi',
      description: 'Free unlimited internet access'
    },
    {
      icon: <Tv size={32} />,
      title: 'Smart TV',
      description: '50" with Netflix and streaming services'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Nespresso Machine',
      description: 'Premium coffee with capsules included'
    },
    {
      icon: <Wind size={32} />,
      title: 'Climate Control',
      description: 'Air conditioning and heating throughout'
    },
    {
      icon: <Lock size={32} />,
      title: 'Self Check-in',
      description: 'Contactless keyless entry system'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/3qsq388b__NVD6519.JPG"
          alt="Elysium Retreat Living Room"
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

      {/* Immerse Yourself Section - NEW */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding"
      >
        <div className="container">
          <h2 className="hero-large mb-4 text-center" style={{ color: '#C86432' }}>
            Step Inside Your Sanctuary
          </h2>
          <p className="body-large text-[#666666] text-center mb-20 max-w-3xl mx-auto">
            Experience your future sanctuary through our immersive 3D tour and curated photography. Explore every detail before you arrive.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Matterport 3D Tour */}
            <div>
              <h3 className="heading-2 mb-6" style={{ color: '#707038' }}>Virtual 3D Tour</h3>
              <p className="body-regular text-[#666666] mb-6">
                Navigate through the space at your own pace. Click, drag, and explore every corner of Elysium Retreat from anywhere in the world.
              </p>
              <div className="w-full" style={{ height: '600px' }}>
                <iframe
                  src="https://my.matterport.com/show/?m=gnCs6bcha8J"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                  title="Elysium Retreat 3D Tour"
                  className="border-0"
                />
              </div>
            </div>

            {/* Right Column - Image Carousel */}
            <div>
              <h3 className="heading-2 mb-6" style={{ color: '#707038' }}>Photo Gallery</h3>
              <p className="body-regular text-[#666666] mb-6">
                Discover the thoughtful design details, premium finishes, and warm atmosphere that define your retreat.
              </p>
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Amenities Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding-small bg-[#f6f5e8]"
      >
        <div className="container">
          <h2 className="hero-medium mb-4 text-center" style={{ color: '#C86432' }}>
            Everything You Need
          </h2>
          <p className="body-large text-[#666666] text-center mb-16 max-w-3xl mx-auto">
            From fully-equipped kitchen to premium entertainment, every amenity has been carefully selected for your comfort and convenience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6" style={{ color: '#C86432' }}>
                  {amenity.icon}
                </div>
                <h3 className="heading-3 mb-3">{amenity.title}</h3>
                <p className="body-regular text-[#666666]">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/amenities" className="btn-secondary">
              View All Amenities
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="section-padding"
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
            <Link to="/area" className="btn-secondary">
              Explore the Area
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};