import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useNavigation from "../../../../node_modules/@react-navigation/core/lib/module/useNavigation";

export default function HomeScreen() {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View>
      <Button
        onPress={() =>
          navigation.navigate("Job", {
            id: 1,
            name: "Job 1",
            lastName: "Last Name",
          })
        }
        title="Go to Job"
      />
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
