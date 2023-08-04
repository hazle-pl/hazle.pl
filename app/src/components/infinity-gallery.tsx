import React, { useRef, useEffect, useState } from "react";

interface Picture {
  src: string;
  alt: string;
}

interface InfinityGalleryProps {
  pictures: Picture[];
}

const InfinityGallery: React.FC<InfinityGalleryProps> = ({ pictures }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);

  const isMobile = () => window.innerWidth < 1200;

  useEffect(() => {
    if (galleryRef.current) {
      const galleryContainer = galleryRef.current;
      const totalImages = pictures.length;

      const scrollGallery = () => {
        if (!isMobile() && isHovered) {
          setScrollAmount((prevScroll) => prevScroll + 1);

          if (scrollAmount >= galleryContainer.scrollWidth) {
            setScrollAmount(0);
          }

          galleryContainer.scrollTo(scrollAmount, 0);
        } else if (isMobile()) {
          setScrollAmount((prevScroll) => prevScroll + 1);

          if (scrollAmount >= galleryContainer.scrollWidth) {
            setScrollAmount(0);
          }

          galleryContainer.scrollTo(scrollAmount, 0);
        }
      };

      // Start the continuous scroll when the component mounts and the user is hovering (only on desktop)
      if (!isMobile() && isHovered) {
        intervalRef.current = setInterval(scrollGallery, 20); // Adjust the interval for smoother/faster scrolling on desktop
      } else if (isMobile()) {
        intervalRef.current = setInterval(scrollGallery, 20); // Adjust the interval for smoother/faster scrolling on mobile
      }

      return () => {
        // Clean up the interval when the component unmounts
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [pictures, isHovered, scrollAmount]);

  const totalDuplicates = 5; // Increase this number to create more duplicates

  return (
    <div className="infinity-gallery" ref={galleryRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {Array.from({ length: totalDuplicates }, (_, duplicateIndex) =>
        pictures.map((picture, index) => (
          <img key={index + duplicateIndex * pictures.length} src={picture.src} alt={picture.alt} />
        ))
      )}
    </div>
  );
};

export default InfinityGallery;
