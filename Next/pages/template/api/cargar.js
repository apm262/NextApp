import React, { useEffect, useState } from 'react';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getServerSidePops(){
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {
  const { results = [] } = data;
  {results.map(result =>{

    const { id,name,image } = result;

    
     <section>

      <ul>
        <li key={id}>
          <h3>{ name }</h3>
        </li>
      </ul>
    
    </section> 
    

  })}


}