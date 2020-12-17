import './App.css';
import Contacts from './Contacts.js';

function App() {

const c = [
  {
  name: "Alexander",
  phone: "666777888"
  },
  {
    name: "Jorge",
    phone: "654654654"
  }
]

  return (
    <div className="App">
      <h1>Contacts App</h1>
      <Contacts contacts={c}/>
    </div>
  );
}

export default App;
