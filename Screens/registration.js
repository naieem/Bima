import React, { Component } from 'react';
import { Text, AlertIOS,ImageBackground} from 'react-native';
import { Container,Button, Content, CardItem,Icon, Body,Form, Item, Input, Label } from 'native-base';
import BimaHeader from "./header";
import { db } from "../config";
class registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveUser=this.saveUser.bind(this);
  }
  handleChange(field,text) {
    this.setState({[field]: text});
  }
  saveUser(){
    db.ref('/items').push(this.state);
    AlertIOS.alert('Item saved successfully');
  }

  render() {
    const resizeMode = 'cover';
    const imgUrl=require('../assets/bg.png');
    return (
      <Container>
          <BimaHeader back={true}></BimaHeader>
          <ImageBackground source={imgUrl}  style={{ flex: 1}} resizeMode={resizeMode}>
            <Content padder>
              <Form style={{flex:1}}>
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Username</Label>
                  <Input onChangeText={(text)=>this.handleChange('username',text)}
                  value={this.state.username} />
                </Item>
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Password</Label>
                  <Input  onChangeText={(text)=>this.handleChange('password',text)}
                  value={this.state.password} />
                </Item>
              </Form>
              <Button block info style={{marginTop:50,flex:1,alignContent:"center"}} onPress={this.saveUser}>
                <Text>Register</Text>
              </Button>
            </Content>          
          </ImageBackground>
      </Container>
    );
  }
}

export default registration;
