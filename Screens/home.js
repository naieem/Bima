import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import {Container} from "native-base";
import {Row, Grid } from "react-native-easy-grid";
import BimaHeader from "./header";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  gotoBima=()=>{
      this.props.navigation.navigate("Start");
  }
  gotoLube=()=>{
    this.props.navigation.navigate("Lube");
  }
  render() {
    return (
      <Container>
        <BimaHeader back={false}></BimaHeader>
        <Grid style={{ alignItems: "center" }}>
          <Row
            style={{
              marginTop: 20,
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 200,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#11EDED",
                padding: 20
              }}
              onPress={this.gotoLube}
            >
              <Text style={{fontSize:18,fontWeight:'bold'}}>Lube Doctor</Text>
            </TouchableOpacity>
          </Row>
          <Row
            style={{
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 200,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#9DED11",
                padding: 20
              }}
              onPress={this.gotoBima}
            >
              <Text style={{fontSize:18,fontWeight:'bold'}}>Bima</Text>
            </TouchableOpacity>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  margin10: {
    marginTop: 10
  },
  container: {
    backgroundColor: "#16a085"
  }
});

export default Home;
