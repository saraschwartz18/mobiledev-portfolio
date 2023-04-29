import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import RecipeLibraryScreen from './screens/RecipeLibraryScreen.js';
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='RecipeLibrary'>
          <Stack.Screen name="RecipeLibrary" component={RecipeLibraryScreen} options={{ headerLeft: null }} />
          <Stack.Screen name="AddRecipe" component={AddRecipeScreen} options={{ headerLeft: null }} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ headerLeft: null }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
