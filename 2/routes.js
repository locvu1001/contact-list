import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import colors from "../utils/colors";

const Contacts = ({navigation})=>	

onPress={() => navigation.navigate("Profile")}

onPress={() => navigation.navigate("Profile",{ contact: item })}

const Profile =({ route})=>
{
const {contact} = route.params;
}
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ title: "Contacts" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
