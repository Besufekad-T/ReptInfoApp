import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SocialMediaButton = ({ onPress, buttonText }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/reptile_social_media_logo.png')} style={styles.image} />
      <Text style={styles.text}>ReptInfo Social Media</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SocialMediaButton;
