import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import {
  Col,
  Container,
  Grid,
  Header,
  Content,
  Button,
  Text,
} from "native-base";

const { width: WIDTH } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Button bordered style={styles.btn}>
          <Text>Light</Text>
        </Button>
        <Button bordered>
          <Text>Primary</Text>
        </Button>
        <Button bordered success>
          <Text>Success</Text>
        </Button>
        <Button bordered info>
          <Text>Info</Text>
        </Button>
        <Button bordered warning>
          <Text>Warning</Text>
        </Button>
        <Button bordered danger>
          <Text>Danger</Text>
        </Button>
        <Button bordered dark>
          <Text>Dark</Text>
        </Button>
      </Content>
      <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
        <Grid style={{ alignItems: "center" }}>
          <Col>
            <Button block bordered info>
              <Text>login</Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 150,
    height: 40,
    //borderRadius: 50,
    //justifyContent: "center",
    //marginTop: 20,
  },
  alig: {
    alignItems: "center",
    flex: 1,
  },
});

export default HomeScreen;
