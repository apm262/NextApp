import React, { useEffect, useState } from 'react';

export default function useEffectPage() {

    const [resourceType, setResourceType] = useState('10');
    const [items, setItems] = useState([]);

    // UseEffect executes function every change of array arguments:
    // useEffect(function, array_arguments (optional, can be empty array))
    // If no second argument is passed, only execute once
    // Excecutes return content when component willUnmount or 
    // before argument change.
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=40`)
            .then(response => response.json())
            .then(json => {
                if(json.results && json.results.length > 0){
                    setItems(json.results)
                }else{
                    console.log(json);
                }
            })
    }, [resourceType]);

    

    return (
        <>
        
           
            <h1 className="text-6xl">Pokemon characters <a href="../../" className="a2"><button>Back</button></a></h1>        
              
            <ul className="my-10">
                {items.map((item, index) => {
                    return (<li key={index} className="chapters"><div className="nombre">{JSON.stringify(item.name)}</div>
                            <div className="dicho">For more information: {JSON.stringify(item.url)}</div></li>
                    )
                })}
            </ul>
        </>

    )

}