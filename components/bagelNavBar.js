import styles from '../styles/BagelNavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faShoppingCart} from "@fortawesome/free-solid-svg-icons";



export default function BagelNavBar() {


    return (
        <div className={styles.navContainer}>
            <div className={styles.pageNavButtonsBox}>
                <button>Our Story</button>
                <button>Menu</button>
                <button>Order</button>
            </div>
            <h1>Eastside Bagels Logo</h1>
            <div className={styles.socialNavButtonsBox}>
                <button><FontAwesomeIcon icon={faInstagram} style={{ fontSize: 25, color: 'white'}} /></button>
                <button><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 25, color: 'white'}} /></button>
                <button><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 25, color: 'white'}} /></button>
            </div>
        </div>
    )
}