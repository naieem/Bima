import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Text, View,ImageBackground} from 'react-native';
import { Container,Button, Content, Card, CardItem,Icon, Body } from 'native-base';
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
    const Item=PList[ItemId];
    const resizeMode = 'cover';
    const imgUrl=require('../assets/bg.png');
    return (
      <Container>
          <BimaHeader back={true}></BimaHeader>
          <ImageBackground source={imgUrl}  style={{ flex: 1}} resizeMode={resizeMode}>
            <Content padder>
              <Card transparent>
                <CardItem bordered>
                  <Text>{Item.title}</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      Own Damage: {Item.OD}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Text>Act Liability: {Item.AL}</Text>
                </CardItem>
                <CardItem bordered>
                  <Text>Per Passenger: {Item.PP}</Text>
                </CardItem>
                <CardItem bordered>
                  <Text>Driver Owner: {Item.DO}</Text>
                </CardItem>
              </Card>
              <Button block info style={{marginTop:50,flex:1,alignContent:"center"}}>
                <Text>Register</Text>
              </Button>
            </Content>          
          </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    margin10:{
        marginTop:10
    }
});

export default PremiumDetails;
