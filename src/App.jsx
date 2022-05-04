import NavBar from './components/NavBar/NavBar';
// import ItemBox from './components/itemsListContainer';
import CartWidget from './components/cartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar title = 'Sahumá'> 
           <CartWidget />
      </NavBar>
      <header className="App-header bg-secondary">
        {/* {<ItemBox greetings ='¡Bienvenidos a Sahumá!' />} */}
        <ItemDetailContainer />
      </header>
      
    </div>
  );
}

export default App;
