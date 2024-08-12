import Gallery from "../component/ Gallery/Gallery.tsx";
import { RickAndMorty } from "../types/RickAndMorty.ts";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [data, setData] = useState<RickAndMorty[]>([]);
  const [characterData, setCharacterData] = useState<RickAndMorty[]>([]);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    loadData();
  }, [count]);

  function loadData() {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${count}`)
      .then((response) => {
        setData(response.data.results);
        setCharacterData(response.data.results);
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error.message);
      })
      .finally(() => {
        console.log("Data fetched!");
      });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredCharacters = data.filter((character) =>
      character.name.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    setCharacterData(filteredCharacters);
  };
  console.log(count);
  return (
    <Box>
      <Link to="/">
        <h1>Rick & Morty Gallery</h1>
      </Link>
      <Link to="/add">Add a new character</Link>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <BoxButtons>
        {count > 1 && (
          <button onClick={() => setCount(count - 1)}>prev Page</button>
        )}

        <button onClick={() => setCount(count + 1)}> next Page</button>
      </BoxButtons>
      <Gallery characterData={characterData} />
    </Box>
  );
}

//Styles

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;

const BoxButtons = styled.div`
  display: flex;
  gap: 2.5rem;
`;