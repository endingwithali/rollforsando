import logo from './logo.svg';
import './App.css';
import OptionContainer from './components/OptionContainer';

function App() {


  function handleRoll(){
    console.log("rolling")
  }
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <OptionContainer initAmount={6} className="bread"/>
      <OptionContainer initAmount={10} className="lettuce"/>

      <button onClick={() => handleRoll()}>Roll for Sandwich</button>
    </div>
  );
}

export default App;
