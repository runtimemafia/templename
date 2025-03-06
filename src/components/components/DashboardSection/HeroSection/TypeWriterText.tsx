"use client";
import React, { useState, useEffect } from "react";

const TypewriterText: React.FC = () => {
  const text = "Anytime, Anywhere";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust speed

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 1000); // Pause before restarting

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return <>{displayText}</>;
};

export default TypewriterText;
