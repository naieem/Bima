import React, { Component } from 'react';
import { Text, Alert,ImageBackground} from 'react-native';
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
    return (
      <Container>
          <BimaHeader back={true}></BimaHeader>
          <ImageBackground source={imgUrl}  style={{ flex: 1}} resizeMode={resizeMode}>
            <Content padder>
              <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16}}>Order form</Text>
              {errors && errors.length > 0 && errors.map((err)=>
                <Text style={{textAlign:"center",fontWeight:"bold",color:"red"}}>{err}</Text>
              )}
              <Form style={{flex:1}}>
                {/* owner name */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Owner name*</Label>
                  <Input onChangeText={(text)=>this.handleChange('ownername',text)}
                  value={vehicleInfo.ownername} style={{color:"#fff"}}/>
                </Item>
                {/* address */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Address*</Label>
                  <Input onChangeText={(text)=>this.handleChange('address',text)}
                  value={vehicleInfo.address} style={{color:"#fff"}} />
                </Item>
                {/* phone */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Phone*</Label>
                  <Input onChangeText={(text)=>this.handleChange('Phone',text)}
                  value={vehicleInfo.Phone}  style={{color:"#fff"}} keyboardType="phone-pad"/>
                </Item>
                {/* postal */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Postal*</Label>
                  <Input onChangeText={(text)=>this.handleChange('Postal',text)}
                  value={vehicleInfo.Postal} style={{color:"#fff"}} />
                </Item>
                {/* engine number */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Engine Number*</Label>
                  <Input onChangeText={(text)=>this.handleChange('Enumber',text)}
                  value={vehicleInfo.Enumber}  style={{color:"#fff"}} keyboardType="numeric" />
                </Item>
                {/* Chassis number */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Chassis Number*</Label>
                  <Input onChangeText={(text)=>this.handleChange('CHnumber',text)}
                  value={vehicleInfo.CHnumber}  style={{color:"#fff"}} keyboardType="numeric"/>
                </Item>
                {/* model yr */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Vehicle Model year*</Label>
                  <Input onChangeText={(text)=>this.handleChange('ModelYr',text)}
                  value={vehicleInfo.ModelYr}  style={{color:"#fff"}} keyboardType="numeric"/>
                </Item>
                {/* cc */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Vehicle CC*</Label>
                  <Input  onChangeText={(text)=>this.handleChange('CC',text)}
                  value={vehicleInfo.CC}  style={{color:"#fff"}} keyboardType="numeric"/>
                </Item>
                <Text style={{paddingHorizontal:15, marginTop:10, color:"#fff",fontSize:18}}>
                    {vehicleInfo.region}{vehicleInfo.series}{vehicleInfo.vehicleNumber}
                  </Text>
                {/* region */}
                <View style={{paddingLeft:15,marginTop:15,marginBottom:10}}>
                  <Text style={{color:"#fff",fontSize:18,marginBottom:10}}>Select vehicle Region</Text>
                  <RNPickerSelect
                  value={vehicleInfo.region}
                    onValueChange={(text)=>this.handleChange('region',text)}
                    items={region}
                  />
                </View>
                
                {/* series */}
                <View style={{paddingLeft:15}}>
                  <Text style={{color:"#fff",fontSize:18}}>Select vehicle series</Text>
                  <RNPickerSelect
                      value={vehicleInfo.series}
                      onValueChange={(text)=>this.handleChange('series',text)}
                      items={series}
                  />
                </View>

                {/* vehicle number */}
                <Item floatingLabel>
                  <Label style={{color:"#fff"}}>Vehicle Number</Label>
                  <Input onChangeText={(text)=>this.handleChange('vehicleNumber',text)}
                  value={vehicleInfo.vehicleNumber}  style={{color:"#fff"}} keyboardType="numeric" />
                </Item>
                
                {/* start date */}
                <View style={{paddingLeft:15,marginTop:10}}>
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
                <View style={{paddingLeft:15}}>
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
              </Form>
              <Button block info style={{marginTop:50,flex:1,alignContent:"center"}} onPress={this.saveUser}>
                <Text>Submit</Text>
              </Button>
            </Content>          
          </ImageBackground>
      </Container>
    );
  }
}

export default registration;
