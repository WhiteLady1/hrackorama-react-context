import { createRoot } from 'react-dom/client';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import './style.css';
import { SettingsProvider } from './settings-context';

const App = () => {
  return (
    <SettingsProvider>
      <div className="container">
        <Header />
        <Banner />
        <Cart />
      </div>
    </SettingsProvider>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
