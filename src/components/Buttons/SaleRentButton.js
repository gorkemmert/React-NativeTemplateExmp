import React, {Component} from 'react';
import { View , Text, TouchableOpacity, StyleSheet } from  'react-native';
import PropTypes from 'prop-types';    

import HomeStore from '../../Store/HomeStore';
import { observer } from 'mobx-react';
@observer

export default class SaleRentButton extends Component
{
    constructor(){                                 
        super();                                    
    
        this.state = {                                
            color:true,
            text:true
        };
    } 
    render(){      

        return (
        <View style = {styles.Area}>   
            <TouchableOpacity onPress={()=>this.setState({color:true, text:true}, HomeStore.setSaleRent(true))} style = {(this.state.color) ? styles.ButtonStyle : styles.ButtonStyle2}>                              
                <Text style = {(this.state.text) ? styles.TextStyle : styles.TextStyle2}>{this.props.sale}</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={()=>this.setState({color:false, text:false }, HomeStore.setSaleRent(false))} style = {(this.state.color) ? styles.ButtonStyle2 : styles.ButtonStyle}>                             
                <Text style = {(this.state.text) ? styles.TextStyle2 : styles.TextStyle}>{this.props.rent}</Text>
            </TouchableOpacity> 
        </View>
    )}                                                  
}

const styles = StyleSheet.create({    
    Area:{
        width:"100%",
        height:100,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
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
        width: "40%",
        height: 60,
        borderWidth:1,
        borderColor:"rgba(255,72,138,1)"
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
        width: "40%",
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

SaleRentButton.propTypes = {                      
    sale:PropTypes.string.isRequired,  
    rent:PropTypes.string.isRequired,                                                
};

SaleRentButton.defaultProps = {          
    sale:'Sale',
    rent:"Rent"               
}
