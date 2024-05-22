// src/components/Article.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Article = ({ title, summary, image }) => (
  <View style={styles.articleContainer}>
    <Image source={{ uri: image }} style={styles.articleImage} />
    <Text style={styles.articleTitle}>{title}</Text>
    <Text style={styles.articleSummary}>{summary}</Text>
  </View>
);

const styles = StyleSheet.create({
  articleContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  articleSummary: {
    fontSize: 14,
    color: '#666',
  },
});

export default Article;