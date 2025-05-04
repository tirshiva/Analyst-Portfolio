let isScrolling = false;
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
let lastSwipeTime = 0;
const SWIPE_COOLDOWN = 800; // ms

export const scrollToSection = (sectionId) => {
  const container = document.querySelector('.snap-x');
  const sections = document.querySelectorAll('.snap-center');
  const targetSection = document.getElementById(sectionId);
  
  if (container && targetSection) {
    isScrolling = true;
    const index = Array.from(sections).indexOf(targetSection);
    const scrollAmount = index * window.innerWidth;
    
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isScrolling = false;
    }, SWIPE_COOLDOWN);
  }
};

export const handleWheelScroll = (e) => {
  e.preventDefault();
  
  const container = document.querySelector('.snap-x');
  if (!container || isScrolling) return;

  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    const now = Date.now();
    if (now - lastSwipeTime < SWIPE_COOLDOWN) return;
    
    isScrolling = true;
    lastSwipeTime = now;
    
    const currentIndex = Math.round(container.scrollLeft / window.innerWidth);
    const targetIndex = e.deltaX > 0 ? currentIndex + 1 : currentIndex - 1;
    
    if (targetIndex >= 0 && targetIndex < container.children.length) {
      container.scrollTo({
        left: targetIndex * window.innerWidth,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isScrolling = false;
    }, SWIPE_COOLDOWN);
  }
};

export const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
};

export const handleTouchMove = (e) => {
  if (isScrolling) return;
  touchEndX = e.touches[0].clientX;
  touchEndY = e.touches[0].clientY;
};

export const handleTouchEnd = () => {
  if (isScrolling) return;
  
  const container = document.querySelector('.snap-x');
  if (!container) return;

  const now = Date.now();
  if (now - lastSwipeTime < SWIPE_COOLDOWN) return;

  const swipeThreshold = 50;
  const diffX = touchStartX - touchEndX;
  const diffY = touchStartY - touchEndY;

  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
    isScrolling = true;
    lastSwipeTime = now;
    
    const currentIndex = Math.round(container.scrollLeft / window.innerWidth);
    const targetIndex = diffX > 0 ? currentIndex + 1 : currentIndex - 1;
    
    if (targetIndex >= 0 && targetIndex < container.children.length) {
      container.scrollTo({
        left: targetIndex * window.innerWidth,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isScrolling = false;
    }, SWIPE_COOLDOWN);
  }
}; 