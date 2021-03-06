import logo from './logo.svg';
import './App.css';
import LayoutPractice from './components/LayoutPractice/LayoutPractice';
import Home from './components/TryingGlasses/Home';
import Game from './components/GameApp/Game';

function App() {
  return (
    <div className="App">
      {/* <LayoutPractice /> */}
      {/* <Home/> */}
      <Game />
    </div>
  );
}

export default App;
