import { useEffect, useState } from "react";
import Header from "./Header";
import StickyHeader from "./StickyHeader";

export default function HeaderWrapper() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {/* The main header is always visible */}
        <Header />
        {/* The sticky header will only be visible once scrolled past 120px */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isSticky ? "fixed top-0 left-0 w-full z-50" : "hidden"
          }`}
        >
          <StickyHeader />
        </div>
      </div>
    </>
  );
}