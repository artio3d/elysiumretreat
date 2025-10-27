import React from 'react';
import { Sparkles, Utensils, Wine, MapPin } from 'lucide-react';

export const Amenities = () => {
  const standardAmenities = [
    'King Size Bed with anatomic mattress',
    'Premium linens and towels',
    'Fully-equipped kitchen with modern appliances',
    'Nespresso Coffee Machine',
    '50" Smart TV with Netflix',
    'High-Speed Wi-Fi throughout',
    'Air Conditioning & Heating',
    'Walk-in Shower with premium toiletries',
    'Washer & Dryer',
    'Iron & Ironing Board',
    'Self Check-in for your convenience',
    'Hairdryer',
    'Fresh towels and bed linens',
    'Cleaning supplies',
    'Dedicated workspace'
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
      <section className="section-padding-small">
        <div className="container">
          <h1 className="hero-large mb-6 text-center">
            Amenities & Experiences
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            Everything you need for a comfortable, memorable stay—and the opportunity to create truly exceptional moments.
          </p>
        </div>
      </section>

      {/* Standard Amenities */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <h2 className="heading-1 mb-12 text-center">Included Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {standardAmenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#333333] rounded-full mt-2 flex-shrink-0" />
                <span className="body-regular">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="section-padding">
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
      </section>

      {/* CTA */}
      <section className="section-padding-small bg-[#f6f5e8]">
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
      </section>
    </div>
  );
};