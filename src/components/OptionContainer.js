import React, {useState} from 'react';

function generateArray(lenght){
    let initArray = []
    for (let i = 0; i <lenght;i++){
        initArray.push({id: (Math . random() + 1). toString(36).substring(2),value:""})
    }
    return initArray
}

export default function OptionContainer({initAmount, className}){

    const [elements, setElements] = useState(generateArray(initAmount));

    function handleAdd() {
        setElements([...elements, {id: (Math . random() + 1). toString(36).substring(2),value:""}])
    }

    function handleDelete(id){
        setElements(elements => elements.filter((element) => element.id !== id ))
    }

    function handleChange(index, value){
        elements[index]={id:elements[index].id,value:value}
        setElements(elements)
    }

    return(
        <>
            <div id={className+"list"}>
                {elements.map((item, index) =>
                    <div key={item.id}>
                        <input onChange={e => handleChange(index, e.target.value)}/>
                        <button onClick={() => handleDelete(item.id)}>-</button>
                    </div>
                )}
            </div>
            <button onClick={handleAdd}>Add New Ingredient</button>
        </>
    );
}