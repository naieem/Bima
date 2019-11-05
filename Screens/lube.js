import React from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import {
  Container,
  List,
  ListItem,
  Left,
  Right,
  Content,
  Icon
} from "native-base";
import BimaHeader from "./header";
export default function Lube(props) {
  const {motorCycle,privateVehicle,navigation}=props;
  return (
    <Container style={styles.container}>
      <BimaHeader back={false}></BimaHeader>
      <Content padder>
        <List>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>
              Motor Cycle / Scooter Premium Rate
            </Text>
          </ListItem>
          {motorCycle.map(motor => (
            <ListItem
              key={motor.value}
              onPress={() =>
                navigation.navigate("PDetails", {
                  item: motor.value
                })
              }
            >
              <Left>
                <Text style={{ color: "#fff", fontSize: 16 }}>
                  {motor.title}
                </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>
              Private Vehicles Premium Rate
            </Text>
          </ListItem>
          {privateVehicle.map(motor => (
            <ListItem
              key={motor.value}
              onPress={() =>
                navigation.navigate("PDetails", {
                  item: motor.value
                })
              }
            >
              <Left>
                <Text style={{ color: "#fff", fontSize: 16 }}>
                  {motor.title}
                </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </List>
        <View style={{ paddingLeft: 10, marginBottom: 10 }}>
          <TouchableOpacity style={styles.margin10}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16 }}>
              N.B : Exclusion of special periis
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.margin10}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16 }}>
              Earchquake (Fire and shock damage) & Flood, Typhoon, Hurricane,
              storm, Tempest, Cyclone, Hailstorm,Frost
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.margin10}>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              If any insured wishes to bear the liablities for the loss caused
              by the above noted periis, then the insured shall be allowed a
              rebate of (.25% + .25%)=.50% of F.I.V (full insured value of the
              vehicle)
            </Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  margin10: {
    marginTop: 10
  },
  container: {
    backgroundColor: "#16a085"
  }
});
