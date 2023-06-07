import { useState, useEffect } from "react";

const mobileScreenSize = 715;

const useScreen = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobileScreen, setIsMobileScreen] = useState(
    screenWidth < mobileScreenSize
  );

  useEffect(() => {
    const resizeHandler = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    setIsMobileScreen(screenWidth < mobileScreenSize);
  }, [screenWidth]);

  return { screenWidth: screenWidth, isMobileScreen: isMobileScreen };
};

export default useScreen;
