// import logo from './logo.svg';
import './App.css';
import { NavBar } from './Component/NavBar';
import { Banner } from './Component/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    </div>
  );
}

export default App;
