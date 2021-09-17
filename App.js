import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import colors from './config/colors';
import ChatsScreen from './routes/MainScreen/ChatsScreen';
import MainScreen from './routes/MainScreen/MainScreen';
import {SQLite} from 'react-native-sqlite-storage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen/>
      <ChatsScreen/>
    </SafeAreaView>
  );
}

console.log('my name is react');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android'?StatusBar.currentHeight:0,
  },
});
