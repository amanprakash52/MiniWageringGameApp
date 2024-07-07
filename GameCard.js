import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GameCard = ({ title, description, image, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 8 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  description: { fontSize: 14, color: '#888', marginTop: 5 },
});

export default GameCard;
