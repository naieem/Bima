import React, { Component } from 'react';
import { View, Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { db } from "../config";
class BimaHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount:0
        };
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
                    <View style={{
                        backgroundColor: 'red',
                        borderRadius: 10,
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{this.state.totalCount}</Text>
                </View>
                </Right>
            </Header>
        );
    }
}
export default withNavigation(BimaHeader);
