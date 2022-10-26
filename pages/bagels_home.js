import BagelNavBar from "../components/bagelNavBar";
import styles from '../styles/BagelsHome.module.css'
import Image from "next/image";

import bagelHero from '../public/bagels3.jpg'

export default function BagelsHome() {


    return (
        <div>
            <BagelNavBar />
            <div className={styles.backgroundImage}>
                <div className={styles.orderBox}>
                    <h2>Order Now</h2>
                    <div className={styles.orderButtonsBox}>
                        <button className={styles.orderButton}>Individual</button>
                        <button className={styles.orderButton}>Catering</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
