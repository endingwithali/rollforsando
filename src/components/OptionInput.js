import React from 'react';

export default function OptionInput(){

    function getVal(){
        return this.input.getVal()
    }
    return (
        <>
            <input type="text"></input>
        </>
    );
}


