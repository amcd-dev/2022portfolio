import styles from '../styles/MainButton.module.css'
import { motion } from "framer-motion"
export default function MainButton (props) {

    return (
        <div>
            <motion.button
                whileHover={{scale: 1.1}}
                className={styles.buttonBox}
                onClick={props.onClick}
            >
                {props.title}
            </motion.button>
        </div>
    )
}