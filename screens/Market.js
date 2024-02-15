import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '../constants/colors';
import TabNavigation from '../navigation/TabNavigation';

export default function Home({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Markets</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24, 
    fontWeight: 'bold', 
  },
});
