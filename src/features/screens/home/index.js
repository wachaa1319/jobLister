import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import useNavigation from "../../../../node_modules/@react-navigation/core/lib/module/useNavigation";
import axios from "axios";

export default function HomeScreen() {
  const [jobs, setJobs] = React.useState([]);
  const navigation = useNavigation();
  console.log(navigation);

  useEffect(() => {
    axios.get("https://jobtion.software/jobs").then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Job", { job: item });
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
