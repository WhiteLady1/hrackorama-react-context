import './style.css';

const CartProduct = ({ name, price }) => {
  return (
    <div className="cart-product">
      <span>{name}</span>
      <span>{price} kč</span>
    </div>
  )
};

export default CartProduct;
