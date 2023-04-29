import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Card } from 'react-native-elements';

const RecipeDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { recipe } = route.params;

  const handleGoBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardTitle}>{recipe.title}</Card.Title>
        <Card.Divider style={styles.cardDivider} />
        <Text style={styles.cardCategory}>Category: {recipe.foodCategory}</Text>
        <Card.Divider style={styles.cardDivider} />
        <Text style={styles.cardDescription}>{recipe.description}</Text>
        <Card.Divider style={styles.cardDivider} />
        <Text style={styles.cardInstructions}>{recipe.instructions}</Text>
      </Card>
      <Button title="Return to Library" onPress={handleGoBackPress} color="#92B3AB" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F3F8F2",
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#D9E5D6",
    borderWidth: 1,
    borderColor: 'lightgray',

  },
  cardTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#100007',
    fontWeight: 'bold',
  },
  cardDescription: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#100007',
  },
  cardCategory: {
    textAlign: 'center',
    color: '#100007',
    fontWeight: 'bold',
  },
  cardInstructions: {
    textAlign: 'justify',
    color: '#100007',
    lineHeight: 20,
    textAlign: 'center',
  },
  cardDivider: {
    backgroundColor: '#DCDCDC',
    marginVertical: 10,
  },
});

export default RecipeDetailScreen;
