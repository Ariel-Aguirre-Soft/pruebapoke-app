import React from 'react'
export default function Pokemon({data}){
    return(
        <div>
            <h1>{data.name}</h1>

        </div>

    );
}
export async function getServerSideProps(context) {
    const {name} = context.query;
    console.log("name",name);
    const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data=await res.json();
      
    return(
        data

    );

    
  }
