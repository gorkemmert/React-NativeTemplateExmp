import React, {Component} from 'react';
import {View, Text, Image} from "react-native";

export default class Splash extends Component
{
      render() {
          return (
              <View style ={{flex:1}}>
                    <View style ={{flex:1, justifyContent:"flex-end", alignItems:"center", marginTop:"13%"}}>
                        <Image style={{height:38}} source={require("../../assets/images/Logo.png")}/>
                    </View>

                    <View style ={{flex:1, justifyContent:"flex-end", alignItems:"center", marginBottom:"10%"}}>
                        <Text style={{fontFamily:"Gordita", fontWeight:"400", fontSize:14, color:"#111847"}}>A product of Waa2</Text>
                    </View>
              </View>
          )
      };
}