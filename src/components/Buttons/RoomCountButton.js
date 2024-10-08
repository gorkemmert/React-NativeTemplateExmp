import React, {Component} from 'react';
import { View , Text, TouchableOpacity, StyleSheet } from  'react-native'; 

import HomeStore from '../../Store/HomeStore';
import { observer } from 'mobx-react';
@observer

export default class RoomCountButton extends Component
{
    constructor(){                                 
        super();                                    
    
        this.state = {                                
            selected0:true, 
            selected1:false,
            selected2:false,
            selected3:false,
            selected4:false,
            selected5:false,     
        };
    } 
    render(){  
        
        return (
        <View style = {styles.Area}>   
            <TouchableOpacity onPress={()=>this.setState({selected0:true, selected1:false, selected2:false, selected3:false, selected4:false, selected5:false}, HomeStore.setRoomCount("0"))} style = {(this.state.selected0) ? styles.ButtonStyle : styles.ButtonStyle2}>                              
                <Text style = {(this.state.selected0) ? styles.TextStyle : styles.TextStyle2}>+0</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={()=>this.setState({selected0:false, selected1:true, selected2:false, selected3:false, selected4:false, selected5:false}, HomeStore.setRoomCount("1"))} style = {(this.state.selected1) ? styles.ButtonStyle : styles.ButtonStyle2}>                              
                <Text style = {(this.state.selected1) ? styles.TextStyle : styles.TextStyle2}>+1</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={()=>this.setState({selected0:false, selected1:false, selected2:true, selected3:false, selected4:false, selected5:false}, HomeStore.setRoomCount("2"))} style = {(this.state.selected2) ? styles.ButtonStyle : styles.ButtonStyle2}>                              
                <Text style = {(this.state.selected2) ? styles.TextStyle : styles.TextStyle2}>+2</Text>
            </TouchableOpacity>  

            <TouchableOpacity onPress={()=>this.setState({selected0:false, selected1:false, selected2:false, selected3:true, selected4:false, selected5:false}, HomeStore.setRoomCount("3"))} style = {(this.state.selected3) ? styles.ButtonStyle : styles.ButtonStyle2}>                              
                <Text style = {(this.state.selected3) ? styles.TextStyle : styles.TextStyle2}>+3</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={()=>this.setState({selected0:false, selected1:false, selected2:false, selected3:false, selected4:true, selected5:false}, HomeStore.setRoomCount("4"))} style = {(this.state.selected4) ? styles.ButtonStyle : styles.ButtonStyle2}>                              
                <Text style = {(this.state.selected4) ? styles.TextStyle : styles.TextStyle2}>+4</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={()=>this.setState({selected0:false, selected1:false, selected2:false, selected3:false, selected4:false, selected5:true}, HomeStore.setRoomCount("5"))} style = {(this.state.selected5) ? styles.ButtonStyle : styles.ButtonStyle2}>                              
                <Text style = {(this.state.selected5) ? styles.TextStyle : styles.TextStyle2}>+5</Text>
            </TouchableOpacity> 
        </View>
    )}                                                  
}

const styles = StyleSheet.create({    
    Area:{
        width:"100%",
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    },

    ButtonStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "rgba(255,72,138,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
        width: "13%",
        height: 60,
        borderWidth:1,
        borderColor:"#E8E8E8"
    },

    ButtonStyle2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
        width: "13%",
        height: 60,
        borderWidth:1,
        borderColor:"#E8E8E8"
    },
       
    TextStyle: {
        fontSize: 12,
        fontFamily: "Gordita",
        fontWeight: "700",
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        justifyContent: "center",
    },    
    
    TextStyle2: {
        fontSize: 12,
        fontFamily: "Gordita",
        fontWeight: "700",
        color: "black",
        textAlign: "center",
        justifyContent: "center",
    }, 
});


