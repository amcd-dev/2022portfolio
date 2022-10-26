import styles from '../styles/BagelsItemModal.module.css'
import Image from "next/image";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

export default function BagelItemModal(props) {
    const [itemQuantity, setItemQuantity] = useState(1)

    const handleItemQuantity = (incrementOrDecrement) => {
        if (incrementOrDecrement === 'increment') {
            setItemQuantity(itemQuantity => itemQuantity + 1)
        } else if (incrementOrDecrement === 'decrement' && itemQuantity >0 ) {
            setItemQuantity(itemQuantity => itemQuantity - 1)
        }
    }

    if (!props.isOpen) {
        return null
    }

    return (
        <div className={styles.modalContainer} onClick={() => {
            props.closeModal()
            setItemQuantity(1) //resets quantity of item to 1 in the event user clicks out of modal
        }}>
            <div className={styles.modalContent} onClick={event => event.stopPropagation()}>
                <Image
                    src={props.selectedItem.itemSrc}
                    alt={props.selectedItem.itemName}
                    width={360}
                    height={360}
                    layout="intrinsic"
                />
                <div className={styles.itemDetailsBox}>
                    <h2>{props.selectedItem.itemName}</h2>
                    <h3>{props.selectedItem.ingredients}</h3>
                    <h4>${props.selectedItem.itemPrice}</h4>
                    <div className={styles.addToOrderBox}>
                        <div className={styles.incrementBox}>
                            <motion.button
                                onClick={() => handleItemQuantity('decrement')}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.85 }}
                            >
                                <FontAwesomeIcon icon={faMinus} style={{ fontSize: 20, color: 'black'}} />
                            </motion.button>
                            <h3>{itemQuantity}</h3>
                            <motion.button
                                onClick={() => handleItemQuantity('increment')}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.85 }}
                            >
                                <FontAwesomeIcon icon={faPlus} style={{ fontSize: 20, color: 'black'}} />
                            </motion.button>
                        </div>
                        <motion.button
                            className={styles.orderButton}
                            whileHover={{ backgroundColor: '#785889' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                props.addToOrderFunc(props.selectedItem.id, itemQuantity)
                                setItemQuantity(1)
                                props.closeModal()
                            }}
                        >
                            <h4>Add to Order</h4>
                        </motion.button>
                    </div>
                </div>
            </div>

        </div>
    )
}
