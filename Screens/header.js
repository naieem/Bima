import React, { Component } from 'react';
import { View, Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { db,auth } from "../config";
class BimaHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount:0,
            userInfo:{}
        };
        this.singoutUser=this.singoutUser.bind(this);
    }
    componentDidMount() {
        var itemsRef = db.ref('/items');
        itemsRef.on('value', (snapshot)=> {
          var items=snapshot.val();
          if(items){
            var itemCount =Object.values(snapshot.val());
            this.setState({
              totalCount:itemCount.length
            });
          }else{
            this.setState({
                totalCount:0
              });
          }
        });
        var user = auth.currentUser;
        if(user){
          if(user.emailVerified){
              this.setState({
                  userInfo:user
              });
          }
        }
    }
    singoutUser(){
        auth.signOut().then(()=>{
            this.props.navigation.navigate("Login");
        }).catch((err)=>{
            Toast.show({
                text: err.message,
                buttonText: 'Okay'
              });
        });
    }
    render() {
        return (
            <Header>
                <Left>
                {this.props.back && 
                    <Button hasText transparent>
                        <Text onPress={()=>{this.props.navigation.goBack()}}>Back</Text>
                    </Button>
                }
                </Left>
                <Body>
                    <Title>Bima</Title>
                </Body>
                <Right>
                    {/* <View style={{
                        backgroundColor: 'red',
                        borderRadius: 10,
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{this.state.userInfo.displayName}</Text>
                    </View> */}
                    <Button hasText transparent>
                        <Text onPress={this.singoutUser}>Logout</Text>
                    </Button>
                </Right>
            </Header>
        );
    }
}
export default withNavigation(BimaHeader);
