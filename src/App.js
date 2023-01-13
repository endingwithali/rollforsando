import logo from './logo.svg';
import './App.css';
import OptionContainer from './components/OptionContainer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <OptionContainer initAmount={6} className="bread"/>
    </div>
  );
}

export default App;
