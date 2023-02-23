import './App.css';
import Navbar from '../src/Component/Navbar'
import Body from './Component/Body';
import TempComp from './Component/temp/TempComp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body />
      <TempComp/>
    </div>
  );
}

export default App;
