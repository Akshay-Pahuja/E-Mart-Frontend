import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
      <div className='leftFooter'>
        <h3>COMPANY</h3>
        <p>Blog</p>
        <p>Investor</p>
        <p>Feedback</p>
        <p>Ads</p>
      </div>

      <div className="midFooter">
        <h1>BetterMart</h1>
        <p>Known for excellence</p>
        <p>All rights reserved &copy;BetterMart:2023</p>
      </div>

      <div className="footer-col">
        <h4 className="bot">Follow Us</h4>
        <div className="wrapper">
          <a href="https://mobile.twitter.com/Arpitya08577460" className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span id='facebook'><FontAwesomeIcon icon={faFacebookF} /></span>
          </a>
          <a href="https://mobile.twitter.com/Arpitya08577460" className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span id='twitter'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span>
          </a>
          <a href="https://www.instagram.com/arpityadav6163" className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span id='insta'><FontAwesomeIcon icon={faInstagram}/></span>
          </a>
          <a href="https://github.com/21BCS035" className="icon github">
            <div className="tooltip">Github</div>
            <span id='github'><FontAwesomeIcon icon={faGithub}/></span>
          </a>
        </div>
      </div>

      <div className="col-3">
        <h4 className="text-white mb-4">Information</h4>
        <div className="footer-link d-flex flex-column">
          <Link to="/privacy-policy" className="text-white py-2 mb-1">
            Privacy Policy
          </Link>
          <Link to="/refund-policy" className="text-white py-2 mb-1">
            Refund Policy
          </Link>
          <Link to="/shipping-policy" className="text-white py-2 mb-1">
            Shipping Policy
          </Link>
          <Link to="/term-conditions" className="text-white py-2 mb-1">
            Terms & Conditions
          </Link>
          <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

  