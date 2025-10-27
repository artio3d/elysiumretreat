import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
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
            <h1 className="hero-large max-w-2xl mb-4 text-[#333333]">
              Your Private Sanctuary in the Heart of Thessaloniki
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
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
      </section>

      {/* 3D Tour Highlight */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <div className="grid-two-column">
            <div>
              <h2 className="heading-1 mb-6">Explore in 3D</h2>
              <p className="body-large text-[#666666] mb-8">
                Take a virtual walkthrough of our suite from anywhere in the world. Experience the space, the light, and the thoughtful design details that make Elysium Retreat truly special.
              </p>
              <Link to="/suite" className="btn-icon">
                Take the virtual tour
                <ArrowRight size={12} />
              </Link>
            </div>
            <div className="image-card">
              <Link to="/suite">
                <img
                  src="https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/olpbcj2y_DSC_0754.jpg"
                  alt="3D Virtual Tour Preview"
                  className="w-full h-[400px] object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-1 text-center mb-16">Designed for Your Comfort</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
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
            </div>
            <div className="text-center">
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
            </div>
            <div className="text-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding-small bg-[#f6f5e8]">
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
      </section>
    </div>
  );
};