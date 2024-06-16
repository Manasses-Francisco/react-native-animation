import { StatusBar } from 'expo-status-bar';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Text, View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#38A690' style="auto" />
      <Routes/>
    </SafeAreaProvider>
  );
}
