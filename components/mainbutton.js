import styles from '../styles/MainButton.module.css'

export default function MainButton (props) {

    return (
        <div>
            <button className={styles.buttonBox}>{props.title}</button>
        </div>
    )
}