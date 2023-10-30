import './style.css';
import { useSettings } from '../../settings-context';

const CartProduct = ({ name, price }) => {
  const { currency } = useSettings();

  return (
    <div className="cart-product">
      <span>{name}</span>
      <span>{price} {currency}</span>
    </div>
  )
};

export default CartProduct;
