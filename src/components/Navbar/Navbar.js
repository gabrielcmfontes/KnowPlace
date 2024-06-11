import styles from "../Navbar/Navbar.module.css"

function Navbar(){
    return(
        <div className={styles.Navbar}>
            <div>
                <h2>LOGO</h2>
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