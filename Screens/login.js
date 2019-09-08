import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,
  Alert
} from "react-native";
import { Container, Content, Toast, Item, Input } from 'native-base';
import { auth } from "../config";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userInfo:{}
    };
    this.onRegisterPress=this.onRegisterPress.bind(this);
    console.log("hello world");
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  componentWillMount(){
    var user = auth.currentUser;
    console.log(user);
    if (user) {
      if(user.emailVerified){
        this.props.navigation.navigate("Start");
      }
    }
  }

  async onRegisterPress() {
    const { email, password } = this.state;
    // await AsyncStorage.setItem("email", email);
    // await AsyncStorage.setItem("name", name);
    // await AsyncStorage.setItem("password", password);
    auth.signInWithEmailAndPassword(email, password).then(()=>{
      var user = auth.currentUser;
      if (user) {
        console.log(user);
        if(!user.emailVerified){
          // Alert.alert("Sorry user is not activated");
          Toast.show({
            text: 'Sorry user is not activated',
            buttonText: 'Okay'
          });
          auth.signOut().then(()=>{
            console.log("Signout succesfull");
          }).catch((err)=>{
            console.log(err);
          });
        }else{
          this.props.navigation.navigate("Start");
        }
      }
    }).catch((error)=> {
      if(error){
        Alert.alert(error.message);
      }
    });
    // this.props.navigation.navigate("Start");
  }

  render() {
    return (
        <Container style={styles.container}>
            <Content>
                    <KeyboardAvoidingView behavior="position" enabled keyboardVerticalOffset="10">
                            <View style={styles.logoContainer}>
                            {/* <Image style={styles.logo} source={require("./banana.png")} /> */}
                            <Text style={styles.subtext}>Login</Text>
                            </View>
                            <View style={{marginTop:200,marginBottom:50}}>
                                <Input 
                                    value={this.state.name}
                                    onChangeText={email => this.setState({ email })}
                                    placeholder="Username"
                                    keyboardType="email-address"
                                    placeholderTextColor="rgba(255,255,255,0.7)"
                                    style={styles.input}
                                    />
                                <Input
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    placeholderTextColor="rgba(255,255,255,0.7)"
                                    style={styles.input}
                                    />
                            </View>
                            <TouchableHighlight style={styles.button} onPress={this.onRegisterPress}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={()=>this.props.navigation.push("Registration")} style={styles.button}>
                                <Text style={styles.buttonText}>Register</Text>
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
    paddingLeft:15
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