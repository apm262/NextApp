
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
      if(resourceType>0){
        fetch(`https://simpsons-quotes-api.herokuapp.com/quotes?count=${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
      }else{
        fetch(`https://simpsons-quotes-api.herokuapp.com/quotes?count=0`)
        .then(response => response.json())
        .then(json => setItems(json))
      }
    }, [resourceType]);

    const [count, setCount] = useState(10);

    function decrementCount(){      
      setCount(prevCount => {
        setResourceType(prevCount - 1);
        return prevCount -1;
      });
    
    }

    function incrementCount(){
      setCount(prevCount => {
        setResourceType(prevCount + 1);
        return prevCount + 1;
      });
    }



    return (
        <>
        
           
            <h1 className="text-6xl">Simpsons characters<a href="../../" className="a2"><button>Back</button></a></h1>
            
              <p className="how">How many chapter want do you see?</p><button className="btn text-2xl" onClick={decrementCount}>-</button>
                <span className="text-2xl mx-4">{count}</span>
                <button className="btn text-2xl" onClick={incrementCount}>+</button>
              
            <ul className="my-10">
                {items.map((item, index) => {
                    return (<li key={index} className="chapters"><div className="nombre">{JSON.stringify(item.character)}</div><div className="foto"><img src={item.image}/></div> <br></br>
                            <div className="dicho">{JSON.stringify(item.quote)}</div></li>
                    )
                })}
            </ul>
        </>

    )

}
