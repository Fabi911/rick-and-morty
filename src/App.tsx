import "./App.css";
import Gallery from "./component/ Gallery/Gallery.tsx";
import Data from "./db/data.ts";
import { RickAndMorty } from "./types/RickAndMorty.ts";
import styled from "styled-components";
import { useState } from "react";

export default function App() {
  const data: RickAndMorty[] = Data;
  const [characterData, setCharacterData] = useState<RickAndMorty[]>(data);

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