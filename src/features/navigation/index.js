import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import HomeScreen from "../screens/home";
import { createStackNavigator } from "@react-navigation/stack";
import JobScreen from "../screens/job/index";

export default function Navigation() {
  return <MyTabs />;
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MyStack} />
      <Tab.Screen name="User" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Job" component={JobScreen} />
    </Stack.Navigator>
  );
}
