import Image from "next/image";

export async function getStaticProps() {
  const maxPokemons = 200;
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
      <div>
        <h1>Pokedex</h1>
        <Image src="/pokeball.png" width="60" height="60" alt="pokeball"/>
      </div>
      <div>
        {
          pokemons.map((pokemon) => (
            <p key={pokemon.id}>{pokemon.name}</p>
          ))
        }
      </div>
    </>
  )
}
