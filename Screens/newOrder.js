import React, { Component } from 'react';
import { Text, Alert,ImageBackground,StyleSheet} from 'react-native';
import { Container,Button, Content, Body,Form, Item, Input, Label, View } from 'native-base';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';

import BimaHeader from "./header";
import { db } from "../config";
class registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors:[],
      vehicleInfo:{
        ownername:"",
        address:"",
        region:"",
        series:"",
        vehicleNumber:"",
        Enumber:"",
        CHnumber:"",
        InFrom:"",
        InTo:"",
        Phone:"",
        Postal:"",
        Vtype:"",
        CC:"",
        ModelYr:""
      },
      validationRules:{
        ownername:{
          errorText:"Owner name is required"
        },
        address:{
          errorText:"Address is required"
        },
        region:{
          errorText:"Region is required"
        },
        series:{
          errorText:"Series is required"
        },
        vehicleNumber:{
          errorText:"Vehicle number is required"
        },
        Enumber:{
          errorText:"Engine is required"
        },
        CHnumber:{
          errorText:"Chassis number is required"
        },
        InFrom:{
          errorText:"Insurance from date is required"
        },
        InTo:{
          errorText:"Insurance to date is required"
        },
        Phone:{
          errorText:"Phone number is required"
        },
        Postal:{
          errorText:"Postal is required"
        },
        CC:{
          errorText:"CC is required"
        },
        ModelYr:{
          errorText:"Vehicle model year is required"
        }
      },
      series:[
        "KA-",
        "KHA-",
        "GHA-",
        "HA-",
        "LA-",
        "TAW-",
        "GA-",
        "CHA-",
        "BA-",
        "CAA-",
        "BHA-",
        "UMO-",
        "THA-",
        "NA-",
        "MA-",
        "DHA-",
        "JA-",
        "A-",
        "SHA-",
        "U-",
        "E-",
        "JHA-",
        "DA-",
        "TA-",
        "PA-",
        "PHA-",
        "YA-",
        "RA-",
        "SA-"
      ],
      region:[
        "Dhaka-",
        "Rajshahi-",
        "Khulna-",
        "Chatta-Metro-",
        "Sylhet-Metro-",
        "Barishal-Metro-",
        "Dhaka-Metro-",
        "Rajshahi-Metro-",
        "Laxmipur-",
        "Rajbari-",
        "Chittagong-",
        "Barisal-",
        "Kurigram-",
        "Rangpur-",
        "Bogra-",
        "Natore-",
        "Sylhet-",
        "Khulna-Metro-",
        "Feni-",
        "Chandpur-",
        "Cumilla-",
        "Cumilla-Metro-",
        "Rangpur-Metro-",
        "Gazipur-",
        "Gazipur-Metro-",
        "Narayangonj-",
        "Narayangonj-Metro-",
        "Jashore-",
        "Jhenidah-",
        "Magura-",
        "Narail-",
        "Chuadanga-",
        "Kushtia-",
        "Nagaon-",
        "Gaibandha-",
        "Dinajpur-",
        "Panchaghar-",
        "Thakurgaon-",
        "Faridpur-",
        "Madaripur-",
        "Shariatpur-",
        "Gopalgonj-",
        "Borguna-",
        "Patuakhali-",
        "Bhola-",
        "Firojpur-",
        "Jhalkathi-",
        "Noakhali-",
        "Rangamati-",
        "Khagrachari-",
        "Bandarban-",
        "Bagerhat-",
        "Cox`Bazar-",
        "Sunamgonj-",
        "Habigonj-",
        "Moulvi Bazar-",
        "Kishorgonj-",
        "Netrakona-",
        "Mymensingh-",
        "Jamalpur-",
        "Sherpur-",
        "Nilphamari-",
        "Joypurhat-",
        "Tangail-",
        "Manikgonj-",
        "Munshigonj-",
        "Narsingdi-",
        "Pabna-",
        "Sirajgonj-",
        "Chapainawabgonj-",
        "Satkhira-",
        "B-Baria-",
        "Meherpur-",
        "Lalmonirhat-"
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveUser=this.saveUser.bind(this);
  }
  handleChange(field,text) {
      this.state.vehicleInfo[field]=text;
      this.setState({
        vehicleInfo:this.state.vehicleInfo
      });
  }
  saveUser(){
    const {vehicleInfo,validationRules}=this.state;
    var errors=[];
    var vInfo=Object.keys(vehicleInfo);
    var validationRule=Object.keys(validationRules);
    vInfo.forEach(elem => {
      if(validationRule.includes(elem)){
        if(!vehicleInfo[elem] || vehicleInfo[elem] ==''){
          errors.push(validationRules[elem]['errorText']);
        }
      }
    });
    this.setState({
      errors:errors
    });
    if(!errors.length){
      db.ref('/items').push(this.state.vehicleInfo);
      Alert.alert('Item saved successfully');
      this.setState({
        errors:[]
      });
      vInfo.forEach(element => {
        vehicleInfo[element]=""
      });
      this.setState({
        vehicleInfo:vehicleInfo
      });
    }
  }

  render() {
    const resizeMode = 'cover';
    const imgUrl=require('../assets/bg.png');
    var region =[];
    var series=[];
    this.state.series.forEach(element => {
      series.push({
        label:element,
        value:element
      });
    });
    this.state.region.forEach(element => {
      region.push({
        label:element,
        value:element
      });
    });
    const vehicleInfo=this.state.vehicleInfo;
    const errors=this.state.errors;
    const regionPlaceholder = {
      label: 'Select a region...',
      value: null,
      color: '#9EA0A4',
    };
    const seriesPlaceholder = {
      label: 'Select a series...',
      value: null,
      color: '#9EA0A4',
    };
    return (
      <Container style={styles.container}>
          <BimaHeader back={true}></BimaHeader>
          <Content padder>
              <View style={{flex:1,alignItems:"center"}}>
                  <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,marginBottom:30}}>Order form</Text>
                  {errors && errors.length > 0 && errors.map((err)=>
                    <Text style={{fontWeight:"bold",color:"red",marginBottom:10}}>{err}</Text>
                  )}
                  {/* owner name */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Owner name*</Label>
                    <Input onChangeText={(text)=>this.handleChange('ownername',text)}
                    value={vehicleInfo.ownername} style={{color:"#fff"}}/>
                  </Item> */}
                  <Input 
                    onChangeText={(text)=>this.handleChange('ownername',text)}
                    value={vehicleInfo.ownername}
                    placeholder="Owner name*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />
                  {/* address */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Address*</Label>
                    <Input onChangeText={(text)=>this.handleChange('address',text)}
                    value={vehicleInfo.address} style={{color:"#fff"}} />
                  </Item> */}
                  <Input 
                    onChangeText={(text)=>this.handleChange('address',text)}
                    value={vehicleInfo.address}
                    placeholder="Address*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />
                  {/* phone */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Phone*</Label>
                    <Input onChangeText={(text)=>this.handleChange('Phone',text)}
                    value={vehicleInfo.Phone}  style={{color:"#fff"}} keyboardType="phone-pad"/>
                  </Item> */}
                  <Input onChangeText={(text)=>this.handleChange('Phone',text)}
                    value={vehicleInfo.Phone}
                    keyboardType="phone-pad"
                    placeholder="Phone*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />
                  {/* postal */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Postal*</Label>
                    <Input onChangeText={(text)=>this.handleChange('Postal',text)}
                    value={vehicleInfo.Postal} style={{color:"#fff"}} />
                  </Item> */}
                  <Input onChangeText={(text)=>this.handleChange('Postal',text)}
                    value={vehicleInfo.Postal}
                    placeholder="Postal*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />
                  {/* engine number */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Engine Number*</Label>
                    <Input onChangeText={(text)=>this.handleChange('Enumber',text)}
                    value={vehicleInfo.Enumber}  style={{color:"#fff"}} keyboardType="numeric" />
                  </Item> */}
                  <Input onChangeText={(text)=>this.handleChange('Enumber',text)}
                    value={vehicleInfo.Enumber}
                    keyboardType="numeric"
                    placeholder="Engine Number*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />
                  {/* Chassis number */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Chassis Number*</Label>
                    <Input onChangeText={(text)=>this.handleChange('CHnumber',text)}
                    value={vehicleInfo.CHnumber}  style={{color:"#fff"}} keyboardType="numeric"/>
                  </Item> */}
                  <Input onChangeText={(text)=>this.handleChange('CHnumber',text)}
                    value={vehicleInfo.CHnumber}
                    keyboardType="numeric"
                    placeholder="Chassis Number*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />
                  {/* model yr */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Vehicle Model year*</Label>
                    <Input onChangeText={(text)=>this.handleChange('ModelYr',text)}
                    value={vehicleInfo.ModelYr}  style={{color:"#fff"}} keyboardType="numeric"/>
                  </Item> */}
                  <Input onChangeText={(text)=>this.handleChange('ModelYr',text)}
                    value={vehicleInfo.ModelYr}
                    keyboardType="numeric"
                    placeholder="Vehicle Model year*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />
                  {/* cc */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Vehicle CC*</Label>
                    <Input  onChangeText={(text)=>this.handleChange('CC',text)}
                    value={vehicleInfo.CC}  style={{color:"#fff"}} keyboardType="numeric"/>
                  </Item> */}
                  <Input  onChangeText={(text)=>this.handleChange('CC',text)}
                    value={vehicleInfo.CC}
                    keyboardType="numeric"
                    placeholder="Vehicle CC*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />

                  <Text style={{ marginTop:10, color:"#fff",fontSize:18}}>
                      {vehicleInfo.region}{vehicleInfo.series}{vehicleInfo.vehicleNumber}
                    </Text>
                  {/* region */}
                  <View style={{marginTop:15,marginBottom:10}}>
                    <RNPickerSelect
                      value={vehicleInfo.region}
                      onValueChange={(text)=>this.handleChange('region',text)}
                      items={region}
                      placeholder={regionPlaceholder}
                      style={pickerSelectStyles}
                    />
                  </View>
                  
                  {/* series */}
                  <View style={{marginBottom:10}}>
                    <RNPickerSelect
                      value={vehicleInfo.series}
                      onValueChange={(text)=>this.handleChange('series',text)}
                      items={series}
                      placeholder={seriesPlaceholder}
                      style={pickerSelectStyles}
                    />
                  </View>

                  {/* vehicle number */}
                  {/* <Item floatingLabel>
                    <Label style={{color:"#fff"}}>Vehicle Number</Label>
                    <Input onChangeText={(text)=>this.handleChange('vehicleNumber',text)}
                    value={vehicleInfo.vehicleNumber}  style={{color:"#fff"}} keyboardType="numeric" />
                  </Item> */}
                  <Input 
                    onChangeText={(text)=>this.handleChange('vehicleNumber',text)}
                    value={vehicleInfo.vehicleNumber}
                    keyboardType="numeric"
                    placeholder="Vehicle Number*"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    />
                  
                  {/* start date */}
                  <View style={{marginTop:10}}>
                    <Text style={{color:"#fff",fontSize:18,marginBottom:10}}>Insurance start date</Text>
                    <DatePicker
                      style={{width:300,marginBottom:10}}
                      date={vehicleInfo.InFrom}
                      mode="date"
                      placeholder="Select insurance start date"
                      format="YYYY-MM-DD"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36
                        }
                      }}
                      onDateChange={(date) => {this.handleChange('InFrom',date)}}
                    />
                  </View>
                  {/* end date */}
                  <View >
                    <Text style={{color:"#fff",fontSize:18,marginBottom:10}}>Insurance End date</Text>
                    <DatePicker
                      style={{width: 300}}
                      date={vehicleInfo.InTo}
                      mode="date"
                      placeholder="Select insurance end date"
                      format="YYYY-MM-DD"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36
                        }
                      }}
                      onDateChange={(date) => {this.handleChange('InTo',date)}}
                    />
                  </View>
                  <Button style={styles.button} onPress={this.saveUser}>
                    <Text>Submit</Text>
                  </Button>
              </View>
            </Content>          
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16a085",
  },
  input: {
    height: 40,
    width: 320,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingLeft:15
  },
  button: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "stretch",
    marginTop: 10,
    color:"#fff",
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10,
    marginTop:10
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    width:320,
    borderColor: '#fff',
    borderRadius: 4,
    color: '#fff',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    width:320,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 8,
    color: '#fff',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default registration;
