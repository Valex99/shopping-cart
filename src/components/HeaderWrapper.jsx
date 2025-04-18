import { useEffect, useState } from "react";
import Header from "./Header";
import StickyHeader from "./StickyHeader";

export default function HeaderWrapper() {
  // Set boolean state on which component to show
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Add a buffer zone: Only toggle to StickyHeader after scrolling down by more than 130px
      // and only switch back to Header when the scroll is less than 100px.
      if (currentScroll > 130 && !isSticky) {
        setIsSticky(true); // Show StickyHeader when scroll is more than 130px
      } else if (currentScroll < 100 && isSticky) {
        setIsSticky(false); // Show Header when scroll is less than 100px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  return (
    <>
      {!isSticky && <Header />}
      {isSticky && <StickyHeader />}
    </>
  );
}
