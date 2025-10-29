import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi, Tv, Coffee, Wind, HomeIcon, Lock, Check, Utensils, Wine, MapPin as MapPinIcon, Sparkles } from 'lucide-react';
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

  const galleryImages = [
    'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/k1sgno7v_DSC_0648.jpg',
    'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/py256jjy_DSC_0695.jpg',
    'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/olpbcj2y_DSC_0754.jpg',
    'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/e62wvh9t_DSC_0769.jpg',
    'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/rmxjodi4_DSC_0728.jpg'
  ];

  const amenities = [
    { icon: <HomeIcon size={32} />, title: '70 sq.m. Space', description: 'Spacious apartment designed for ultimate comfort' },
    { icon: <Check size={32} />, title: 'King Size Bed', description: 'Premium anatomic mattress for restful sleep' },
    { icon: <Wifi size={32} />, title: 'High-Speed Wi-Fi', description: 'Free unlimited internet throughout' },
    { icon: <Tv size={32} />, title: 'Smart Entertainment', description: '50" TV with Netflix & streaming' },
    { icon: <Coffee size={32} />, title: 'Nespresso Machine', description: 'Premium coffee with capsules included' },
    { icon: <Utensils size={32} />, title: 'Full Kitchen', description: 'Modern appliances & cookware' },
    { icon: <Wind size={32} />, title: 'Climate Control', description: 'Air conditioning & heating' },
    { icon: <Lock size={32} />, title: 'Self Check-in', description: 'Contactless keyless entry' },
    { icon: <Check size={32} />, title: 'Premium Linens', description: 'Hypo-allergenic bedding & towels' },
    { icon: <Check size={32} />, title: 'Washer & Dryer', description: 'Laundry facilities included' },
    { icon: <Check size={32} />, title: 'Soundproofing', description: 'Peaceful environment guaranteed' },
    { icon: <Check size={32} />, title: 'Private Terrace', description: 'Balcony with city views' }
  ];

  return (
    <div>
      {/* SECTION 1: Hero */}
      <section id="home" className="relative">
        <img
          src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/3qsq388b__NVD6519.JPG"
          alt="Elysium Retreat Living Room"
          className="hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fffef2]/95 via-[#fffef2]/30 to-transparent flex items-end">
          <div className="container pb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-large max-w-3xl mb-6 text-[#333333]"
            >
              Stay in the Heart. Live the City.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="body-large text-[#666666] max-w-2xl"
            >
              Experience authentic Greek hospitality in a meticulously designed space that invites you to breathe, relax, and feel at home.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Suite - 3D Tour */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding"
      >
        <div className="container">
          <h2 className="hero-medium mb-6 text-center" style={{ color: '#C86432' }}>
            Step Inside Your Sanctuary
          </h2>
          <p className="body-large text-[#666666] text-center mb-20 max-w-3xl mx-auto">
            Take an immersive 3D tour and explore every corner of Elysium Retreat from anywhere in the world.
          </p>
          
          <div className="w-full max-w-6xl mx-auto" style={{ height: '700px' }}>
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
      </motion.section>

      {/* SECTION 2B: Photo Gallery - Carousel */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding-small bg-[#f6f5e8]"
      >
        <div className="container">
          <h2 className="heading-1 mb-16 text-center">
            Discover Every Detail
          </h2>
          
          {/* Carousel */}
          <div className="max-w-5xl mx-auto">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: Amenities Grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding"
      >
        <div className="container">
          <h2 className="hero-medium mb-6 text-center" style={{ color: '#C86432' }}>
            Everything You Need
          </h2>
          <p className="body-large text-[#666666] text-center mb-20 max-w-3xl mx-auto">
            From fully-equipped kitchen to premium entertainment, every amenity has been carefully selected for your comfort.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 border border-[#ebeade] hover:border-[#C86432] transition-smooth hover-lift rounded-xl"
              >
                <div className="mb-4" style={{ color: '#C86432' }}>
                  {amenity.icon}
                </div>
                <h3 className="heading-3 mb-2">{amenity.title}</h3>
                <p className="body-small text-[#666666]">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 4: Contact Section */}
      <motion.section 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        className="section-padding bg-[#f6f5e8]"
      >
        <div className="container">
          <h2 className="hero-medium mb-6 text-center">
            Ready to Experience Tranquility?
          </h2>
          <p className="body-large text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            Reserve your stay at Elysium Retreat and discover your private sanctuary in Thessaloniki.
          </p>
          
          <div className="max-w-4xl mx-auto">
            {/* Booking Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Direct Contact */}
              <div className="border-2 border-[#C86432] p-8 rounded-xl">
                <h3 className="heading-2 mb-6">Direct Contact</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="body-small text-[#666666] mb-2">Phone / WhatsApp</p>
                    <a href="tel:+306978076850" className="body-large font-semibold text-[#333333] hover:text-[#C86432] transition-smooth">
                      +30 697 807 6850
                    </a>
                  </div>
                  <div>
                    <p className="body-small text-[#666666] mb-2">Email</p>
                    <a href="mailto:elysiumretreat@gmail.com" className="body-large font-semibold text-[#333333] hover:text-[#C86432] transition-smooth">
                      elysiumretreat@gmail.com
                    </a>
                  </div>
                </div>
                <p className="body-small text-[#666666] italic">
                  (Recommended for better price)
                </p>
              </div>

              {/* Booking.com */}
              <div className="border border-[#bcbbb4] p-8 rounded-xl">
                <h3 className="heading-2 mb-4">Book via Booking.com</h3>
                <p className="body-regular text-[#666666] mb-6">
                  Reserve through a trusted platform with instant confirmation.
                </p>
                <a
                  href="https://www.booking.com/Share-yssY88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book on Booking.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};