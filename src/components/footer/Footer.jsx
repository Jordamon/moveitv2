import React from 'react';
import FOOTERCSS from './Footer.module.css';

function Footer() {
  return (
    <div className={FOOTERCSS.footer}>
      <div className={FOOTERCSS.container}>
        <div className={FOOTERCSS.row}>
          <div className={FOOTERCSS.footerCol1}>
            <h3>Download Our App</h3>
            <p>Download app for android and ios smartphones.</p>
            <div className={FOOTERCSS.appLogo}>
              <img src={require("../../images/Logos/app-store-logos.png")} alt="" />
            </div>
          </div>
          <div className={FOOTERCSS.footerCol2}>
            <img src={require("../../images/Logos/logo.avif")} alt="" />
            <p>Our purpose to provide you with a fit that is stylish and comfortable so nothing holds you back from the grind.</p>
          </div>
          <div className={FOOTERCSS.footerCol3}>
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="{FOOTERCSS.footerCol4}">
            <h3>Socials</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className={FOOTERCSS.copyright}>Copyright 2023 - Cody Coding</p>
      </div>
    </div>
  );
}

export default Footer;
