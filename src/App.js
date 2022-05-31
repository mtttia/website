import logo from './logo.svg';
import './App.css';
import AppBar from './components/appbar';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Home />
    </div>
  );
}

export default App;
