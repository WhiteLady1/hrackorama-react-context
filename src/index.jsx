import { createRoot } from 'react-dom/client';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Cart />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
