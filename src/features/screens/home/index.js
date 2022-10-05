import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import useNavigation from "../../../../node_modules/@react-navigation/core/lib/module/useNavigation";
import axios from "axios";
import { UserContext } from "../../contexts/user";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const [jobs, setJobs] = React.useState([]);
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get("https://jobtion.software/jobs").then((response) => {
      console.log(response.data, "typejob");
      setJobs(response.data);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={jobs}
        renderItem={({ item, index }) => {
          console.log(item, index);
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Job", { job: item });
              }}
            >
              <FlatList
                horizontal
                data={item.images}
                renderItem={({ item }) => {
                  return (
                    <>
                      <LinearGradient
                        // Background Linear Gradient
                        colors={["rgba(0,0,0,0.8)", "transparent"]}
                        style={styles.background}
                      />
                      <Image
                        source={{
                          uri: item,
                        }}
                        style={{ width: 100, height: 200 }}
                      />
                    </>
                  );
                }}
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    zIndex: 20,
    width: "100%",
    height: "50%",
  },
});
