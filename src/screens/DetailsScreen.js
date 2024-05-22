// src/screens/DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default DetailsScreen;