import { useState, useEffect } from "react";
import Header from "./Header";
import StickyHeader from "./StickyHeader";

export default function HeaderWrapper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to whatever threshold you want
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {scrolled ? <StickyHeader /> : <Header />}
    </>
  );
}