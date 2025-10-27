import React, { useState } from 'react';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const images = [
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/k1sgno7v_DSC_0648.jpg',
      category: 'bedroom',
      alt: 'Serene bedroom with king size bed'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/py256jjy_DSC_0695.jpg',
      category: 'bedroom',
      alt: 'Bedroom details and lighting'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/olpbcj2y_DSC_0754.jpg',
      category: 'living',
      alt: 'Living and dining area'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/e62wvh9t_DSC_0769.jpg',
      category: 'kitchen',
      alt: 'Modern fully-equipped kitchen'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_urban-oasis-2/artifacts/rmxjodi4_DSC_0728.jpg',
      category: 'bathroom',
      alt: 'Elegant bathroom with walk-in shower'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'living', label: 'Living Areas' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'bathroom', label: 'Bathroom' }
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter);

  return (
    <div>
      {/* Header */}
      <section className="section-padding-small">
        <div className="container">
          <h1 className="hero-large mb-6 text-center">
            Gallery
          </h1>
          <p className="body-large text-[#666666] text-center max-w-3xl mx-auto">
            Explore our thoughtfully designed space through these curated images. Each photograph captures the essence of tranquility and refined comfort.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 border transition-smooth ${
                  activeFilter === filter.id
                    ? 'bg-[#333333] text-[#fffef2] border-[#333333]'
                    : 'bg-transparent text-[#333333] border-[#333333] hover:bg-[#333333] hover:text-[#fffef2]'
                }`}
                style={{ borderRadius: '0px' }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="masonry-grid">
            {filteredImages.map((image, index) => (
              <div key={index} className="image-card">
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-small bg-[#f6f5e8]">
        <div className="container text-center">
          <h2 className="hero-medium mb-8">
            Experience It in Person
          </h2>
          <p className="body-large text-[#666666] mb-12 max-w-2xl mx-auto">
            These images only tell part of the story. Book your stay to experience the warmth and tranquility of Elysium Retreat firsthand.
          </p>
          <a href="/contact" className="btn-primary">
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
};