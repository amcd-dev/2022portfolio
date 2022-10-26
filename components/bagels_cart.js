import styles from '../styles/BagelsCart.module.css'

export default function BagelsCart(props) {

    let orderTotal = props.currentOrder.reduce(
        (previousValue, currentValue) => previousValue + currentValue.itemPrice,
        0
    )

    return (
        <div className={styles.cartMainBox}>
            <h2>Order Details</h2>
            {
                props.currentOrder ? props.currentOrder.map((item, i) => {
                    return (
                        <div key={new Date().getTime() + i}>
                            <p>{item.itemName}</p>
                            <p>${item.itemPrice}</p>
                        </div>
                    )
                }) : <p>No items selected</p>
            }
            <p>Discount Form placeholder</p>
            <div className={styles.cartTotalBox}>
                <p>${orderTotal}</p>
            </div>
        </div>
    )
}