import styles from "../Navbar/Navbar.module.css"
import logo from "../../img/site/Logo.png"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className={styles.Navbar}>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <div>
                <Link to="/">Home</Link>
                </div>
                <div>
                <Link to="/course">Course</Link>
                </div>
                <div>
                <Link to="/contact">Contact</Link>
                </div>
                <div>
                <Link to="/login" className={styles.Button}>LOGIN</Link>
                </div>
            </ul>
        </div>
    )
}

export default Navbar