//import Header from "./components/Header";

import HeaderWrapper from "./components/HeaderWrapper";
import Nav from "./components/Nav";
import MailForm from "./components/mail-form/MailForm";
import Footer from "./components/footer/Footer";
import Author from "./components/Author";
import ScrollToTop from "./components/ScrollToTop";
import SearchModal from "./components/search-modal/SearchModal";
import { useState } from "react";

import { Outlet } from "react-router-dom";

{
  /* <Outlet /> is a special component from react-router-dom — it tells
 React Router where to render the nested page components. */
}

// Layout component wraps shared UI between sites.
//You make a single Layout component that includes Header and Nav.
// Then you tell React Router to wrap all routes inside it.

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      <ScrollToTop />
      <HeaderWrapper toggleModal={toggleModal} /> {/* Pass toggleModal to the header */}
      <Nav />
      <main>
        <Outlet />
      </main>
      <MailForm />
      <Footer />
      <Author />

      {/* Render the modal here */}
      {isModalOpen && <SearchModal toggleModal={toggleModal} />}
    </>
  );
}

{
  /* <Outlet /> is the magic — it tells React Router:

“Render the matched page component here (like Homepage, Products, Cart…).” */
}
