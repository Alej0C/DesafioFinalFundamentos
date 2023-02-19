import React from "react";
import styles from "./Product.module.css"; // para usar CSS modules

const Product = (props) => {
    return (
        <div className={styles.product}>
            <img src={props.imageUrl} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    );
};

export default Product;
