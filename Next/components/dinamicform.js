import React, { useEffect, useRef, useState } from 'react';

function form() {

    const [lista, setLista] = useState([]);
    const [palabra, setPalabra] = useState('');
    const boton = useRef();


    function sumar_palabra(){
        setLista(ol => [...ol ,' '+ palabra]);
        boton.current.focus();
        
        
    }

    return (
        <>
            <center>
            <a href="../../" className="a2"><button>Back</button></a> <br></br><br></br>

            <h1 className="hello2">Here you can enter a phrase by entering words</h1><br></br><br></br>
           
            <form>

                <input ref={boton} onChange={(e)=>setPalabra(e.target.value)} type="text" id="palabra"></input> <br></br>

            </form>
            <br></br>
            <button onClick={sumar_palabra} className="enviar">Enviar</button>

            <p className="frase">La frase formada es: <br></br> <div className="resultado">{lista}</div></p>

            </center>
          
        </>

    )

}

export default form;