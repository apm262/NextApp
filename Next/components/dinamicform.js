import React, { useEffect, useState } from 'react';

function form() {

    const [lista, setLista] = useState([]);
    const [palabra, setPalabra] = useState('');

    function sumar_palabra(){
        setLista(ol => [...ol ,' '+ palabra]);

  
        
    }

    return (
        <>
        
           
            <form>

                <input onChange={(e)=>setPalabra(e.target.value)} type="text" id="palabra"></input>

            </form>

            <button onClick={sumar_palabra}>Enviar</button>

            <p>La frase formada es: {lista}</p>
          
        </>

    )

}

export default form;