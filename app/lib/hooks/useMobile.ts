import { useEffect, useState } from "react";

export const useMobile = () => {
  const InnerWidth = typeof window !== "undefined" ? window?.innerWidth : 0;
  const [windowWidth, setWindowWidth] = useState(InnerWidth);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  return { isMobile };
};
