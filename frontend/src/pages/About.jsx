import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div>
      {/* Split-Screen Layout */}
      <section className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Column - Full-Height Image */}
          <div className="relative h-[60vh] lg:h-screen lg:sticky lg:top-0">
            <img
              src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/olpbcj2y_DSC_0754.jpg"
              alt="Elysium Retreat Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fffef2]/10" />
          </div>

          {/* Right Column - Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="flex items-center p-8 lg:p-16 bg-[#fffef2]"
          >
            <div className="max-w-2xl">
              <h1 className="hero-large mb-8" style={{ color: '#C86432' }}>
                About Elysium Retreat
              </h1>

              <div className="space-y-8">
                <div>
                  <h2 className="heading-2 mb-4">Our Story</h2>
                  <p className="body-large text-[#666666]">
                    Elysium Retreat was born from a simple vision: to create a space where travelers could experience true tranquility in the heart of a vibrant city. We believe that accommodation should be more than just a place to sleep—it should be a sanctuary that rejuvenates the soul.
                  </p>
                </div>

                <div>
                  <p className="body-large text-[#666666]">
                    Located in Thessaloniki, a city rich with history and culture, our suite offers a peaceful retreat from the energy of urban life while keeping you connected to all the city has to offer.
                  </p>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">Our Philosophy</h2>
                  <p className="body-large text-[#666666]">
                    We embrace the principles of minimalist design—not as austerity, but as intentionality. Every element in Elysium Retreat has been carefully selected to serve both function and beauty. From the warm, neutral palette that calms the mind to the anatomic mattress that ensures restorative sleep, each detail reflects our commitment to your well-being.
                  </p>
                </div>

                <div>
                  <p className="body-large text-[#666666]">
                    Our approach to hospitality is rooted in authentic Greek values: warmth, generosity, and genuine care for our guests. We've designed the space to give you complete independence with self check-in, yet we're always available should you need anything during your stay.
                  </p>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">Design Inspiration</h2>
                  <p className="body-large text-[#666666]">
                    The suite's design draws inspiration from Mediterranean aesthetics—natural materials, abundant light, and a harmonious connection between interior and exterior spaces. We've married this with contemporary minimalism to create an environment that feels both timeless and fresh.
                  </p>
                </div>

                <div>
                  <p className="body-large text-[#666666]">
                    Soft, earthy tones create a sense of calm, while natural wood elements bring warmth. The result is a space that invites you to slow down, breathe deeply, and simply be.
                  </p>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">Our Commitment</h2>
                  <p className="body-large text-[#666666]">
                    At Elysium Retreat, we're committed to providing an exceptional experience that honors both comfort and sustainability. We use eco-friendly cleaning products, provide high-quality linens to reduce waste, and encourage guests to explore Thessaloniki's walkable neighborhoods.
                  </p>
                </div>

                <div>
                  <p className="body-large text-[#666666] mb-8">
                    Your stay supports local artisans and businesses—from the curated experiences we can arrange to the recommendations we provide for dining and entertainment.
                  </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#ebeade]">
                  <div>
                    <h3 className="heading-3 mb-3" style={{ color: '#C86432' }}>Tranquility</h3>
                    <p className="body-regular text-[#666666]">
                      Creating spaces that offer genuine peace and rejuvenation.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-3 mb-3" style={{ color: '#707038' }}>Authenticity</h3>
                    <p className="body-regular text-[#666666]">
                      Honoring Greek hospitality traditions while embracing contemporary comforts.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-3 mb-3" style={{ color: '#C86432' }}>Excellence</h3>
                    <p className="body-regular text-[#666666]">
                      Maintaining the highest standards in every detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};