import React from 'react';
import './Product .css';

const Product = (props) => {
  // console.log(props.product);
  const { name, img, seller, price, ratings } = props.product;
  //   const { handleAddToCart } = props;

  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>Seller: {seller}</p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
