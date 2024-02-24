import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactScreen = () => {
  // These functions would open the phone app, email app, or a web browser respectively
  const makeCall = () => Linking.openURL('tel:+1-123-456-7890');
  const sendEmail = () => Linking.openURL('mailto:info@wildlifeauthorities.com');
  const openWebsite = () => Linking.openURL('http://www.wildlifeauthorities.com');

  return (
    <View style={styles.container}>
      <Image
        style={styles.mapImage}
        source={require('../assets/rpetreg.png')} // Replace with your local asset or remote URL
      />
      <Text style={styles.sectionTitle}>Contact Information</Text>
      <View style={styles.contactInfo}>
        <Icon name="phone" size={24} />
        <Text style={styles.contactText}>+1-123-456-7890</Text>
      </View>
      <TouchableOpacity onPress={sendEmail} style={styles.contactInfo}>
        <Icon name="email" size={24} />
        <Text style={styles.contactText}>info@wildlifeauthorities.com</Text>
      </TouchableOpacity>
      <View style={styles.contactInfo}>
        <Icon name="location-on" size={24} />
        <Text style={styles.contactText}>123 Main St, City, State, Country</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {/* Handle send message */}}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openWebsite}>
          <Text style={styles.buttonText}>Visit Website</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom navigation bar placeholder */}
      <View style={styles.bottomNav}>
        {/* Icons would be wrapped in Touchable components to handle navigation */}
        <Icon name="home" size={24} />
        <Icon name="contacts" size={24} />
        <Icon name="info" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    backgroundColor: '#ddd', // Placeholder color
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#000', // Button color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default ContactScreen;