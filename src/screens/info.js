import React, { Component, useState } from "react";
import {
  View,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Text,
} from "native-base";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const info = ({ navigation }) => {
  const [name, setName] = useState("");
  const [profe, setProfe] = useState("");
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [uni, setUni] = useState("");
  const [skill, setSkill] = useState("");
  const [skilli, setSkilli] = useState("");
  const [skillii, setSkillii] = useState("");
  const [skilliii, setSkilliii] = useState("");
  const [mail, setMail] = useState("");
  const [num, setNum] = useState("");
  const [proj, setProj] = useState("");
  const [proj1, setProj1] = useState("");
  const [proj2, setProj2] = useState("");
  const [proj3, setProj3] = useState("");
  const [ach, setAch] = useState("");
  const [ach1, setAch1] = useState("");
  const [ach2, setAch2] = useState("");
  const [ach3, setAch3] = useState("");
  const [aoi, setAoi] = useState("");
  const [aoi1, setAoi1] = useState("");
  const [aoi2, setAoi2] = useState("");
  const [aoi3, setAoi3] = useState("");
  const [his, setHis] = useState("");
  const [his1, setHis1] = useState("");
  const [his2, setHis2] = useState("");
  const [his3, setHis3] = useState("");

  return (
    <ScrollView>
      <View>
        <Text style={styles.tex}>Enter Your Information</Text>
        <Form>
          <Item stackedLabel>
            <Label>
              <Text>Enter First and last Name</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={name}
              autoCorrect={false}
              onChangeText={(newValue) => setName(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Enter profession</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={profe}
              autoCorrect={false}
              onChangeText={(newValue) => setProfe(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Enter School</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={school}
              autoCorrect={false}
              onChangeText={(newValue) => setSchool(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Enter your college</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={college}
              autoCorrect={false}
              onChangeText={(newValue) => setCollege(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Enter your University</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={uni}
              autoCorrect={false}
              onChangeText={(newValue) => setUni(newValue)}
            />
          </Item>
          <Text style={styles.tex}>Enter Skills</Text>
          <Item stackedLabel last>
            <Label>
              <Text>Skill 1</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={skill}
              autoCorrect={false}
              onChangeText={(newValue) => setSkill(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Skill 2</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={skilli}
              autoCorrect={false}
              onChangeText={(newValue) => setSkilli(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Skill 3</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={skillii}
              autoCorrect={false}
              onChangeText={(newValue) => setSkillii(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Skill 4</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={skilliii}
              autoCorrect={false}
              onChangeText={(newValue) => setSkilliii(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Enter Email</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={mail}
              autoCorrect={false}
              onChangeText={(newValue) => setMail(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Enter number</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={num}
              autoCorrect={false}
              onChangeText={(newValue) => setNum(newValue)}
            />
          </Item>
          <Text style={styles.tex}>Enter Projects</Text>
          <Item stackedLabel last>
            <Label>
              <Text>Project 1</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={proj}
              autoCorrect={false}
              onChangeText={(newValue) => setProj(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Project 2</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={proj1}
              autoCorrect={false}
              onChangeText={(newValue) => setProj1(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Project 3</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={proj2}
              autoCorrect={false}
              onChangeText={(newValue) => setProj2(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Project 4</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={proj3}
              autoCorrect={false}
              onChangeText={(newValue) => setProj3(newValue)}
            />
          </Item>
          <Text style={styles.tex}>Enter Achievements</Text>

          <Item stackedLabel last>
            <Label>
              <Text>Achievement 1:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={ach}
              autoCorrect={false}
              onChangeText={(newValue) => setAch(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Achievement 2:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={ach1}
              autoCorrect={false}
              onChangeText={(newValue) => setAch1(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Achievement 3:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={ach2}
              autoCorrect={false}
              onChangeText={(newValue) => setAch2(newValue)}
            />
          </Item>
          <Item stackedLabel last>
            <Label>
              <Text>Achievement 4:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={ach3}
              autoCorrect={false}
              onChangeText={(newValue) => setAch3(newValue)}
            />
          </Item>
          <Text style={styles.tex}>Enter your Areas of interest</Text>

          <Item stackedLabel last>
            <Label>
              <Text>Area of interest 1:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={aoi}
              autoCorrect={false}
              onChangeText={(newValue) => setAoi(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Area of interest 2:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={aoi1}
              autoCorrect={false}
              onChangeText={(newValue) => setAoi1(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Area of interest 3:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={aoi2}
              autoCorrect={false}
              onChangeText={(newValue) => setAoi2(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Area of interest 4:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={aoi3}
              autoCorrect={false}
              onChangeText={(newValue) => setAoi3(newValue)}
            />
          </Item>
          <Text style={styles.tex}>Enter your Work experience</Text>

          <Item stackedLabel last>
            <Label>
              <Text>Company 1:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={his}
              autoCorrect={false}
              onChangeText={(newValue) => setHis(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Company 2:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={his1}
              autoCorrect={false}
              onChangeText={(newValue) => setHis1(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Company 3:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={his2}
              autoCorrect={false}
              onChangeText={(newValue) => setHis2(newValue)}
            />
          </Item>

          <Item stackedLabel last>
            <Label>
              <Text>Company 4:</Text>
            </Label>
            <Input
              autoCapitalize="words"
              value={his3}
              autoCorrect={false}
              onChangeText={(newValue) => setHis3(newValue)}
            />
          </Item>

          <Button
            iconLeft
            danger
            rounded
            style={styles.btn}
            onPress={() =>
              navigation.navigate("tem1", {
                name,
                profe,
                school,
                college,
                uni,
                skill,
                skilli,
                skillii,
                skilliii,
                mail,
                num,
                proj,
                proj1,
                proj2,
                proj3,
                ach,
                ach1,
                ach2,
                ach3,
                aoi,
                aoi1,
                aoi2,
                aoi3,
                his,
                his1,
                his2,
                his3,
              })
            }
          >
            <Icon name="paper" />
            <Text>Generate Resume!</Text>
          </Button>
        </Form>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {},
  tex: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default info;
