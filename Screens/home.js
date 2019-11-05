import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import {Container} from "native-base";
import {Row, Grid } from "react-native-easy-grid";
import BimaHeader from "./header";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  gotoBima=()=>{
      this.props.navigation.navigate("Bima");
  }

  render() {
    const resizeMode = "cover";
    const imgUrl = require("../assets/bg.png");
    return (
      <Container>
        <BimaHeader back={false}></BimaHeader>
        <Grid style={{ alignItems: "center" }}>
          <Row
            style={{
              marginTop: 20,
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 200,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#11EDED",
                padding: 20
              }}
            >
              <Text style={{fontSize:18,fontWeight:'bold'}}>Lube Doctor</Text>
            </TouchableOpacity>
          </Row>
          <Row
            style={{
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 200,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#9DED11",
                padding: 20
              }}
              onPress={this.gotoBima}
            >
              <Text style={{fontSize:18,fontWeight:'bold'}}>Bima</Text>
            </TouchableOpacity>
          </Row>
        </Grid>
      </Container>
      // <Lube navigation={this.props.navigation} motorCycle={this.state.motorCycle} privateVehicle={this.state.privateVehicle}></Lube>
      //   <Container style={styles.container}>
      //         <BimaHeader back={false}></BimaHeader>
      //         <Content padder>
      //             <List>
      //                 <ListItem itemDivider>
      //                     <Text style={{fontWeight:"bold"}}>Motor Cycle / Scooter Premium Rate</Text>
      //                 </ListItem>
      //                 {this.state.motorCycle.map((motor)=>
      //                     <ListItem key={motor.value} onPress={() => this.props.navigation.navigate('PDetails',{item: motor.value})}>
      //                         <Left>
      //                             <Text style={{color:"#fff",fontSize:16}}>{motor.title}</Text>
      //                         </Left>
      //                         <Right>
      //                             <Icon name="arrow-forward" />
      //                         </Right>
      //                     </ListItem>
      //                 )}
      //                 <ListItem itemDivider>
      //                     <Text style={{fontWeight:"bold"}}>Private Vehicles Premium Rate</Text>
      //                 </ListItem>
      //                 {this.state.privateVehicle.map((motor)=>
      //                     <ListItem key={motor.value} onPress={() => this.props.navigation.navigate('PDetails',{item: motor.value})}>
      //                         <Left>
      //                             <Text style={{color:"#fff",fontSize:16}}>{motor.title}</Text>
      //                         </Left>
      //                         <Right>
      //                             <Icon name="arrow-forward" />
      //                         </Right>
      //                     </ListItem>
      //                 )}
      //             </List>
      //             <View style={{paddingLeft:10,marginBottom:10}}>
      //                 <TouchableOpacity style={styles.margin10}>
      //                     <Text style={{fontWeight:"bold",color:"#fff",fontSize:16}}>N.B : Exclusion of special periis</Text>
      //                 </TouchableOpacity>
      //                 <TouchableOpacity style={styles.margin10}>
      //                     <Text style={{fontWeight:"bold",color:"#fff",fontSize:16}}>Earchquake (Fire and shock damage) & Flood, Typhoon, Hurricane, storm, Tempest, Cyclone, Hailstorm,Frost</Text>
      //                 </TouchableOpacity>
      //                 <TouchableOpacity style={styles.margin10}>
      //                     <Text style={{color:"#fff",fontSize:16}}>If any insured wishes to bear the liablities for the loss caused by the above noted periis, then the insured shall be allowed
      //                     a rebate of (.25% + .25%)=.50% of F.I.V (full insured value of the vehicle)</Text>
      //                 </TouchableOpacity>
      //             </View>
      //         </Content>
      //   </Container>
    );
  }
}

const styles = StyleSheet.create({
  margin10: {
    marginTop: 10
  },
  container: {
    backgroundColor: "#16a085"
  }
});

export default Home;
