import React, { useState } from 'react';

interface CarouselItem {
  id: number;
  content: React.ReactNode;
}

interface MultiItemCarouselProps {
  items: CarouselItem[];
  itemsToShow: number;
}

const MultiItemCarousel: React.FC<MultiItemCarouselProps> = ({ items, itemsToShow }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, items.length - itemsToShow));
  };

  const visibleItems = items.slice(activeIndex, activeIndex + itemsToShow);

  return (
    <div className="multi-item-carousel">
      <div className="carousel-wrapper">
        <div className="carousel-inner">
          {visibleItems.map((item) => (
            <div key={item.id} className="carousel-item">
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-control prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default MultiItemCarousel;
