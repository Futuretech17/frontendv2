import React, { useEffect, useRef, useState } from 'react';
import '../styles/WhatsNew.css';
import { FaWhatsapp } from 'react-icons/fa';

const Carousel = () => {
  const carouselRef = useRef(null);
  const wrapperRef = useRef(null);
  const headingRef = useRef(null); // Ref for the heading
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);  // Track current index of carousel
  const firstCardWidth = 340;

  const handleArrowClick = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const newIndex = direction === 'left' 
        ? Math.max(currentIndex - 1, 0) 
        : Math.min(currentIndex + 1, products.length - 1);
      setCurrentIndex(newIndex);
      carousel.scrollTo({
        left: newIndex * firstCardWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://backendv2-7kje.onrender.com/api/products/whats-new');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Trigger fade-in animation when in view
          } else {
            entry.target.classList.remove('fade-in'); // Optionally remove the animation when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentHeadingRef = headingRef.current;
    if (currentHeadingRef) {
      observer.observe(currentHeadingRef);
    }

    return () => {
      if (currentHeadingRef) {
        observer.unobserve(currentHeadingRef);
      }
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const wrapper = wrapperRef.current;
    let isDragging = false;
    let startX;
    let startScrollLeft;
    let timeoutId;

    const dragStart = (e) => {
      isDragging = true;
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      const newScrollLeft = startScrollLeft - (e.pageX - startX);
      if (newScrollLeft <= 0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
        isDragging = false;
        return;
      }
      carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
      isDragging = false;
    };

    const autoPlay = () => {
      if (window.innerWidth < 800) return;
      const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;
      if (carousel.scrollLeft >= maxScrollLeft) return;
      timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
      }, 2500);
    };

    const handleMouseEnter = () => clearTimeout(timeoutId);
    const handleMouseLeave = autoPlay;

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);
    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className='whatsnew-container'>
      <h2 ref={headingRef} className="whatsnew-heading">What's New in Stock</h2>
      <div ref={wrapperRef} className="wrapper">
        <i onClick={() => handleArrowClick('left')} id="left">{"<"}</i>
        <ul ref={carouselRef} className="carousel">
          {products.map((product, index) => (
            <li key={product._id} className="card">
              <div className="img">
                <img
                  src={`https://backendv2-7kje.onrender.com/${product.image}`}
                  alt={product.name}
                  draggable="false"
                />
              </div>
              <h2>{product.name}</h2>
              <span>{product.category}</span>
              <a
                href={`https://wa.me/254714687727?text=I'm%20interested%20in%20${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-enquiry"
              >
                <FaWhatsapp className="whatsapp-icon" /> Enquire more
              </a>
            </li>
          ))}
        </ul>
        <i onClick={() => handleArrowClick('right')} id="right">{">"}</i>
      </div>
    </section>
  );
};

export default Carousel;
