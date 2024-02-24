import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '../constants/colors';
import HomeButton from '../components/HomeButtons';
import TriviaButton from '../components/TriviaButton';
import Divider from '../components/Divider';


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
          onPress={() => navigation.navigate("petreg")}
          style={styles.buttoncontainer}
          
        >
         <HomeButton/>
         <Divider/>
         <TriviaButton/>
         
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
  buttoncontainer:{
   top:-200,
   


  }
});
