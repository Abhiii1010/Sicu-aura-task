import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Friends') iconName = 'people-outline';
            else if (route.name === 'Notifications') iconName = 'notifications-outline';
            else if (route.name === 'Menu') iconName = 'menu-outline';
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Friends" children={() => <PlaceholderScreen title="Friend Requests" />} />
        <Tab.Screen name="Notifications" children={() => <PlaceholderScreen title="Notifications" />} />
        <Tab.Screen name="Menu" children={() => <PlaceholderScreen title="Menu" />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
