import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={10}>
      {loading &&
        skeltons.map((game) => (
          <GameCardContainer key={game}>
            <GameCardSkleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
