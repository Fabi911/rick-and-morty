import { RickAndMorty } from "../../types/RickAndMorty.ts";

export default function CharacterCard({
  character,
}: {
  character: RickAndMorty;
}) {
  return (
    <Card>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li>Origin: {character.origin.name}</li>
      </ul>
    </Card>
  );
}

//Styles

import styled from "styled-components";
const Card = styled.div`
  border: 0.1rem solid black;
  border-radius: 1rem;
  background-color: #606060;
  padding: 1rem;
  width: 20vw;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    border-radius: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;