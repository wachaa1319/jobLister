import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native";
import axios from "axios";

export default function JobScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [applications, setApplications] = React.useState([]);

  const { job } = route.params;
  useEffect(() => {
    axios
      .get(`https://jobtion.software/jobs/${job._id}/applications`)
      .then((response) => {
        console.log(response.data, "lo");
        setApplications(response.data);
      });
  }, []);

  console.log(job);
  return (
    <View>
      <Text>JobScreen</Text>
      <Text>{job.title}</Text>
      <Text>{job.salary}</Text>
      <FlatList
        data={job.images}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.pic} />;
        }}
      />
      <FlatList
        data={applications}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.candidate.fullName}</Text>
              <Text>{item.salary}</Text>
              <Text>{item.status}</Text>
            </View>
          );
          // return <Image source={{ uri: item }} style={styles.pic} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    width: 100,
    height: 100,
  },
});
