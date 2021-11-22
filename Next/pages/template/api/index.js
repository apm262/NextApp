//import React, { useEffect, useState } from 'react';

//const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

//export async function getServerSidePops(){
  //const res = await fetch(defaultEndpoint);
  //const data = await res.json();

  //return {
    //props: {
      //data
    //}
  //}
//}

//export default function Home({ data }){
  //console.log('data', data);
//}


//import React, { useEffect, useState } from 'react';

// default function useEffectPage() {

    //const [resourceType, setResourceType] = useState('posts');
    //const [items, setItems] = useState([]);

    // UseEffect executes function every change of array arguments:
    // useEffect(function, array_arguments (optional, can be empty array))
    // If no second argument is passed, only execute once
    // Excecutes return content when component willUnmount or 
    // before argument change.
    //useEffect(() => {
    //    fetch(`https://rickandmortyapi.com/api/character`)
    //        .then(response => response.json())
    //        .then(json => setItems(json))
    //}, [resourceType]);

    //return (
      //  <>
           
    //      <h1 className="text-9xl">{resourceType}</h1>
   //       <ul className="my-10">
   //           {items.map((item, index) => {
   //               return <li key={index} className="my-10 bg-gray-400">{JSON.stringify(item)}</li>
   //          })}
    //      </ul>
    //    </>

    //)

//}

//import React, { useEffect, useState } from 'react';

//export default function useEffectPage() {

    //const [resourceType, setResourceType] = useState('1');
    //const [items, setItems] = useState([]);

    // UseEffect executes function every change of array arguments:
    // useEffect(function, array_arguments (optional, can be empty array))
    // If no second argument is passed, only execute once
    // Excecutes return content when component willUnmount or 
    // before argument change.
    //useEffect(() => {
     //   fetch(`https://rickandmortyapi.com/api/character/${resourceType}`)
     //       .then(response => response.json())
     //       .then(json => setItems(json))
    //}, [resourceType]);

    //return (
        //<>
  
          //  <h1 className="text-9xl"></h1>
           // <ul className="my-10">
           //     {items.map((item, index) => {
            //        return <li key={index} className="my-10 bg-gray-400">{JSON.stringify(item)}</li>
          //      })}
          //  </ul>
      //  </>

    //)

//}

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://www.episodate.com/api/most-popular?page=1')
      .then(res => {return res.json();})
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,    })
      });
  }
  render() {

  const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div >
         <ul>
           {items.map( item => 
             <li key={item.id}>{item.name}</li>
           )}
         </ul>
      </div>
      )
    }
  }
}
export default App