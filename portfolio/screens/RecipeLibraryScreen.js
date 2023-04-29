import React, { useState, useEffect } from "react"
import { View, Text, Button, StyleSheet, FlatList, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Card } from "react-native-elements"
import AsyncStorage from "@react-native-async-storage/async-storage"

const RecipeLibraryScreen = () => {
  const navigation = useNavigation()
  const [sortType, setSortType] = useState("default")

  const sortRecipes = (type) => {
    let sortedRecipes = [...recipes]
    if (type === "foodCategory") {
      sortedRecipes.sort((a, b) => a.foodCategory.localeCompare(b.foodCategory))
    } else {
      sortedRecipes.sort((a, b) => a.id - b.id)
    }
    setRecipes(sortedRecipes)
  }

  const [recipes, setRecipes] = useState([
    {
        id: 1,
        title: "Rigatoni Alla Vodka",
        foodCategory: "Italian",
        description: "Rigatoni noodles covered in a creamy tomato sauce with a hint of vodka for added kick and topped with fresh parmigiano reggiano.",
        instructions: ["Add salt to water and bring to boil.", 
        "Add rigatoni to boiling water and cook until al dente.", 
        "Blend crushed tomato, 1 tbsp of vodka and 1 cup heavy cream together and simmer.",
         "Mix pasta and sauce together and top with fresh parmigiano reggiano."],
      },
    {
      id: 2,
      title: "Deluxe BLT",
      foodCategory: "American",
      description: "A tasty sandwich with the classic bacon, lettuce tomato. ",
      instructions:
        "1. Bread chicken and fry in a pan. 2. Cover with marinara sauce and cheese. 3. Bake in oven. 4. Serve with pasta.",
    },
    {
      id: 3,
      title: "Tacos",
      foodCategory: "Mexican",
      description:
        "A classic Mexican dish with meat and vegetables wrapped in a tortilla",
      instructions:
        "1. Cook the meat with vegetables. 2. Warm up the tortillas. 3. Serve with toppings.",
    },
    {
      id: 4,
      title: "Sushi",
      foodCategory: "Japanese",
      description:
        "A Japanese dish made with vinegar rice and seafood or vegetables",
      instructions:
        "1. Cook the rice and mix with vinegar. 2. Cut the fish or vegetables. 3. Roll the sushi.",
    },
  ])

  useEffect(() => {
    // Load recipes from AsyncStorage on component mount
    loadRecipes()
  }, [])

  
  const loadRecipes = async () => {
    try {
      const storedRecipes = await AsyncStorage.getItem("@recipes")
      if (storedRecipes !== null) {
        setRecipes(JSON.parse(storedRecipes))
      }
    } catch (error) {
      console.error(error)
    }
  }

  const saveRecipes = async (recipes) => {
    try {
      await AsyncStorage.setItem("@recipes", JSON.stringify(recipes))
    } catch (error) {
      console.error(error)
    }
  }

  const handleSortPress = () => {
    if (sortType === "default") {
      sortRecipes("foodCategory")
      setSortType("foodCategory")
    } else if (sortType === "foodCategory") {
      sortRecipes("default")
      setSortType("default")
    }
  }

  const handleAddRecipePress = () => {
    navigation.navigate("AddRecipe", { addNewRecipe })
    setSortType("default")
  }

  const handleViewRecipePress = (recipe) => {
    navigation.navigate("RecipeDetail", { recipe })
  }

  const addNewRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      { id: Math.random().toString(), ...newRecipe },
    ])
  }

  const deleteRecipe = async (recipeId) => {
    Alert.alert(
      "Delete Recipe",
      "Are you sure you want to delete this recipe?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const updatedRecipes = recipes.filter(
              (recipe) => recipe.id !== recipeId
            )
            setRecipes(updatedRecipes)
            await saveRecipes(updatedRecipes)
          },
        },
      ]
    )
  }

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
      <Card.Divider />
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>
          Cuisine Category: {item.foodCategory}
        </Text>
        <Card.Divider />
        <Text style={styles.cardText}>
          Recipe Description: {item.description}
        </Text>
        <Card.Divider />
        <View style={styles.buttonContainer}>
          <Button
            title="View Recipe Details"
            onPress={() => handleViewRecipePress(item)}
            buttonStyle={styles.cardButton}
            color="#92B3AB"
          />
          <Button
            title="Delete Recipe"
            onPress={() => deleteRecipe(item.id)}
            buttonStyle={styles.cardButton}
            color="#92B3AB"
          />
        </View>
      </View>
    </Card>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recipe Library</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.sortButton}>
            <Button
              title="Sort Recipe"
              onPress={handleSortPress}
              disabled={recipes.length === 0}
              color="#92B3AB"
            />
          </View>
          <View style={styles.addRecipeButton}>
            <Button
              title="Add New Recipe"
              onPress={handleAddRecipePress}
              color="#92B3AB"
            />
          </View>
        </View>
      </View>

      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F8F2",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#F3F8F2",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: "bold"
  },
  card: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#D9E5D6",
    borderWidth: 1,
    borderColor: "lightgray",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    marginVertical: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  cardText: {
    marginBottom: 10,
  },
  cardButton: {
    marginTop: 10,
  },
  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 5,
    paddingVertical: 1,
    paddingHorizontal: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  sortButton: {
    marginRight: 5,
  },
  addRecipeButton: {
    marginLeft: 5,
  },
    
})

export default RecipeLibraryScreen
