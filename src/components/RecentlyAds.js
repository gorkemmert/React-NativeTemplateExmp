import React from "react";
import {StyleSheet, View, Text, ImageBackground,Linking,Image} from "react-native";
import PropTypes from 'prop-types';  

export default class RecentlyAds extends React.Component{
    render(){
        const {room, title, location, linkText, url, image} = this.props;
        return(
            <View style={styles.AdsContainer}>
                <View style={styles.BackgroundImageContainer}>
                    <ImageBackground source={{uri:image}} resizeMode="stretch" style={styles.image} imageStyle={{borderTopLeftRadius:12, borderTopRightRadius:12}}>  
                        <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                            <View style={styles.TopTextContainer}>
                                <Text style={styles.roomtext}>{room}</Text>
                            </View>
                        </View>
                        <View style={styles.BottomTextContainer}>
                            <View style={styles.BottomTitleContainer}>
                                <Text style={styles.titletext}>{title}</Text>
                            </View>
                            <View style={styles.BottomLocationContainer}>
                                <View style={styles.IconContainer}>
                                    <Image
                                    style={styles.Icon}
                                        source={require('../../assets/icons/Location.png')}
                                    />
                                </View>
                                <View style={styles.LocationContainer}>
                                    <Text style={styles.LocationText}>
                                        {location}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                    </ImageBackground>
                </View>
                <View style={styles.AltTextContainer}>
                    <Text 
                    style={styles.AltTextStyle}
                    onPress={()=>Linking.openURL(url)}
                    >
                    {linkText}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    AdsContainer:{
       width:192,
       height:222,
       backgroundColor:'#F1F2F5',
       borderRadius:12,
       
   },
   BackgroundImageContainer:{
       width:'100%',
       height:'85%',
   },

   image:{
       justifyContent:'space-between',
       borderRadius:12,
       width:'100%',
       height:'100%'
   },
   AltTextContainer:{
       alignItems:'center',
       justifyContent:'center',
       flex:1,
       height:'15%'
   },
   AltTextStyle:{
       color:"#39A0FF",
       fontFamily:'Gordita',
       fontSize: 12,   
   },

   TopTextContainer:{
       width:'35%',
       height:18,
       borderRadius:4,
       backgroundColor:'#FFCA63',
       justifyContent:'center',
       alignItems:'center',
       marginTop:12,
       marginRight:12
   },

   BottomTextContainer:{     
       backgroundColor: 'rgba(0,0,0,0.5)',
       width:'100%',
       paddingLeft:12,
   },
   
   BottomTitleContainer:{
       marginTop:4
   },
   BottomLocationContainer:{
       flexDirection:'row',
       justifyContent:'flex-start',
       alignItems:'center',
       marginBottom:6,
   },
   
   Icon:{
       width:14,
       height:14,  
   },
   titletext:{
       fontFamily:'Gordita',
       color:'#FFFFFF',
       fontWeight:'bold',
       fontSize: 12,
   },
   LocationText:{
       color:'#E8E8E8',
       fontFamily:'Gordita',
       flexWrap:'nowrap',
       fontWeight:'400',
       fontSize:10

   },
   roomtext:{
       color:'#FFFFFF',
       fontFamily:'Gordita',
       fontSize:12,
       fontWeight:'bold'
   }

})
RecentlyAds.propTypes = {                      
    location:PropTypes.string.isRequired,  
    room:PropTypes.string, 
    url:PropTypes.string.isRequired,   
    title:PropTypes.string.isRequired,     
    linkText:PropTypes.string.isRequired,   
    image:PropTypes.string.isRequired,                          
};

RecentlyAds.defaultProps = {          
    location:'-',
    room:"-",    
    url:'-',
    title:"-",
    linkText:"-",
    image:'https://cdn.waa2.com//images/no_image_home.png'
}

