import BagelNavBar from "../components/bagelNavBar";
import BagelsCart from "../components/bagels_cart";
import BagelItemModal from "../components/bagels_itemModal";
import styles from '../styles/BagelsOrder.module.css'
import Image from "next/image";
import graffitiWall from '../public/grafittibanner.jpg'
import {useState} from "react";

export default function BagelsOrder() {
    const exampleInventory = [
        {
            id: 1,
            itemName: 'Plain Jane',
            itemPrice: 12.00,
            ingredients: 'Cream cheese on a plain bagel',
            itemSrc: '/vegbagel.png',
            mostPopular: false,
            soldOut: false,
            extras: []
        },
        {
            id: 2,
            itemName: 'New Yorker',
            itemPrice: 12.00,
            ingredients: 'Buffalo Mozzarella Cheese, Napoli, Pepperoni & Fresh Basil.',
            itemSrc: '/vegbagel.png',
            mostPopular: false,
            soldOut: false,
            extras: []
        },
        {
            id: 3,
            itemName: 'Salmon & Dill',
            itemPrice: 12.00,
            ingredients: 'Dill & Caper Cream Cheese , Homemade Salmon Gravlax , Sliced Tomato, Red Onion & Homemade Pickle.',
            itemSrc: '/vegbagel.png',
            mostPopular: true,
            soldOut: false,
            extras: []
        },
    ]

    const [itemModalOpen, setItemModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState()

    const [currentOrder, setCurrentOrder] = useState([])
    const [inventory, setInventory] = useState(exampleInventory)
    console.log('>>> order state: ', currentOrder)
    // console.log('>>> inventory state: ', inventory)

    const handleItemSelect = selectedItemId => {
        /**
         * Takes the id of the user selected item from the menu, matches it to an item object in the inventory array,
         * and sets that as the selected item state for use by other components
         */
        setItemModalOpen(true)
        setSelectedItem(inventory.find(({ id }) => id === selectedItemId ))
    }

    const handleAddToOrder = (selectedItemId, quantity) => {
        /**
         * Takes the id of the user selected item from the menu, matches it to an item object in the inventory array,
         * then adds it to an order array. If more than one item is selected it will add it that many times
         */
        for (let i = 0; i < quantity; i++) {
            const itemToOrder = inventory.find(({ id }) => id === selectedItemId)
            setCurrentOrder(current => [...current, itemToOrder])
        }

    }

    return (
        <div>
            {/*<BagelNavBar />*/}
            <div className={styles.pageBox}>
                <div className={styles.sideImg}>
                </div>
                <BagelItemModal
                    isOpen={itemModalOpen}
                    closeModal={() => setItemModalOpen(false)}
                    addToOrderFunc={(selectedItemId, quantity) => handleAddToOrder(selectedItemId, quantity)}
                    selectedItem={selectedItem}
                />
                <div className={styles.mainSelectionBox}>
                    <h2>Bagels</h2>
                    <div className={styles.itemDisplayBox}>
                        {
                            inventory ? inventory.map((item, i) => {
                                return (
                                    <button
                                        className={styles.individualItemBox}
                                        key={item.id + i}
                                        onClick={() => handleItemSelect(item.id)}
                                    >
                                        <Image
                                            src={item.itemSrc}
                                            alt={'vegetarian bagel'}
                                            width={120}
                                            height={120}
                                            layout="intrinsic"
                                        />
                                        <div className={styles.itemDescriptors}>
                                            <p>{item.id}</p>
                                            <p>{item.itemName}</p>
                                            <p>{item.ingredients}</p>
                                            <p>{item.itemPrice}</p>
                                        </div>
                                    </button>
                                )

                            }) : <p>No items in inventory</p>
                        }
                    </div>
                    <h2>Drinks</h2>
                    <div className={styles.itemDisplayBox}>

                    </div>
                </div>
                <div className={styles.orderCartBox}>
                    <BagelsCart
                        currentOrder={currentOrder}
                    />
                </div>
            </div>
        </div>
    )
}