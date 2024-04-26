
import { useState } from 'react';
import './App.scss';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';

function App() {

  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <h1>React Hooks - PostList</h1>
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide clock</button>

      <MagicBox />
    </div>
  );
}

export default App;
