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
  },
  {
    id: "main",
    title:"Main",
    initAmount: 12,
    values: []
  },{
    id: "cheese",
    title:"Cheese",
    initAmount: 6,
    values: []
  },{
    id: "roughage",
    title:"Roughage",
    initAmount: 12,
    values: []
  }, {
    id: "wildmagic",
    title:"Wild Magic",
    initAmount: 20,
    values: []
  },{
    id: "sauces",
    title:"Sauces",
    initAmount: 20,
    values: []
  }
]);
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
    window.scrollTo(0, 0)
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
{
    id: "bread",
    title:"Bread",
    initAmount: 6,
    values: []
  },
  {
    id: "main",
    title:"Main",
    initAmount: 12,
    values: []
  },{
    id: "cheese",
    title:"Cheese",
    initAmount: 6,
    values: []
  },{
    id: "roughage",
    title:"Roughage",
    initAmount: 12,
    values: []
  }, {
    id: "wildmagic",
    title:"Wild Magic",
    initAmount: 20,
    values: []
  },{
    id: "sauces",
    title:"Sauces",
    initAmount: 20,
    values: []
  }

  */

  return (
    
    <div className="App" class="bg-hero bg-contain bg-repeat-y flex flex-col "> 
      <button class="stone-delete-button m-2" onClick={openModal}><div class="stone-content">?</div></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyle}

      >
        <div>
        <h1 class="font-header-font">About this project</h1>
        <p>This project was inspired by  <a target="_blank" class="text-sky-600" rel="noopener noreferrer"
 href="https://www.polygon.com/23169570/roll-for-sandwich-interview">Jake Pauwels' "Roll for Sandwich"</a> videos.</p> 
        <br/>
        <h2>How it works</h2>
        <p>Fill each text box relative to the following categories: breads (ie rye, sourdough, wheat), mains (ie tofu, turkey meat, roast beef deli slices), cheese (ie vegan cheddar, swiss), roughage (ie leafy greens, pickles, onion), wild magic (ie potato chips, scroop of ice cream, banana slices), and sauce (ie hot sauce, peanut butter). Check if you want to include rolling for a chance to toast your bread. Hit "Roll for Sandwich", and the other side will spit out a randomly generated sandwich for you to build! </p>
          <br/>
        <h2>Why so many options?</h2>
        
        <p>The original number of options directly reflects the same number of options per food category used in the Jake Pauwels' videos. You can press the "-" button next to the text boxes to remove unused options. In addition, you can add more text field options by pressing the "Add New Ingredient" button.</p>
        <br/>
        <p>Source <a target="_blank" rel="noopener noreferrer" class="text-sky-600"
 href="https://github.com/endingwithali/rollforsando">@endingwithali's GitHub</a>.</p>
        
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
    
          <h1 class="text-5xl font-header-font text-center text-white mb-5">Roll for Sandwich</h1>
          <div class="optioncontainer p-8 container relative">
                <div class="bg-input bg-contain z-0 bg-repeat-y pt-3 pb-3 mt-[-25px] mb-[-25px] bg-center">
                
              <div id={"lists"} class="space-y-1 pl-5 overflow-x-scroll pr-5">
                {parts.map((item, index) =>
                  <OptionContainer parentIndex={index} parentState={parts}></OptionContainer>
                )}
            </div>
            </div>

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
          <br/>
           {sandwichValues.map((value) =>
              <h2 class="font-header-font center">{value}</h2>
            )}
        </div>
        </div>
      </div>
      </div>
  );
}

export default App;