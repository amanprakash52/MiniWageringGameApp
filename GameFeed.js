import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import GameCard from '../components/GameCard';

const GameFeed = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchGames();
  }, [page]);

  const fetchGames = async () => {
    // Simulated API call to fetch games
    const newGames = [
      { id: 1, title: 'Game 1', description: 'Description for Game 1', image: 'https://example.com/game1.jpg' },
      { id: 2, title: 'Game 2', description: 'Description for Game 2', image: 'https://example.com/game2.jpg' },
      { id: 3, title: 'Game 3', description: 'Description for Game 3', image: 'https://example.com/game3.jpg' },
      // Add more games as needed
    ];
    setGames([...games, ...newGames]);
  };

  const renderGame = ({ item }) => (
    <GameCard
      title={item.title}
      description={item.description}
      image={item.image}
      onPress={() => navigation.navigate('GameDetail', { game: item })}
    />
  );

  return (
    <FlatList
      data={games}
      renderItem={renderGame}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={() => setPage(page + 1)}
      onEndReachedThreshold={0.5}
    />
  );
};

export default GameFeed;
