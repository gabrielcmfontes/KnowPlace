import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import GuyUs from "../../img/uC.png";

function Home() {
  return (
    <section className={styles.Home}>
      <Header>
        <section className={styles.HeaderContent}>
          <div>
            <h2>
              Unlock Your Potential in Web Development! Explore Our Course Now!
            </h2>
            <button>
              <i class="fa-solid fa-lock-open"></i>
              Free Now
            </button>
          </div>
          <div>
            <img src={GuyUs} alt="tmnc" />
          </div>
        </section>
      </Header>
    </section>
  );
}

export default Home;
