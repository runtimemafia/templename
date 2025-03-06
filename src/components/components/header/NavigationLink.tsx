import React from "react";

const NavigationLinks = () => {
  const navigationLinks = ["Home", "Blogs", "Pricing", "About", "Contact"];

  return (
    <div className="flex space-x-4">
      {navigationLinks.map((link) => (
        <a
          key={link}
          href={`/${link.toLowerCase()}`}
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavigationLinks;
