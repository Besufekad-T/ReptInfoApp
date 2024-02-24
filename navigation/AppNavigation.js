import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login,signup,Welcome, Home } from '../screens';
import TabNavigation from './TabNavigation';
import ReptileRegistrationScreen from '../screens/PetRegisteration';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Menu"
          component={TabNavigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="petreg"
          component={ReptileRegistrationScreen}
          options={{
            headerShown: false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}