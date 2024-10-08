import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';  

export default class RecentSearch extends Component  
{
    constructor() {
        super();
        this.state = {                       
            notification:false       // burası databaseden alıncak
        }
    }

    render(){

        const {location, price, room} = this.props;

        return (
            <View style = {styles.box}>
                    <View style = {styles.location}>
                        <Text style={styles.locationText}>{location}</Text>
                        <View style = {styles.priceArea}>
                            <Text style = {styles.priceText}>{price}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row", alignItems:"flex-end", marginRight:"4%", marginBottom:"4%", justifyContent:"space-between"}}>
                        <View style={styles.roomArea}>
                            <Text style={styles.roomText}>{room}</Text>     
                        </View> 
                        <TouchableOpacity>
                            <Image source={(this.state.notification) ? require("../../assets/icons/Notification.png") : require("../../assets/icons/NotNotification.png")}/>
                        </TouchableOpacity>
                    </View>
            </View>
                     
    )}                                
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#E8E8E8',
      height: 80,
      borderRadius: 12,
      width:150,
      flexDirection:"column",
      paddingLeft:"6%",
      paddingTop:"6%",
      justifyContent:"space-between"
    },
  
    location: {
        paddingLeft: "1%",
        paddingTop:"0.5%",
        height: "37%",
        width: "92%",
        flexWrap:"nowrap"
    },

    locationText:{
        color:"#140C07",
        fontFamily:"Gordita",
        fontWeight:"700",
        fontSize:14,
        shadowColor: "rgba(0, 0, 0, 0.25);",
    },

    priceArea:{
        marginTop: "4%",
        flexWrap:"nowrap"
    },

    roomText:{
        color:"#888CA4",
        fontFamily:"Gordita",
        fontSize:12
    },

    ImageStyle: {
        marginTop: "20%",
        marginRight: "5%",
        height: 32,
        width: 32,
        resizeMode : 'stretch',
        alignItems: 'center'
    },

    roomArea:{
        height:17,
        flexDirection:"row",
        marginBottom:"0.5%",
        marginLeft:"1%",
        justifyContent:"space-between",
        marginRight:"5%"
    },

    priceText:{
        fontFamily:"Gordita",
        fontWeight:"700",
        color:"#39A0FF",
        paddingLeft:"1%",
        paddingTop:"1%",
        fontSize:12
    }
  
});

RecentSearch.propTypes = {                      
    location:PropTypes.string.isRequired,  
    price:PropTypes.string.isRequired,  
    room:PropTypes.string.isRequired,                                            
};

RecentSearch.defaultProps = {          
    location:'-',
    price:"-",
    room:"-",    
}