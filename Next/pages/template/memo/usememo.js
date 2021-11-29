import React, { useEffect, useRef, useState, useMemo } from 'react';

function form() {

    const [a,setA]=useState(0);
    const [b,setB]=useState(0);

    const pow=(a)=>{
    return Math.pow(a,2);
    }

    var val= useMemo(()=>{
        return pow(a);  // calling pow function using useMemo hook
    },[a]); // only will be called once a will changed (for "a" we can maintain state)


    const memoizedValue = useMemo(() => Math.round(a));

    return (
        <>
            <center>
                <a href="../../" className="a2"><button>Back</button></a> <br></br><br></br>
                <h1 className="hello2">UseMemo example </h1><br></br><br></br>
                <h3>Put a number and its square will be calculated</h3><br></br>
                <form>
                    Number A:<input type="text" onChange={(e)=>setA(e.target.value)}/><br></br><br></br>

                    The value rounded
                    Number B:<input type="text" value={memoizedValue}/><br></br><br></br>

                    Result: {val}
                    
    
                </form>
            </center>
          
        </>

    )
}

export default form;