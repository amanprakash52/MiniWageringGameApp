import React from 'react';
import { View, Text } from 'react-native';

const GameDetail = ({ route }) => {
  const { game } = route.params;

  return (
    <View>
      <Text>{game.title}</Text>
      <Text>{game.description}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default GameDetail;
