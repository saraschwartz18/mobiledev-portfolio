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
          <Stack.Screen name="Recipe Library" component={RecipeLibraryScreen} options={{ headerLeft: null }} />
          <Stack.Screen name="Add New Recipe" component={AddRecipeScreen} options={{ headerLeft: null }} />
          <Stack.Screen name="Recipe Details" component={RecipeDetailScreen} options={{ headerLeft: null }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
