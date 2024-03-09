import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NewPostScreen from './NewPostScreen'; // Import the NewPostScreen component
import NotificationsScreen from './NotificationsScreen'; // Import the NotificationsScreen component
import Profile from './Profile'; // Import the Profile screen component

const Tab = createBottomTabNavigator();

const SocialMedia = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the tab header for all screens
      }}
    >
      <Tab.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={24} color="green" />
          ),
          tabBarLabel: 'New Post',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen} // Use the NotificationsScreen component as the screen component
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={24} color="green" />
          ),
          tabBarLabel: 'Notifications',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile} // Use the Profile component as the screen component
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color="green" />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default SocialMedia;
