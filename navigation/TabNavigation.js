import React from 'react';
import { Text, Platform, View } from 'react-native';
import { Home, Camera, Profile, Search, Market } from "../screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Entypo name="home" size={24} color={focused ? "green" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>HOME</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen 
          name="Market" 
          component={Market} 
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Feather name="gift" size={24} color={focused ? "green" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>MARKET</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen 
          name="Camera" 
          component={Camera} 
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "green",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30
                  }}
                >
                <Feather name="camera" size={24} color="black" />
                
                
                </View>
                
                
              )
            }
          }}
        />
        
        <Tab.Screen
          name="Profile" 
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  
                  <FontAwesome name="search" size={24} color={focused ? "green" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>SEARCH</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={Profile} 
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="account" size={28} color={focused ? "green" : "#111"} />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>PROFILE</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation;
