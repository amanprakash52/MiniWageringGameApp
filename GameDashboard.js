import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Pedometer } from 'expo-sensors';

const GameDashboard = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0);

  useEffect(() => {
    subscribeToPedometer();
    return () => {
      unsubscribeFromPedometer();
    };
  }, []);

  const subscribeToPedometer = async () => {
    Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps);
    });
  };

  const unsubscribeFromPedometer = () => {
    Pedometer.removeAllListeners();
  };

  return (
    <View>
      <Text>Current Steps: {currentStepCount}</Text>
      {/* Add more game-related components and logic */}
    </View>
  );
};

export default GameDashboard;
