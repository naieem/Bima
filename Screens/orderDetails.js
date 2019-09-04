import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Text, View,ImageBackground} from 'react-native'
import { Container,Content, Card, CardItem,Body} from 'native-base';
import { db } from "../config";
import BimaHeader from "./header";
class orderDetais extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item:''
    };
  }
  componentDidMount() {
    const {navigation}= this.props;
    const ItemId = navigation.getParam('item');
    var itemsRef = db.ref('/items/'+ItemId);
    itemsRef.on('value', (snapshot)=> {
        console.log(snapshot);
        this.setState({
            item:snapshot.val()
        });
    });
  }
  render() {
    const resizeMode = 'cover';
    const imgUrl=require('../assets/bg.png');
    const {item}=this.state;
    return (
        <Container>
        <BimaHeader back={true}></BimaHeader>
        <ImageBackground source={imgUrl}  style={{ flex: 1}} resizeMode={resizeMode}>
          <Content padder>
          <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,color:"#fff"}}>Order Details</Text>
            <Card>
                <CardItem header bordered>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Order By : {item.ownername}</Text>
                </CardItem>
                <CardItem>
                <Body>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Address: {item.address}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Phone: {item.Phone}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Postal: {item.Postal}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Vehicle Number: {item.vehicleNumber}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Region: {item.region}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Series: {item.series}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Chassis Number: {item.CHnumber}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Engine Number: {item.Enumber}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Vehicle Model Year: {item.ModelYr}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Insurance Start Date: {item.InFrom}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>
                    Insurance End Date: {item.InTo}
                    </Text>
                </Body>
                </CardItem>
            </Card>
          </Content>        
        </ImageBackground>
    </Container>
    );
  }
}

export default orderDetais;
