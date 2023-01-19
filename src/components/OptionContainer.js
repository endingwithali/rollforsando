import React, {useState} from 'react';
import './Option.css';

function generateArray(lenght){
    let initArray = []
    for (let i = 0; i <lenght;i++){
        initArray.push({id: (Math . random() + 1). toString(36).substring(2),value:""})
    }
    return initArray
}

export default function OptionContainer({parentIndex, parentState}){
    const [parentElements, setParentState] = useState(parentState)
    const initAmount = parentElements[parentIndex].initAmount
    const className = parentElements[parentIndex].id
    const [elements, setElements] = useState(generateArray(initAmount));


    function handleAdd() {
        setElements([...elements, {id: (Math . random() + 1). toString(36).substring(2),value:""}])
        parentElements[parentIndex].values = elements
        setParentState(parentElements)
    }

    function handleDelete(id){
        setElements(elements => elements.filter((element) => element.id !== id ))
        parentElements[parentIndex].values = elements
        setParentState(parentElements)
    }

    function handleChange(index, value){
        elements[index]={id:elements[index].id,value:value}
        setElements(elements)
        parentElements[parentIndex].values = elements
        setParentState(parentElements)
    }

    return(
        <div class=" h-48 container-sm bg-blue-600" >
            <div class="grid grid-flow-col overflow-x-auto"id={className+"list"}>
                {elements.map((item, index) =>
                    <div class="space-x-3" key={item.id}>
                        <input class="outline" onChange={e => handleChange(index, e.target.value)}/>
                        <button class="outline bg-gray w-6" onClick={() => handleDelete(item.id)}>-</button>
                    </div>
                )}
            </div>
            <button onClick={handleAdd}>Add New Ingredient</button>
        </div>
    );
}