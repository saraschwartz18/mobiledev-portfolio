Sara Schwartz / DIG 4639C / Final Portfolio 

Option 2

Components:

'App.Js'
- the file that sets up my navigation system for my react native recipe app
- importing necessary modules for gesture recognition, UI theming and then importing my three screens 'RecipeLibraryScreen', 'AddRecipeScreen' and 'RecipeDetailScreen'

// const Stack = createStackNavigator() - manages my screen stack, which has the initialRouteName 'RecipeLibrary' so that the homepage of my app is the recipe Library

// export default function App() {} - contains my <NavigationContainer> which is the component responsible for navigating between my three screens, each <Stack.Screen> contains the name of the screen, the name of the component which is the same as their respective file and an option to make the header arrow non - visible

'RecipeLibraryScreen.js'
- the file that contains the code handling my recipe library, stored in cards and gives the user access to creating a new recipe, viewing a recipe in the library or sorting their recipes alphabetically 
- imports all the necessary react native elemtns and useState and useEffect

// React { useState } - declares the recipe state 

// React { useEffect } - the useEffect hook calls the loadRecipes function when the 'RecipeLibraryScreen' component loads on the screen, the loadRecipes function reads the recipes from AsyncStorage and saveRecipes saves it to AsyncStorage

// the library contains an array of PRESET recipe objects that are the default recipes loaded in the library, there is a state variable named recipes which stores the recipe array and another state variable that is named sortType which tracks the sorting of recipes

// const [recipes, setRecipes] = useState([{}]) - this array contains recipes stores in json orginization, there is an 'id', 'title', 'foodCategory', 'description' and 'instructions' for each recipe

// handleSortPress - sorts my recipes by the first letter in the 'foodCategory', this is alphabetically a-z or z-a depending on when it is clicked or default

// handleAddRecipePress - this function navigates to the 'AddRecipeScreen' when the 'Add New Recipe' button is pressed

// addNewRecipe - function adds a new recipe to the recipes array and sets the new array as the state of the recipes

// deleteRecipe - this function removes recipe from the recipes array and saves the new array to AsyncStorage

// renderItem - this is how my <Card> components are displayed and it displays the recipe title, category and a view button that takes you to the specific 'RecipeDetailScreen' when clicked 

// styleSheet - this has all my styling for my cards, buttons and aesthetic of the color choices

'RecipeDetailScreen.js'
- this is the detail screen that will display the recipe's details in card form, it also lets you see the instructions for the recipe that is not visible on the 'RecipeLibraryScreen', you are able to view each recipe individually 
- imports all necessary react elements and components like navigation and card

// const RecipeDetailScreen = () => {} - this is the main component 

// navigation = useNavigation() - this navigation object is used to fo back to the previous screen 'RecipeLibraryScreen' when the 'Return to Library' button component is pressed 

// route = useRoute() = this route object is used to retrieve the recipe object that is passed as a parameter when the component is navigated to

// render() - returns the <View> component which contains <Card> and displays the details of the recipe, the specific recipe object is acessed through the 'route.params' object to where its properties 'title', 'description' 'foodCategory' and 'instructions' are used to display the info on the card

// map - map is used to create the ordered list of instructions for the recipe

'AddRecipeScreen.js'
- this is the screen with text input boxes that allows users to input a new recipe using different recipe properties, you are then able to add a new recipe or return to the library screen
- imports necessary react native navigation

// React { useState } - declares the state for the recipes properties using the 'useState' hook

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [instructions, setInstructions] = useState("")
  const [foodCategory, setCategory] = useState("")

// const AddRecipeScreen = ({route}) => {} - is the main component for adding a new recipe to the library

// const handleAddRecipePress = () => {} - this function handles what is happening after a user presses the add recipe button, it splits the recipe instructions into an array by commas so that it can be mapped as an ordered list of instructions depending on the order the user typed it in and separated each step by a comma
     
     it then created the new recipe object that includes the provided data and passes the recipe back to the 'RecipeLibraryScreen' by way of the 'addNewRecipe' method that gets passed as a parameter through the 'route' object

// goBack - uses the 'useNavigation' hook to go to the previous 'RecipeLibraryScreen' when the button is pressed

// render - there are three <text> input fields for the user to add a recipe title, description, food category and instructions, there are also two buttons that are 'Add Recipe' and 'Return to Library'



