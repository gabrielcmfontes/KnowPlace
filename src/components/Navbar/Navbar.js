import styles from "../Navbar/Navbar.module.css"
import logo from "../../img/site/Logo.png"

function Navbar(){
    return(
        <div className={styles.Navbar}>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <div>
                <a href="#">Home</a>
                </div>
                <div>
                <a href="#">Pages</a>
                </div>
                <div>
                <a href="#">Course</a>
                </div>
                <div>
                <a href="#">Contact</a>
                </div>
                <div>
                <a href="#" className={styles.Button}>LOGIN</a>
                </div>
            </ul>
        </div>
    )
}

export default Navbar