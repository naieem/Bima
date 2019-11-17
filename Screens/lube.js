import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  Container,
  Item,
  Picker,
  Content,
  Icon,
  Left,
  Right,
  Text,
  Button
} from "native-base";
import BimaHeader from "./header";
export default class Lube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {
        brand: "",
        manufacturer: ""
      },
      lubeCode:"",
      searchInitialized:false,
      manufacturer: {
        TVS: {
          XL: "10W30",
          Metro: "10W30",
          Radeon: "10W30",
          "Metro Plus": "10W30",
          Stryker: "10W30",
          Phoenix: "10W30",
          Jupiter: "10W30",
          Wego: "10W30",
          Max: "10W30",
          Zest: "10W30",
          "Apache RTR": "10W40",
          "4V": "10W40"
        },
        Bajaj: {
          Avenger: "20W50",
          Pulsar: "20W50",
          CT: "20W50",
          Platina: "20W50",
          Discover: "20W50",
          V15: "20W50",
          NS: "20W50",
          AS: "20W50"
        },
        Honda: {
          "X Blade": "10W30",
          CRF: "10W30",
          "Dream Neo": "10W30",
          Livo: "10W30",
          Shine: "10W30",
          "Wave Alpha": "10W30",
          Dio: "10W30",
          "CB Hornet": "10W40",
          "CB Trigger": "10W40",
          CBR: "10W40"
        },
        Hero: {
          "HF Deluxe": "10W30",
          "Splendor Plus": "10W30",
          Dawn: "10W30",
          iSmart: "10W30",
          "iSmart+": "10W30",
          "Passion X Pro": "10W30",
          Glamour: "10W30",
          Achiever: "10W30",
          Ignitor: "10W30",
          Pleasure: "10W30",
          "Maestro Edge": "10W30",
          Hunk: "10W40"
        },
        Suzuki: {
          Hayate: "10W30",
          Lets: "10W30",
          Access: "10W30",
          GS: "10W40",
          Gixxer: "10W40",
          "Gixxer SF": "10W40",
          Burgman: "10W30",
          Intruder: "10W30",
          "GSZ-R": "10W30"
        }
      }
    };
  }
  onManufacturerChange = value => {
    this.state.searchCriteria.manufacturer = value;
    this.setState({
      searchCriteria: this.state.searchCriteria
    });
  };
  onBrandChange = value => {
    this.state.searchCriteria.brand = value;
    this.setState({
      searchCriteria: this.state.searchCriteria
    });
  };
  renderManufacturer = () => {
    const { manufacturer } = this.state;
    const manufacturers=Object.keys(manufacturer);
    return manufacturers.map((title, ind) => (
      <Picker.Item label={title} value={title} key={ind} />
    ));
  };
  renderBrand = () => {
    const { searchCriteria, manufacturer } = this.state;
    const brandValues = Object.keys(manufacturer[searchCriteria.manufacturer]);
    return brandValues.map((brnd, ind) => (
      <Picker.Item label={brnd} value={brnd} key={ind} />
    ));
  };
  findLube=()=>{
    const {searchCriteria,manufacturer}=this.state;
    let lubeCode=manufacturer[searchCriteria.manufacturer][searchCriteria.brand];
    this.setState({
      searchInitialized:true,
      lubeCode:lubeCode
    });
  }
  render() {
    const { searchCriteria,searchInitialized,lubeCode } = this.state;
    return (
      <Container style={styles.container}>
        <BimaHeader back={true}></BimaHeader>
        <Content padder>
          {/* manufacturer */}
          <View style={styles.mainWrapper}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 18,
                marginBottom: 20
              }}
            >
              Search your lube information
            </Text>
            <Item picker>
              <Left>
                <Text>Manufacturer</Text>
              </Left>
              <Right>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder=""
                  placeholderStyle={{ color: "#000" }}
                  placeholderIconColor="#000"
                  selectedValue={searchCriteria.manufacturer}
                  onValueChange={this.onManufacturerChange}
                >
                  {this.renderManufacturer()}
                </Picker>
              </Right>
            </Item>
            {/* brand */}
            {searchCriteria.manufacturer.length > 0 && (
              <Item picker>
                <Left>
                  <Text>Brand</Text>
                </Left>
                <Right>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder=""
                    placeholderStyle={{ color: "#000" }}
                    placeholderIconColor="#000"
                    selectedValue={searchCriteria.brand}
                    onValueChange={this.onBrandChange}
                  >
                    {this.renderBrand()}
                  </Picker>
                </Right>
              </Item>
            )}
            <View style={{ marginTop: 20 }}>
              <Button primary onPress={this.findLube}>
                <Text>Find</Text>
              </Button>
              {searchInitialized && lubeCode.length > 0 && 
                <Text
                style={{ color: "#fff", fontWeight: "bold", marginTop: 20 }}
              >
                Oil Recommendation: {lubeCode}
              </Text>
              }
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  margin10: {
    marginTop: 10
  },
  container: {
    backgroundColor: "#16a085"
  },
  mainWrapper: {
    flex: 1,
    height: 300,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
