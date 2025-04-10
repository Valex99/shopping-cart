import "./mail.css";
import { useState } from "react";

export default function MailForm() {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      ("Please enter a valid email address.");
    } else {
      console.log("Subscribed with:", email);
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mail-container px-40 py-10">
      <div className="mail-left">
        <h1>
          BE A PART OF THE <br />
          NOUVÉ
        </h1>
      </div>
      <p className="text-xs">
        Enjoy 10% off your first purchase when you sign up!
      </p>
      <div className="mail-right">
        <input
          type="email"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-yellow-400 px-4 py-2 outline-none"
        />
        <button type="submit">SUBSCRIBE</button>
      </div>
    </form>
  );
}
