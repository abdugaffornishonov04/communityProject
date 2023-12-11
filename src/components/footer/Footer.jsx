const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper container">
        <div className="footer-col-1">
          <a href="#" className="footer-logo">
            <img src="/favicon.png" alt="logo" />
            <p>Community</p>
          </a>
          <p className="footer-col1-text">Bespoke software solutions</p>
          <div className="footer-col1-contact">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com"
            >
              <img src="/facebook.png" alt="" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="www.youtube.com/@devgaffor"
            >
              <img src="/youtube.png" alt="" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/devgaffor"
            >
              <img src="/instagram.png" alt="" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/devgaffor"
            >
              <img src="/twitter.png" alt="" />
            </a>
          </div>
        </div>
        <div className="footer-col-2">
          <h5>Company</h5>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-col-3">
          <h5>Connect</h5>
          <a href="#">{"abdugaffor0042@gmail.com"}</a>
          <a href="#">+998 {"(99)"} 008 50 49</a>
        </div>
        <div className="footer-col-4">
          <h5>Join Newsletter</h5>
          <input type="email" placeholder="Type email here" />
          <button>Subscribe</button>
        </div>
      </div>
      <p className="footer-rights">© All rights reserved – Devgaffor</p>
    </footer>
  );
};

export default Footer;
