import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '../constants/colors';
import PetRegButton from '../components/PetRegButtons';
import TriviaButton from '../components/TriviaButton';
import Divider from '../components/Divider';
import SocialMediaButton from '../components/SocMediaButton';


export default function Home({ navigation }) {
  return (
    
    <View style={styles.container}>
      {/* <Text style={styles.text}>Home</Text> */}
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 22,
        top:31

        
      }}>
        <Pressable
          onPress={() => navigation.navigate("petreg")}
          style={styles.buttoncontainer}
          
        >
         <PetRegButton/>
         
        </Pressable>
        
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 22
        
      }}>
        <Pressable
          // onPress={() => navigation.navigate("SocMedia")}
          style={styles.buttoncontainer}

        >
        <TriviaButton/>
        </Pressable>
        
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 22
        
      }}>
        <Pressable
          onPress={() => navigation.navigate("SocMedia")}
          style={styles.buttoncontainer}
          
        >
        <SocialMediaButton/>
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
