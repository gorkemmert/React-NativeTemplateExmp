/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//AIzaSyDFr2uj0Z9n_ls4dXHb5yrshxIL5RZyPnQ
 import React from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
   Touchable,
   Button
 } from 'react-native';
 import Geolocation from '@react-native-community/geolocation';
//  import Geocoder from 'react-native-geocoding';

 export default class App extends React.Component{
 
   constructor(props){
     super(props);
     this.state={
       latitude:'',
       longitude:'',
     }
   }

   getData(){
    Geocoder.init("AIzaSyDFr2uj0Z9n_ls4dXHb5yrshxIL5RZyPnQ");
    Geocoder.from(41.89, 12.49)
		.then(json => {
        		var addressComponent = json.results[0].address_components[0];
			console.log(addressComponent);
		})
		.catch(error => console.warn(error));

   }
 
 
   componentDidMount(){
     Geolocation.getCurrentPosition(
       position=>{
         const {coords:{latitude,longitude}}=position;
         this.setState({latitude,longitude});
       },
       error=>{
         console.log(error);
       }
     )
   }
 
   render(){
     const { latitude,longitude}=this.state;
     return(
       <SafeAreaView>
       <TouchableOpacity onPress={()=>{this.getData()}}>
         <Text>get address </Text>
       </TouchableOpacity>
       </SafeAreaView>
     )
   }
 }