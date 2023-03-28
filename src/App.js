import './App.css';
import OptionContainer from './components/OptionContainer';
import React, {useState,useRef} from 'react';
import Modal from "react-modal"


const modalStyle = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',

  },
};

function App() {
  const [toastState, setToastState] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const checkbox = useRef();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [parts, setParts] = useState([{
    id: "bread",
    title:"Bread",
    initAmount: 6,
    values: []
  }, {
    id: "bread",
    title:"Bread",
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
    
    <div className="App" class="bg-hero bg-contain flex flex-col "> 
      <button class="stone-delete-button m-2" onClick={openModal}><div class="stone-content">?</div></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyle}

      >
        <div>
        <h1 class="font-header-font">About this project</h1>
        <p>This project was inspired by </p>working on creating a digital version of roll for sandwich (https://www.polygon.com/23169570/roll-for-sandwich-interview) using react - https://github.com/endingwithali/rollforsando
        
        <button class="stone-add-button" onClick={closeModal}>
          <div class="stone-content">
            Close
          </div>
          </button>
          </div>
      </Modal>
      {/* <header className="App-header">
      </header> */}
      {/* <div class=""container md:max-w-[268px] sm:max-w-[140px] lg:max-w-[424px] xl:max-w-[780px] 2xl:max-w-[936px] "> */}
     <div class="p-10 flex flex-col md:flex-row ">
      <div class=" md:ml-8 container flex-none sm:w-full  sm:md-0 md:w-3/5 " >

          <h1 class="text-5xl font-header-font sm:text-center md:text-left text-white mb-5">Roll for Sandwich</h1>
            <div id={"lists"} class="space-y-10">
                  {parts.map((item, index) =>
                    <OptionContainer parentIndex={index} parentState={parts}></OptionContainer>
                  )}
            </div>

          <div>
            <input type="checkbox" class="m-5" id="scales" name="scales" onChange={()=> handleToast()} ref={checkbox}/>
            <label for="scales" class=" font-header-font text-white">Include roll for Toast</label>
        </div>

          <button class="stone-add-button center" onClick={() => handleRoll()}>
              <div class="stone-content"><h1 class="font-header-font">Roll for Sandwich</h1></div></button>
      </div>
      <div class="container flex justify-center center text-white items-start pt-6 w-1/2">
        <div class="items-start sticky h-100">
          <h2 class="font-header-font center">Roll to make your sandwich</h2>
           {sandwichValues.map((value) =>
              <h2 class="center">{value}</h2>
            )}
        </div>
        </div>
      </div>
      </div>
  );
}

export default App;