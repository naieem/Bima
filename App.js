import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Screens/home";
import Registration from "./Screens/registration";
import PDetails from "./Screens/premiumDetails";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Home></Home>
//       <Registration></Registration>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
console.disableYellowBox = true;

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Registration: Registration
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = "home";
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Registration') {
          iconName = "add";
        }

        // You can return any component that you like here!
        return (
          <View style={{ width: 24, height: 24, margin: 5 }}>
            <Icon name={iconName} />
          </View>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });

const AppNavigator = createStackNavigator({
  Start: TabNavigator,
  PDetails: PDetails
},
  {
    headerMode: 'none',
  });



export default createAppContainer(AppNavigator);