import React, { Component } from "react";
import {Container} from "native-base";
class TabHome extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.navigate("Bima");
  }
  render() {
    const resizeMode = "cover";
    const imgUrl = require("../assets/bg.png");
    return (
      <Container>
      </Container>
    );
  }
}

export default TabHome;
