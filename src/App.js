import './App.css';
import OptionContainer from './components/OptionContainer';
import React, {useState,useRef} from 'react';


function App() {
  const [toastState, setToastState] = useState(false)
  const checkbox = useRef();

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


  function handleToast() {
    setToastState(checkbox.current.checked)

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
      <div class="container md:max-w-[268px] sm:max-w-[140px] lg:max-w-[524px] xl:max-w-[780px] 2xl:max-w-[936px]">
        <div id={"lists"} class="space-y-4">
              {parts.map((item, index) =>
                <OptionContainer parentIndex={index} parentState={parts}></OptionContainer>
              )}
        </div>
      </div>

      <div>
        <input type="checkbox" id="scales" name="scales" onChange={()=> handleToast()} ref={checkbox}/>
        <label for="scales">Include roll for Toast</label>
    </div>

      <button onClick={() => handleRoll()}>Roll for Sandwich</button>
      {sandwichValues.map((value) =>
          <h2>{value}</h2>
      )}
      </div>
  );
}

export default App;