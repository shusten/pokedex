import Image from "next/image";
import styles from '../styles/Home.module.css';
import Card from "@/components/Card";

export async function getStaticProps() {
  const maxPokemons = 300;
  const API = 'https://pokeapi.co/api/v2/pokemon/';

  const res   = await fetch(`${API}?limit=${maxPokemons}`);
  const data  = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Pokedex</h1>
        <Image 
          src="/pokeball.png" 
          width="60" 
          height="60" 
         alt="pokeball"
        />
      </div>
      <div className={styles.pokemon_container}>
        {
          pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </div>
    </>
  )
}
