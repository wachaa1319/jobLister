import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export default function JobScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go to Home" />
      <Text>JobScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
