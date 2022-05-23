import NavBar from './components/NavBar/NavBar';
import ItemBox from './Pages/itemsListContainer';
import CartWidget from './components/cartWidget';
import Cart from './Pages/Cart/Cart';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import {Route, Routes} from 'react-router-dom';
import {useCartContext} from './Context/CartContext';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  const {totalLot} = useCartContext();
  return (
            <div className="App">
                  <NavBar title = 'Sahumá'>
                      {totalLot() > 0 && <CartWidget />}
                  </NavBar>
                    <Routes>
                      <Route path='/' element={<ItemBox greetings ='¡Bienvenidos a Sahumá!' />} />
                      <Route path='/cart' element={<Cart/>} />
                      <Route path='/category/:categoryId' element={<ItemBox greetings ='¡Bienvenidos a Sahumá!' />} />
                      <Route path='/item/:id' element={<ItemDetailContainer />} />
                      <Route path='/checkout' element={<Checkout />} />
                    </Routes>
            </div>
  );
}

export default App;
 