import React from 'react';

export const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="section-padding-small">
        <div className="container">
          <h1 className="hero-large mb-6 text-center">
            About Elysium Retreat
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            A sanctuary born from a passion for design, hospitality, and the art of living well.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <img
                src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/olpbcj2y_DSC_0754.jpg"
                alt="Elysium Retreat Interior"
                className="w-full h-[500px] object-cover mb-12"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="heading-1 mb-6">Our Story</h2>
                <p className="body-large text-[#666666] mb-4">
                  Elysium Retreat was born from a simple vision: to create a space where travelers could experience true tranquility in the heart of a vibrant city. We believe that accommodation should be more than just a place to sleep—it should be a sanctuary that rejuvenates the soul.
                </p>
                <p className="body-large text-[#666666]">
                  Located in Thessaloniki, a city rich with history and culture, our suite offers a peaceful retreat from the energy of urban life while keeping you connected to all the city has to offer.
                </p>
              </div>

              <div>
                <h2 className="heading-1 mb-6">Our Philosophy</h2>
                <p className="body-large text-[#666666] mb-4">
                  We embrace the principles of minimalist design—not as austerity, but as intentionality. Every element in Elysium Retreat has been carefully selected to serve both function and beauty. From the warm, neutral palette that calms the mind to the anatomic mattress that ensures restorative sleep, each detail reflects our commitment to your well-being.
                </p>
                <p className="body-large text-[#666666]">
                  Our approach to hospitality is rooted in authentic Greek values: warmth, generosity, and genuine care for our guests. We've designed the space to give you complete independence with self check-in, yet we're always available should you need anything during your stay.
                </p>
              </div>

              <div>
                <h2 className="heading-1 mb-6">Design Inspiration</h2>
                <p className="body-large text-[#666666] mb-4">
                  The suite's design draws inspiration from Mediterranean aesthetics—natural materials, abundant light, and a harmonious connection between interior and exterior spaces. We've married this with contemporary minimalism to create an environment that feels both timeless and fresh.
                </p>
                <p className="body-large text-[#666666]">
                  Soft, earthy tones create a sense of calm, while natural wood elements bring warmth. The result is a space that invites you to slow down, breathe deeply, and simply be.
                </p>
              </div>

              <div>
                <h2 className="heading-1 mb-6">Our Commitment</h2>
                <p className="body-large text-[#666666] mb-4">
                  At Elysium Retreat, we're committed to providing an exceptional experience that honors both comfort and sustainability. We use eco-friendly cleaning products, provide high-quality linens to reduce waste, and encourage guests to explore Thessaloniki's walkable neighborhoods.
                </p>
                <p className="body-large text-[#666666]">
                  Your stay supports local artisans and businesses—from the curated experiences we can arrange to the recommendations we provide for dining and entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <h2 className="heading-1 mb-12 text-center">What Guides Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="heading-3 mb-4">Tranquility</h3>
              <p className="body-regular text-[#666666]">
                Creating spaces that offer genuine peace and rejuvenation for every guest.
              </p>
            </div>
            <div className="text-center">
              <h3 className="heading-3 mb-4">Authenticity</h3>
              <p className="body-regular text-[#666666]">
                Honoring Greek hospitality traditions while embracing contemporary comforts.
              </p>
            </div>
            <div className="text-center">
              <h3 className="heading-3 mb-4">Excellence</h3>
              <p className="body-regular text-[#666666]">
                Maintaining the highest standards in every detail, from design to service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="hero-medium mb-8">
            Become Part of Our Story
          </h2>
          <p className="body-large text-[#666666] mb-12 max-w-2xl mx-auto">
            We invite you to experience Elysium Retreat and discover your own sanctuary in Thessaloniki.
          </p>
          <a href="/contact" className="btn-primary">
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
};