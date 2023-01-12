import React, {useState} from 'react';
import OptionInput from './OptionInput';

export default function OptionContainer({initAmount, className}){
    let itemList=[];
    for (let i =0 ; i< initAmount; i++) {
        itemList.push(<OptionInput key={className + i}/>)
    }
    const [elements, setElements] = useState(itemList);

    function handleAdd() {
        setElements([...elements,<OptionInput id={className + elements.length+1}/>])
    }

    return(
        <>
         <div>
             <div id={className+"list"}>{elements}</div>
            <button onClick={handleAdd}>Add New Item</button>
         </div>
        </>
    );
}