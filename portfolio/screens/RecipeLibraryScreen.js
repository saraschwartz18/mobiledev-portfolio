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
      //set array for preset library
      id: 1,
      title: "Rigatoni Alla Vodka",
      foodCategory: "Italian",
      description:
        "Rigatoni noodles covered in a creamy tomato sauce with a hint of vodka for added kick and topped with fresh parmigiano reggiano.",
      instructions: [
        "Add salt to water and bring to boil.",
        "Add rigatoni to boiling water and cook until al dente.",
        "Blend crushed tomato, 1 tbsp of vodka and 1 cup heavy cream together and simmer.",
        "Mix pasta and sauce together and top with fresh parmigiano reggiano.",
      ],
    },
    {
      id: 2,
      title: "Deluxe BLT",
      foodCategory: "American",
      description: "A tasty sandwich with the classic bacon, lettuce and tomato. Smeared with house sauce and served with fries. ",
      instructions: [
        "Toast two slices of brioche bread and wash 2 slices of lettuce.",
        "Cook bacon and then roast your tomatoes.",
        "Slice potatoes, cover with seasoning of choice and airfry at 375 degrees for 15 min.",
        "Assemble sandwich with the bacon, tomato, lettuce and house sauce in between the two slices of bread.",
        "Serve with fries and enjoy."
      ],
    },
    {
      id: 3,
      title: "Chipotle Chicken Tacos",
      foodCategory: "Mexican",
      description:
        "Three handheld tacos with chicken, cilantro, pico de gallo, and queso blanco. ",
        instructions: [
          "Toast three tortillas of your choice until lightly golden.",
          "Season and cook chicken until 165 degrees fully cooked.",
          "Cut cilantro into tiny pieces, prepare pico de gallo and shred cheese if needed.",
          "Lay out each tortilla and layer chicken, cilantro, pico and queso to your liking.",
        ],
    },
    {
      id: 4,
      title: "Spicy Chicken Omusubi",
      foodCategory: "Japanese",
      description:
        "Spicy chicken mix surrounded in a sushi rice ball that's wrapped in nori.",
        instructions: [
          "Shred seasoned chicken with whatever you would like to season it with.",
          "Prepare sushi rice with sushi rice and vinegar.",
          "Get nori wrap ready.",
          "Create a triangular shape of rice and put shredded chicken in the middle.",
          "Cover with rice to patch the section and form rice into triangle again if needed.",
          "Wrap each side and underneath in nori and add sauce to enjoy."
        ],
    },
  ])

  useEffect(() => {
    // loads recipes from AsyncStorage on component
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

  // sorts recipes by a-z or z-a alphabetically
  const handleSortPress = () => {
    if (sortType === "default") {
      sortRecipes("foodCategory")
      setSortType("foodCategory")
    } else if (sortType === "foodCategory") {
      sortRecipes("default")
      setSortType("default")
    }
  }

  //takes you to add new recipe handles button press
  const handleAddRecipePress = () => {
    navigation.navigate("Add New Recipe", { addNewRecipe })
    setSortType("default")
  }

  //takes you to recipe details handles button press
  const handleViewRecipePress = (recipe) => {
    navigation.navigate("Recipe Details", { recipe })
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

  //renders content onto screen using card element 
  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
      <Card.Divider />
      <View style={styles.cardContent}>
        <Text style={styles.boldText}>Cuisine Category:</Text>
        <Text style={styles.cardText}> {item.foodCategory}</Text>
        <Card.Divider />
        <Text style={styles.boldText}>Recipe Description:</Text>{" "}
        <Text style={styles.cardText}> {item.description}</Text>
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
        <Text style={styles.title}>My Recipe Library</Text>
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
    fontWeight: "bold",
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
    fontSize: 20,
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
  boldText: {
    fontWeight: "bold",
    fontSize: 15,
  },
})

export default RecipeLibraryScreen
