import React from "react";
import { Text, StyleSheet, View, Button, ImageBackground } from "react-native";
import tem1 from "../../assets/tem1.jpg";

const temp1 = (props) => {
  return (
    <ImageBackground source={tem1} style={styles.backgroundContainer}>
      <View>
        <Text style={styles.name}> {props.navigation.getParam("name")}</Text>
        <Text style={styles.profession}>
          {props.navigation.getParam("profe")}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Text style={styles.label}>Education</Text>
          <Text style={styles.cont}>
            -{props.navigation.getParam("school")}
          </Text>
          <Text style={styles.cont}>
            -{props.navigation.getParam("college")}
          </Text>
          <Text style={styles.cont}>-{props.navigation.getParam("uni")}</Text>
          <Text> </Text>
          <View>
            <Text style={styles.label}>Work Experience</Text>
            <Text style={styles.cont}>{props.navigation.getParam("his")}</Text>
            <Text style={styles.cont}>{props.navigation.getParam("his1")}</Text>
            <Text style={styles.cont}>{props.navigation.getParam("his2")}</Text>
            <Text style={styles.cont}>{props.navigation.getParam("his3")}</Text>
          </View>
          <Text> </Text>
          <View>
            <Text style={styles.label}>Skills</Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("skill")}
            </Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("skilli")}
            </Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("skilli")}
            </Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("skilli")}
            </Text>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.label}>Contact</Text>
            <Text style={styles.cont}>-{props.navigation.getParam("num")}</Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("mail")}
            </Text>
          </View>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.label}>Projects</Text>
          <Text style={styles.cont}>-{props.navigation.getParam("proj")}</Text>
          <Text style={styles.cont}>-{props.navigation.getParam("proj1")}</Text>
          <Text style={styles.cont}>-{props.navigation.getParam("proj2")}</Text>
          <Text style={styles.cont}>-{props.navigation.getParam("proj3")}</Text>
          <Text> </Text>
          <View>
            <Text style={styles.label}>AREAS OF INTEREST</Text>
            <Text style={styles.cont}>-{props.navigation.getParam("aoi")}</Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("aoi1")}
            </Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("aoi2")}
            </Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("aoi3")}
            </Text>
          </View>
          <Text> </Text>
          <View>
            <Text style={styles.label}>ACHIEVEMENTS</Text>
            <Text style={styles.cont}>-{props.navigation.getParam("ach")}</Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("ach1")}
            </Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("ach2")}
            </Text>
            <Text style={styles.cont}>
              -{props.navigation.getParam("ach3")}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  cont: {
    fontSize: 12,
    opacity: 0.7,
  },
  name: {
    textAlign: "center",
    fontSize: 40,
    marginTop: 70,
  },
  profession: {
    textAlign: "center",
    fontSize: 30,
    color: "#828181",
    opacity: 0.5,
  },
  contact: {
    paddingLeft: 10,
    marginTop: 30,
    fontWeight: "bold",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    top: 30,
    left: 15,
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
});

export default temp1;
