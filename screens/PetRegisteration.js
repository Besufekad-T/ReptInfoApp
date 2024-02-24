import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ReptileRegistrationScreen = () => {
  const [reptileType, setReptileType] = useState('');
  const [speciesName, setSpeciesName] = useState('');
  const [age, setAge] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = () => {
    
    console.log('Reptile Type:', reptileType);
    console.log('Species Name:', speciesName);
    console.log('Age:', age);
    setRegistered(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/petreg.png')} style={styles.image} />
      </View>
      <Text style={styles.heading}>Reptile Pet Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Reptile Type"
        value={reptileType}
        onChangeText={setReptileType}
      />
      <TextInput
        style={styles.input}
        placeholder="Species Name"
        value={speciesName}
        onChangeText={setSpeciesName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      {registered && ( 
        <View style={styles.savedValuesContainer}>
          <Text>Reptile Type: {reptileType}</Text>
          <Text>Species Name: {speciesName}</Text>
          <Text>Age: {age}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  savedValuesContainer: {
    marginTop: 20,
  },
});

export default ReptileRegistrationScreen;
