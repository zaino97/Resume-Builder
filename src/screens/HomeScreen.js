import React, { Component } from "react";
import {
  fontFamily,
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Icon, Text } from "native-base";

import bimg from "../../assets/background3.jpg";

const { width: WIDTH } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={bimg} style={styles.backgroundContainer}>
      <View>
        <Button
          iconLeft
          danger
          rounded
          style={styles.btn}
          onPress={() => navigation.navigate("Information")}
        >
          <Icon name="paper" />
          <Text>Start Building your RESUME</Text>
        </Button>
        <Text style={styles.textContainer}>RESUME BUILDER</Text>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  textContainer: {
    top: 190,
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  btn: {
    top: 160,
  },
});
