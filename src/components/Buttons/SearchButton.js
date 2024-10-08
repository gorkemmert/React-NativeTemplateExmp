import React, {Component} from 'react';
import { Text, TouchableOpacity, StyleSheet } from  'react-native';
import PropTypes from 'prop-types';   

export default class SearchButton extends Component
{
    render(){     
        const {text, funk} = this.props;  

        return (     
            <TouchableOpacity onPress={funk} style = {styles.Area}>                              
                <Text style = {styles.text}>{text}</Text>
            </TouchableOpacity>  
    )}                                                  
}

const styles = StyleSheet.create({ 
    text:{
        fontSize: 12,
        fontFamily: "Gordita",
        fontWeight: "700",
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        justifyContent: "center",
    },
    
    Area:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: "rgba(255,72,138,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
        width: "100%",
        height: 63,
        borderWidth:1,
        borderColor:"rgba(255,72,138,1)"
    }
});

SearchButton.propTypes = {                      
    text:PropTypes.string.isRequired,                                                
};

SearchButton.defaultProps = {          
    text:'Search',             
}