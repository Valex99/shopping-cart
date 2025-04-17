import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper px-40 pt-12 pb-15">
      <div className="footer-columns">
        <div>
          <h3 className="footer-title">COMPANY</h3>
          <ul>
            <li>About Us</li>
            <li>Store Locations</li>
            <li>Virtual Try-On</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">BRAND</h3>
          <ul>
            <li>Watch Craft</li>
            <li>Materials</li>
            <li>Reviews</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">HELP</h3>
          <ul>
            <li>Shipping & Returns</li>
            <li>Repairs</li>
            <li>Warranty</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-specialist">
          <h3 className="footer-title text-baseq">ASK A NOUVÉ SPECIALIST</h3>
          <p>
            Whether you're a collector or a first-time buyer, we're here to
            help.
          </p>
          <div className="footer-contact-icons">
            <span>📞 (000)-WATCH</span>
            <span>📧 support@nouve.com</span>
            <span>💬 Chat with Us</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NOUVÉ</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Accessibility</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
          <a href="#">Conformity</a>
        </div>
      </div>
    </footer>
  );
}
