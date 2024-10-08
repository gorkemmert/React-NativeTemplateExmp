import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';    

import RecentStore from '../Store/RecentStore';

export default class RecentCard extends Component  
{
    constructor() {
        super();
        this.state = {                       
            notification:false       // burası databaseden alıncak
        }
    }

    render(){

        const {titleText, descriptionText, type, price, hour} = this.props;

        return (
            <View style = {styles.box}>
                <View style={{flexDirection:"row", justifyContent:"space-between", marginRight:"2%"}}>
                    <View style = {styles.title}>
                        <Text style={styles.titleText}>{titleText}</Text>
                        <View style = {styles.description}>
                            <Text style = {styles.descriptionText}>{descriptionText}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=> RecentStore.setNatification(true)}>
                        <Image source={(this.state.notification) ? require("../../assets/icons/Notification.png") : require("../../assets/icons/NotNotification.png")}/>
                    </TouchableOpacity>


                </View>
                <View style={styles.info}>
                    <Text style={styles.sale}>{type}   <Text style={styles.price}>{price}</Text></Text>
                    <Text style={styles.hour}>{hour}</Text>          
                </View>    
            </View>
                     
    )}                                
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#E8E8E8',
      height: 132,
      borderRadius: 16,
      width:"100%",
      flexDirection:"column",
      paddingLeft:"0.5%",
      paddingTop:"1%",
      justifyContent:"space-between"
    },
  
    title: {
        paddingLeft: "5%",
        paddingTop:"3%",
        height: 61,
        width: "80%",
        flexWrap:"nowrap"
    },

    titleText:{
        color:"#140C07",
        fontFamily:"Gordita",
        fontWeight:"700",
        fontSize:14,
        shadowColor: "rgba(0, 0, 0, 0.25);",
    },

    description:{
        paddingTop: "4%",
        flexWrap:"nowrap"
    },

    descriptionText:{
        color:"#888CA4",
        fontFamily:"Gordita",
    },

    ImageStyle: {
        marginTop: "20%",
        marginRight: "5%",
        height: 32,
        width: 32,
        resizeMode : 'stretch',
        alignItems: 'center'
    },

    info:{
        height:23,
        flexDirection:"row",
        marginBottom:"2%",
        marginLeft:"5%",
        justifyContent:"space-between",
        marginRight:"5%"
    },

    sale:{
        fontFamily:"Gordita",
        fontWeight:"700",
        color:"#FF7448"
    },

    hour:{
        fontFamily:"Gordita",
        fontWeight:"700",
        color:"#888CA4",
        marginRight:"0.5%"
    },

    price:{
        fontFamily:"Gordita",
        fontWeight:"700",
        color:"#39A0FF",
        paddingLeft:"1%",
        paddingTop:"1%"
    }
  
});


RecentCard.propTypes = {                      
    titleText:PropTypes.string.isRequired,  
    descriptionText:PropTypes.string,  
    type:PropTypes.string.isRequired,  
    price:PropTypes.string.isRequired, 
    hour:PropTypes.string.isRequired                                            
};

RecentCard.defaultProps = {          
    titleText:'-',
    descriptionText:"-",
    type:"-",
    price:"-",
    hour:"-"       
}