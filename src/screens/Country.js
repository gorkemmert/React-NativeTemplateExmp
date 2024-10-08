import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectBox from "../components/SelectBox"
import InternetControl from "../control/internetControl"

const Data = [
    {id:1,name:'Australia'},     // apiden veriler çekilecek
    {id:2,name:'America'},    
    {id:3,name:'England'}, 
    {id:4,name:'Brasil'}, 
    {id:5,name:'Germany'}, 
    {id:6,name:'Ukraine'}, 
    {id:7,name:'Turkey'}, 
    {id:8,name:'Russia'}, 
    {id:9,name:'Canada'}, 
    {id:10,name:'South Africa'}, 
    {id:11,name:'Argentina'}, 
    {id:12,name:'Chile'},
    {id:13,name:'Colombia'},
    {id:14,name:'France'},
    {id:15,name:'Holland'},
    {id:16,name:'İtaly'},
]

export default class Country extends Component
{
    constructor() {
        super();
        this.state = {                       
          select : false
        }
    }

    goHome=()=>{
        this.props.navigation.navigate('Screen_Home');
    }

    goHomeAndSelectCountry = async (data)=>{
        await AsyncStorage.setItem('Country', data); 
        this.props.navigation.navigate('Screen_Home');
    }

    componentDidMount = async () => {
        try {        
            const country = await AsyncStorage.getItem('Country') 
            if(country!= null){
                this.goHome()
                this.setState({select:true})
            }
            else{
                this.setState({select:false})
            }
        }
        catch(err) {
            console.warn("Error!!!", err)
        } 
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <InternetControl/>
                <View style = {{alignItems:"center", justifyContent:"center", marginHorizontal:"5%"}}>
                    <View style={{justifyContent:"center", alignItems:"center", marginTop:"40%"}}>
                        <Image style={{height:120, width:120}} source={require("../../assets/images/world.gif")}/>
                    </View>

                    <View style={{justifyContent:"center", alignItems:"center", paddingTop:"10%"}}>
                        <SelectBox popupTitle={""} title={"Select Country"} cancel={"Cancel"} select={"Select"} search={"Search"} noData={"No Data"} showSearchBox={true} Data={Data} funk={this.goHomeAndSelectCountry}/>
                    </View>

                    <View style={{justifyContent:"center", alignItems:"center", paddingTop:"85%"}}>
                        <Text style={{fontFamily:"Gordita", fontSize:17, fontWeight:"500", color:"#111847"}}>A product of Waa2</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    };
}