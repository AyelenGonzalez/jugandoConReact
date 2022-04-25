import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemBox from './components/itemsListContainer';
import CartWidget from './components/cartWidget';
function App() {
  return (
    <div className="App">
      <NavBar title = 'Sahumá'> 
           <CartWidget />
      </NavBar>
      <header className="App-header bg-secondary">
        <ItemBox greetings ='¡Bienvenidos a Sahumá!'/>
      </header>
      
    </div>
  );
}

export default App;
