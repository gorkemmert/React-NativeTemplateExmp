import NetInfo from '@react-native-community/netinfo';
import React, {Component} from 'react';
import {View} from "react-native";

import HomeStore from "../Store/HomeStore"

export default class InternetControl extends Component {
    componentDidMount(){
        NetInfo.fetch().then(state => {            
            if(!state.isConnected){    
                HomeStore.setInternet(false)                          
                alert('Please connect to the internet.'); 
            }
        })
    }
    render(){
        return (
            <View style={{display:"none"}}></View>
        )};
}