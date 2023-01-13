import React, {useState} from 'react';
import OptionInput from './OptionInput';

export default function OptionContainer({initAmount, className}){

    const [elements, setElements] = useState([]);

    function handleAdd() {
        setElements([...elements,<OptionInput id={className + elements.length+1}/>])
    }

    function handleDelete(key){
        // setElements(elements => {
        //     return elements.filter(input => input.key !== key)
        // })
        setElements(state => state.splice(key, 1));

    }

    return(
        <>
            <div id={className+"list"}>
                {elements.map((item, index) =>
                    <div key={className + index}>
                            <OptionInput>{item}</OptionInput>
                            <button onClick={() => handleDelete(className+index)}>-</button>
                    </div>
                )}
            </div>
            <button onClick={handleAdd}>Add New Ingredient</button>
        </>
    );
}