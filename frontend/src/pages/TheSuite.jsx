import React from 'react';
import { Wifi, Tv, Coffee, Wind, Lock, Check } from 'lucide-react';

export const TheSuite = () => {
  const features = [
    { icon: <Check size={20} />, text: '70 sq.m. of elegant space' },
    { icon: <Check size={20} />, text: 'King Size Bed with anatomic mattress' },
    { icon: <Coffee size={20} />, text: 'Nespresso Coffee Machine' },
    { icon: <Wifi size={20} />, text: 'High-Speed Wi-Fi' },
    { icon: <Tv size={20} />, text: '50" Smart TV with Netflix' },
    { icon: <Wind size={20} />, text: 'Air Conditioning & Heating' },
    { icon: <Lock size={20} />, text: 'Self Check-in' },
    { icon: <Check size={20} />, text: 'Fully-equipped Kitchen' },
    { icon: <Check size={20} />, text: 'Walk-in Shower' },
    { icon: <Check size={20} />, text: 'Premium Linens & Towels' },
    { icon: <Check size={20} />, text: 'Washer & Dryer' },
    { icon: <Check size={20} />, text: 'Iron & Ironing Board' }
  ];

  const photos = [
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/k1sgno7v_DSC_0648.jpg',
      alt: 'Bedroom with king size bed'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/py256jjy_DSC_0695.jpg',
      alt: 'Serene bedroom details'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/olpbcj2y_DSC_0754.jpg',
      alt: 'Living and dining area'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/e62wvh9t_DSC_0769.jpg',
      alt: 'Fully equipped kitchen'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/rmxjodi4_DSC_0728.jpg',
      alt: 'Elegant bathroom'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="section-padding-small">
        <div className="container">
          <h1 className="hero-large mb-6 text-center">
            An Urban Retreat Designed for You
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            Step into a sanctuary where every element has been thoughtfully curated to offer you the perfect blend of comfort, style, and functionality. This is more than a place to stay—it's a space to truly live.
          </p>
        </div>
      </section>

      {/* 3D Virtual Tour */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <h2 className="heading-1 mb-8 text-center">Take a Virtual Walkthrough</h2>
          <p className="body-large text-[#666666] text-center mb-12 max-w-2xl mx-auto">
            Explore every corner of the suite with our interactive 3D tour. Navigate through the space at your own pace and discover all the details that make Elysium Retreat special.
          </p>
          <div className="w-full" style={{ height: '600px', maxHeight: '80vh' }}>
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
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-1 mb-12 text-center">Curated Gallery</h2>
          <div className="masonry-grid">
            {photos.map((photo, index) => (
              <div key={index} className="image-card">
                <img src={photo.url} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container">
          <h2 className="heading-1 mb-12 text-center">Suite Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-[#333333]">{feature.icon}</div>
                <span className="body-regular">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="hero-medium mb-8">
            Reserve Your Experience
          </h2>
          <p className="body-large text-[#666666] mb-12 max-w-2xl mx-auto">
            Experience the perfect blend of tranquility and urban convenience. Book your stay at Elysium Retreat today.
          </p>
          <a href="/contact" className="btn-primary">
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
};