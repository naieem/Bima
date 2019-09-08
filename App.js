import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Screens/home";
import NewOrder from "./Screens/newOrder";
import PDetails from "./Screens/premiumDetails";
import OrderList from "./Screens/orderList";
import OrderDetails from "./Screens/orderDetails";
import Registration from "./Screens/registration";
import Login from "./Screens/login";
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
  List:OrderList,
  Order: NewOrder
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = "home";
        } if (routeName === 'List') {
          iconName = "list";
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge; 
        }else if (routeName === 'Order') {
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
    navigationOptions: {
      gesturesEnabled: false,
    }
  });

const AppNavigator = createStackNavigator({
    Login:{
      name:"Login",
      screen:Login
    },
    Registration:{
      name:"Registration",
      screen:Registration
    },
    Start:{
      name:"TabNavigator",
      screen:TabNavigator
    },
    PDetails: {
      name:"PDetails",
      screen:PDetails
    },
    OrderDetails:{
      name:"OrderDetails",
      screen:OrderDetails
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    }
  });



export default createAppContainer(AppNavigator);