import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '../constants/colors';
import TabNavigation from '../navigation/TabNavigation';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 22
      }}>
        <Pressable
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={{
            fontSize: 16,
            color: COLORS.primary,
            fontWeight: "bold",
            marginLeft: 6
          }}>Back</Text>
        </Pressable>
      </View>
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
