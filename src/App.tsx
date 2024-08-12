import "./App.css";
import Gallery from "./component/ Gallery/Gallery.tsx";
import { RickAndMorty } from "./types/RickAndMorty.ts";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState<RickAndMorty[]>([]);
  const [characterData, setCharacterData] = useState<RickAndMorty[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios
      .get("https://rickandmortyapi.com/api/character")
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

  return (
    <Box>
      <h1>Rick & Morty Gallery</h1>
      <input type="text" placeholder="Search..." onChange={handleChange} />
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