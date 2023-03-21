import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeCss from '@/styles/Home.module.css'
import Link from 'next/link';
import Menu from './componentes/Menu';


export default function Home({PokemonList}) {
  console.log("PokemonList",PokemonList)
  return (
    
   <>
    <Head>
        <title>Pokemons</title>
      </Head>
      <Menu/>
    <ul className={HomeCss.columnas}>
      {PokemonList.map((pokemon, index)=>{
      return(
        <li>
          <Link href={{
            pathname:'/detalle/pokemon',
            query:{name:pokemon.name}
          }

          }
            
          >
          
            <div className={HomeCss.card}>
              <div className={HomeCss.nombrePoke}>
                <h3>Nombre:{pokemon.name}</h3>
                <div className={HomeCss.tipos}>
                 <span>
                  Tipo:
                 {
                    pokemon.types.map((tipo,index)=>{
                      return(
                        
                        <span>{tipo.type.name}</span>
                      )
                    })
                  }
                 </span>
                </div>
                <div className={HomeCss.pesos}>
                 <span> Peso:{pokemon.weight}Kg </span>
                 <br/>
                 <span> Altura:{pokemon.height}cm</span>
                 
                 
                </div>

              </div>
              <img src={pokemon.image} width="350" height="350"/>

            </div>
          
          </Link>
        </li>
      )
      })}
    </ul>
   </>
  )
}
export async function getServerSideProps() {
  const leerPokemon=(numero)=>{
    return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(response=>response.json())
    .then(data=>data)
  }
  let arrayPokemon=[]
  for (let index = 1; index <=20; index++) {
    let data = await leerPokemon(index)
    arrayPokemon.push(data)

  }
  let PokemonList= arrayPokemon.map(pokemon=>{
    return({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
      weight: pokemon.weight,
      height: pokemon.height
    })
  })
  
  return {
    props: {
      PokemonList
    },
  }
}

