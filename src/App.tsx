import "./App.css";
import Gallery from "./component/ Gallery/Gallery.tsx";
import Data from "./db/data.ts";
import { RickAndMorty } from "./types/RickAndMorty.ts";

export default function App() {
  const data: [RickAndMorty] = Data;

  return (
    <Box>
      <h1>Rick & Morty Gallery</h1>
      <input type="text" placeholder="Search..." />
      <Gallery data={data} />
    </Box>
  );
}

//Styles

import styled from "styled-components";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;