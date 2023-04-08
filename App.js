import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import Navigation from './src/screens/Navigation/Navigation';
import {View,Text} from 'react-native'

function App() {
  return (
   <AuthProvider>
      <Navigation/>
   </AuthProvider>
  )
}

export default App;
