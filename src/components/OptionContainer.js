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
        // const listCopy = [...elements];
        // listCopy.splice(key, 1);
        // setElements(listCopy);
        // this.state.people.filter((_, i) => i !== index
        console.log(elements)
        console.log(id)
        setElements(elements => elements.filter((element) => element.id != id ))
    }

    function handleChange(index, value){
        // console.log(val)
        console.log(elements)
        elements[index]={id:elements[index].id,value:value}
        setElements(elements)
    }

    return(
        <>
            <div id={className+"list"}>
                {elements.map((item, index) =>
                    <div key={item.id}>
                        {/* {console.log(item)} */}
                        <input onChange={e => handleChange(index, e.target.value)}/>
                        <button onClick={() => handleDelete(item.id)}>-</button>
                    </div>
                )}
            </div>
            <button onClick={handleAdd}>Add New Ingredient</button>
        </>
    );
}