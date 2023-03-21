import React from 'react'
import DetalleCss from '@/styles/detalle.module.css'
import Link from 'next/link';

export default function Pokemon({pokemon}){
    return(
        <>
        
           
            
        <div className={DetalleCss.card}>
            
            <h1>{pokemon.name}</h1>
            <img className={DetalleCss.pokeimg} src={pokemon.sprites.other.dream_world.front_default} width="500px" height={500}/>
            <span>
                <img className={DetalleCss.pokeimg} src='https://pngimg.com/d/pokeball_PNG9.png' width="450" height={450}/>
            </span>
            <br/>
           
            <span>
                  <strong>Tipo:</strong>
                 {
                    pokemon.types.map((tipo,index)=>{
                      return(
                        
                        <span>{tipo.type.name}</span>
                      )
                    })
                  }
                  
            </span>
            <br/>
                 <span> <strong>Peso:</strong>{pokemon.weight}Kg </span>
                 <br/>
                 <span><strong>Altura:</strong> {pokemon.height}cm</span>
                 <br/>
                 
            <span>
            <strong>Habilidades:</strong>
                {pokemon.abilities.map((abilidades,index)=>{
                      return(
                        
                        <span>{abilidades.ability.name}|</span>
                      )
            })}</span>
            <br/>
            <span>
                  <strong> Movimientos:</strong>
                 {
                    pokemon.moves.map((tipo,index)=>{
                      return(
                        
                        <span>{index}.{tipo.move.name}|</span>
                      )
                    })
                  }
                 </span>
                 <br/>
                 <br/>
                 <Link href="/">
                    
                 <button class="red-button">Volver</button>
                    
                 </Link>
                 
        </div>
</>
    );
}
export async function getServerSideProps(context) {
    const {name} = context.query;
    console.log("name",name);
    const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
    const pokemon=await res.json();

      
    return {
    props: {
        pokemon
    },
    }

    
  }
