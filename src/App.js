import './App.css';
import OptionContainer from './components/OptionContainer';
import React, {useState} from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';


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
  console.log(parts)

  function handleRoll(){
    let sandwich = []
    parts.forEach((part)=>{
      console.log(part.value.length)
      console.log(part)
      sandwich.push(part.values[Math.floor((Math.random() * (part.values.length)))])
    })
    console.log(sandwich)
    console.log("rolling")
    

    /**
     * for each optioncontainer
     * get lenght of number of children elements where child == input
     * get values
     * rng a number based on those values
     * get the value mapped to the rng number
     * store value for later in array of selected valus
     */
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
      <div id={"lists"}>
            {parts.map((item, index) =>
              <OptionContainer parentIndex={index} parentState={parts}></OptionContainer>
            )}
      </div>
  
      {/* <OptionContainer initAmount={6} className="bread" state={parts[0]}/> */}
      {/* <OptionContainer initAmount={6} className="main"/>  */}
      <button onClick={() => handleRoll()}>Roll for Sandwich</button>
    </div>
  );
}

export default App;

// const [sandwich, setSandwich] = useState[{heading: 'bread', values:[]}]
// return (
//   div 
//   ((v)=>OptionContainer val=v setState={setSandwich})
// )

// state = [{
//   id: "bread",
//   selectedValue: ""
// }, {
//   id: "roughage",
//   selectedValue: ""
// }, {
//   id: "main",
//   selectedValue: ""
// }]

// in OptionContainer

// elements,setelements = usestate(state(passed prop))



// input onchange =>
// elements.get(passedprop id)[index] = {id:elements[index].id,value:value}
// setElements (elements)


// in App
// roll onclick =>














