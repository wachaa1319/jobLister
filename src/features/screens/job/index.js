import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native";

export default function JobScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go to Home" />
      <Text>JobScreen</Text>
      <Text>{route.params.id}</Text>
      <Text>{route.params.lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
