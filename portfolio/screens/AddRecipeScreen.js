import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const AddRecipeScreen = ({ route }) => {
  const navigation = useNavigation()

  // Declare state variables for the recipe title, description and instructions and category
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [instructions, setInstructions] = useState("")
  const [foodCategory, setCategory] = useState("")

  // Function to handle adding a new recipe
  const handleAddRecipePress = () => {
    // Create a new recipe object with the provided data
    const newRecipe = {
      title: title,
      description: description,
      instructions: instructions,
      foodCategory: foodCategory
    };
    
    // Pass the new recipe back to the previous screen via the route parameter
    route.params.addNewRecipe(newRecipe)
    // Navigate back to the library screen
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new recipe:</Text>
      <TextInput
        style={styles.input}
        placeholder="Recipe Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Recipe Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
        <TextInput
        style={styles.input}
        placeholder="Food Category"
        value={foodCategory}
        onChangeText={(text) => setCategory(text)}
      />
      <TextInput
        style={[styles.input, styles.instructionsInput]}
        placeholder="Recipes Instructions"
        multiline={true}
        numberOfLines={10}
        value={instructions}
        onChangeText={(text) => setInstructions(text)}
      />
    

      <View style={styles.buttonContainer}>
        <Button
          title="Add New Recipe"
          onPress={handleAddRecipePress}
          color="#92B3AB"
        />
        <Button
          title="Return to Library"
          onPress={() => navigation.goBack()}
          color="#92B3AB"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F8F2",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#100007",
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    marginVertical: 10,
    width: "100%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    backgroundColor: "#D9E5D6",
  },

  instructionsInput: {
    height: 200,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '100%',
  },
})

export default AddRecipeScreen
