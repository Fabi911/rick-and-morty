import CharacterCard from "../CharacterCard/CharacterCard.tsx";
import { RickAndMorty } from "../../types/RickAndMorty.ts";

export default function Gallery({ data }: { data: [RickAndMorty] }) {
  return (
    <GalleryBox>
      {data &&
        data.map((character: RickAndMorty) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </GalleryBox>
  );
}

//Styles

import styled from "styled-components";
const GalleryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;