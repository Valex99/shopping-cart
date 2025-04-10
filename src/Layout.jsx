import Header from "./components/Header";
import Nav from "./components/Nav";
import MailForm from "./components/mail-form/MailForm";
import Footer from "./components/footer/Footer";
import Author from "./components/Author";

import { Outlet } from "react-router-dom";

{
  /* <Outlet /> is a special component from react-router-dom — it tells
 React Router where to render the nested page components. */
}

// Layout component wraps shared UI between sites.
//You make a single Layout component that includes Header and Nav.
// Then you tell React Router to wrap all routes inside it.

export default function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <MailForm />
      <Footer />
      <Author />
      {/* Once the footer is ready - do the same with it */}
    </>
  );
}

{
  /* <Outlet /> is the magic — it tells React Router:

“Render the matched page component here (like Homepage, Products, Cart…).” */
}
