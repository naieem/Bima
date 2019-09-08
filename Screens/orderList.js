import React, { Component } from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import { Container,List, ListItem, Left,Right, Content,Icon } from 'native-base';
import { db,auth } from "../config";
import BimaHeader from "./header";
class orderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[],
        userInfo:null
    };
  }
  componentDidMount() {
    var user = auth.currentUser;
    if(user){
      if(user.emailVerified){
          this.setState({
              userInfo:user
          });
      }
    }
    var itemsRef = db.ref('/items');
    itemsRef.orderByChild('malik').equalTo(user.uid).on('value', (snapshot)=> {
      var items = [];
      snapshot.forEach((child) => {
        items.push({
          title: child.val().ownername+' '+child.val().region+''+child.val().series+''+child.val().vehicleNumber,
          id: child.key
        });
      });
      if(items.length){
        this.setState({
          items:items
        });
      }else{
        this.setState({
            items:[]
        });
      }
    });
  }
  render() {
    const resizeMode = 'cover';
    const imgUrl=require('../assets/bg.png');
    const {items}=this.state;
    return (
        <Container style={styles.container}>
        <BimaHeader back={false}></BimaHeader>
          <Content padder>
          {!items.length && <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,color:"#fff"}}>Sorry No Order Found</Text>}
          {items.length > 0 && 
            <View>
                <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,color:"#fff"}}>All Orders</Text>
                    <List>
                        {items.map((item)=>
                            <ListItem key={item.id} onPress={() => this.props.navigation.navigate('OrderDetails',{item: item.id})}>
                                <Left>
                                    <Text style={{color:"#fff",fontSize:18,fontWeight:"bold"}}>{item.title}</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        )}
                    </List>
            </View>
          }
          </Content>
    </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16a085",
  }
});
export default orderList;
