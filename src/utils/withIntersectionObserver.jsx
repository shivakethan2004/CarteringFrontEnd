import React, { useState, useEffect, useRef } from "react";

// Wrapper component using IntersectionObserver
const WithIntersectionObserver = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is in view
          if (entry.isIntersecting) {
            setIsInView(true); // Element is in view
          } else {
            setIsInView(false); // Element is out of view
          }
        });
      },
      { threshold: 0.5 } // 50% of the element should be visible to trigger the event
    );

    // Start observing the element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {/* Render children components */}
      {React.cloneElement(children, { isInView })}
    </div>
  );
};

// Export the component so it can be used in other parts of the app
export default WithIntersectionObserver;
