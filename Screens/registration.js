import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { Container, Content, Form, Item, Input } from 'native-base';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: ""
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  async onRegisterPress() {
    const { email, password, name } = this.state;
    console.log(email);
    console.log(name);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }

  render() {
    return (
        <Container style={styles.container}>
            <Content>
                <KeyboardAvoidingView behavior="position" enabled keyboardVerticalOffset="10">
                    <View style={styles.logoContainer}>
                    {/* <Image style={styles.logo} source={require("./banana.png")} /> */}
                    <Text style={styles.subtext}>Sign Up:</Text>
                    </View>
                    <View style={{marginTop:100,marginBottom:50}}>
                        <Input
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                        <Input
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            style={styles.input}
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            keyboardType="email-address"
                            placeholder="Email"
                        />
                        <Input
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                        <Input
                            value={this.state.password}
                            onChangeText={password_confirmation => this.setState({ password_confirmation })}
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                        />
                    </View>
                    <TouchableHighlight onPress={this.onRegisterPress.bind(this)} style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate("Login")} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#16a085",
    padding: 20,
    paddingTop: 100
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  input: {
    height: 40,
    width: 320,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingLeft:15,
    paddingRight:15
  },
  button: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  }
});