import './App.css';
import OptionContainer from './components/OptionContainer';
import React, {useState} from 'react';


function App() {
  const [parts, setParts] = useState([{
    id: "bread",
    initAmount: 6,
    values: []
  }, {
    id: "bread",
    initAmount: 6,
    values: []
  }]);
  const [sandwichValues, setSandwichValues] = useState([])

  function handleRoll(){
    let sandwich = []
    parts.forEach((part)=>{
      if (part.values.length!=0) {
        let generateValue = part.values[Math.floor((Math.random() * (part.values.length)))].value
        if (generateValue !== "") {
          sandwich.push(generateValue)
        }
      }
    })
    setSandwichValues(sandwich)
  }

  /* main = the meat 
  rougage = 2x d12
  wildmagic = random tings

      <OptionContainer initAmount={6} className="bread"/>
      <OptionContainer initAmount={12} className="main"/> 
      <OptionContainer initAmount={6} className="cheese"/> 
      <OptionContainer initAmount={12} className="roughage"/> 
      <OptionContainer initAmount={20} className="wildmagic"/> 
      <OptionContainer initAmount={20} className="sauce"/> 


  */

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <h1 class="text-6xl font-header-font">Roll for Sandwich</h1>
      <div id={"lists"} class="space-y-4">
            {parts.map((item, index) =>
              <OptionContainer parentIndex={index} parentState={parts}></OptionContainer>
            )}
      </div>
      <button onClick={() => handleRoll()}>Roll for Sandwich</button>
      {sandwichValues.map((value) =>
          <h2>{value}</h2>
      )}
      </div>
  );
}

export default App;