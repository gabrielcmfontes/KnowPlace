import React from "react";
import styles from "../Footer/Footer.module.css";
import PhoneLogo from "../../img/Footer/FooterImg/phone.png";
import EmailLogo from "../../img/Footer/FooterImg/email.svg";
import LocationLogo from "../../img/Footer/FooterImg/location.svg";
import LinkedinLogo from "../../img/Footer/FooterImg/linkedinLogo.png";
import ArrowUp from "../../img/Footer/FooterImg/arrowup.svg";
import ArrowLeft from "../../img/Footer/FooterImg/arrowleft.svg";

function Footer() {
  return (
    <>
      <div className={styles.darkPart}>
        {/* Top Section */}
      <div className={styles.dadTop}>
        <div className={`${styles.section} ${styles.topSection}`}>
          <div>
            <img src={PhoneLogo} alt="" />
            <span>+55 (31) 971956731</span>
          </div>
          <div>
            <img src={EmailLogo} alt="" />
            <span>gabrielcmfontes@gmail.com</span>
          </div>
          <div>
            <img src={LocationLogo} alt="" />
            <span>Belo Horizonte, BR</span>
          </div>
        </div>
        <div className={styles.barr}></div>
      </div>

      {/* Middle Section */}
      <div className={`${styles.middleSection} ${styles.section}`}>
        <div>
          <h2>About</h2>
          <a href="">Our Company</a>
          <a href="">Career</a>
        </div>
        <div>
          <h2>Company</h2>
          <a href="">Our Course</a>
          <a href="">Contacts</a>
        </div>
        <div>
          <h2>Resources</h2>
          <a href="">Blog</a>
          <a href="">Newsletter</a>
          <a href="">Privacy Policy</a>
        </div>
        <div>
          <h2 className={styles.subTitle}>Subscribe</h2>
          <div className={styles.btnSub}>
            <input type="text" />
            <button>
              <img src={ArrowLeft} alt="" />
            </button>
          </div>
          <span>Get Digital marketing updates in your mailbox</span>
        </div>
      </div>
      </div>

      <div className={styles.lightPart}>
        {/* Bottom Section */}
          <div className={`${styles.section} ${styles.bottomSection}`}>
          <div></div>
          <div>
            <img className={styles.LinkedinLogo} src={LinkedinLogo} alt="" />
            <span>2024 Gabriel Fontes All Rights Reserved</span>
          </div>
          <div className={styles.ArrowLeftBox}>
            <a href="">
              <img className={styles.ArrowLeft} src={ArrowUp} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
