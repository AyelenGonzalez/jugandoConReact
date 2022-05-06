import NavBar from './components/NavBar/NavBar';
import ItemBox from './Pages/itemsListContainer';
import CartWidget from './components/cartWidget';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar title = 'Sahumá'> 
           <CartWidget />
      </NavBar>
        <Routes>
          <Route path='/' element={<ItemBox greetings ='¡Bienvenidos a Sahumá!' />} />
          <Route path='/category/:categoryId' element={<ItemBox greetings ='¡Bienvenidos a Sahumá!' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
        
        
    </div>
  );
}

export default App;
 