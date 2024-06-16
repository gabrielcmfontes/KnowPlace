import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import GuyUs from "../../img/uC.png";
import StyledButton from "../../components/StyledButton/StyledButton";
import WhyCards from "../../components/WhyCards/WhyCards";
import AboutUs from "../../components/AboutUs/AboutUs";

function Home() {
  return (
    <section className={styles.Home}>
      <Header>
        <section className={styles.HeaderContent}>
          <div>
            <h2>
              Unlock Your Potential in Web Development! Explore Our Course Now!
            </h2>
            <StyledButton />
          </div>
          <div>
            <img src={GuyUs} alt="tmnc" />
            
          </div>
        </section>

        <WhyCards />
        
        <AboutUs/>
      </Header>

      
    </section>
  );
}

export default Home;
