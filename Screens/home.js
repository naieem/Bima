import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Text, View,} from 'react-native'
import { Container,List, ListItem, Thumbnail, Left,Right, Content, Card, CardItem,Icon, Body } from 'native-base';
import BimaHeader from "./header";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        motorCycle:[
            {
                title:"Upto 150 CC",
                value:150
            },
            {
                title:"150 CC to Upto 250 CC",
                value:250
            },
            {
                title:"250 CC to Upto 350 CC",
                value:350
            }
        ],
        privateVehicle:[
            {
                title:"Upto 1300 CC / .5 Ton",
                value:1300
            },
            {
                title:"1301 CC Upto 1800 CC / 1.5 Ton",
                value:1800
            },
            {
                title:"1801 CC Upto 3000 CC / 3 Ton",
                value:3000
            },
            {
                title:"Over 3000 CC / 3 Ton",
                value:3001
            }
        ]
    };
  }

  render() {
    return (
      <Container>
          <BimaHeader back={false}></BimaHeader>
          <Content>
            <List>
                <ListItem itemDivider>
                    <Text style={{fontWeight:"bold"}}>Motor Cycle / Scooter Premium Rate</Text>
                </ListItem> 
                {this.state.motorCycle.map((motor)=>
                    <ListItem key={motor.value} onPress={() => this.props.navigation.navigate('PDetails',{item: motor.value})}>
                        <Left>
                            <Text>{motor.title}</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                )}
                <ListItem itemDivider>
                    <Text style={{fontWeight:"bold"}}>Private Vehicles Premium Rate</Text>
                </ListItem> 
                {this.state.privateVehicle.map((motor)=>
                    <ListItem key={motor.value}>
                        <Left>
                            <Text>{motor.title}</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                )}
            </List>
            <View style={{paddingLeft:10,marginBottom:10}}>
                <TouchableOpacity style={styles.margin10}>
                    <Text style={{fontWeight:"bold"}}>N.B : Exclusion of special periis</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.margin10}>
                    <Text style={{fontWeight:"bold"}}>Earchquake (Fire and shock damage) & Flood, Typhoon, Hurricane, storm, Tempest, Cyclone, Hailstorm,Frost</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.margin10}>
                    <Text>If any insured wishes to bear the liablities for the loss caused by the above noted periis, then the insured shall be allowed
                    a rebate of (.25% + .25%)=.50% of F.I.V (full insured value of the vehicle)</Text>
                </TouchableOpacity>
            </View>
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
  

export default Home;
