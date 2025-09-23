import React from "react";

/**
 * Container ensures consistent max-width and horizontal padding
 * across different screen sizes.
 */
const Container = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
