import React from 'react';
import { StyleSheet } from 'react-native';
import ViewSite from './src/MyInlineWeb'

export default function App() {
  return (
    <ViewSite />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
