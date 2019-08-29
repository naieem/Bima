import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Text, View,ImageBackground} from 'react-native'
import { Container,List, ListItem, Thumbnail, Left,Right, Content, Card, CardItem,Icon, Body } from 'native-base';
import BimaHeader from "./header";
import PList from "./premiumList";
class PremiumDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  componentDidMount() {
    
  }

  render() {
    const {navigation}= this.props;
    const ItemId = navigation.getParam('item');
    return (
      <Container>
          <BimaHeader back={true}></BimaHeader>
          <Content>
            <ImageBackground source={require('../assets/bg.jpg')} style={{ minHeight: 700}}>
                <Text>Inside</Text>
            </ImageBackground>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    margin10:{
        marginTop:10
    }
  })
  

export default PremiumDetails;
