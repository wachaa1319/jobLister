import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native";

export default function JobScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { job } = route.params;
  console.log(job);
  return (
    <View>
      <Text>JobScreen</Text>
      <Text>{job.title}</Text>
      <Text>{job.salary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
