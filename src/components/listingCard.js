import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"
import PropTypes from 'prop-types'; 

import ListingStore from '../Store/ListingStore';
import WebViewModal from "./modals/WebViewModals";
import { observer } from 'mobx-react';
@observer

export default class ListingCard extends React.Component{

  state = {
    heart:true
  }

  render(){
      const{title,address,room,bathroom,floorarea,price,image, url} = this.props;
      return (
        <TouchableOpacity onPress={()=> {ListingStore.setWebViewVisible(true), ListingStore.setUrl(url)}}>
          <WebViewModal url = {ListingStore.url}/>

        <View style={styles.Container}>
          <View style={styles.imageContainer}>
              <Image style={[styles.image]} resizeMode='stretch' source={{uri:image}}/>
          </View>
          <View style={styles.CardInfo}>
            <View style={styles.CardTopInfo}>
              <Text style={styles.CardTitleText}>{title}</Text>
              <View style={styles.Information}>
                <View style={styles.Content}>
                  <View style={styles.LocationContainer}>
                    <Image
                        style={styles.Icon}
                        source={require('../../assets/icons/Location.png')}
                        />
                    <Text style={styles.LocationText}>
                      {address}
                    </Text>
                  </View>
                </View>
                <View style={styles.RoomsContainer}>
                  <View style={styles.Rooms}>
                    <View style={styles.bedrooms}>
                      <Image
                        style={styles.Icon}
                        source={require('../../assets/icons/Bedroom.png')}
                      />
                      <Text style={styles.textcount}>{room}</Text>
                    </View>
                    <View style={styles.bathrooms}>
                      <Image
                        style={styles.Icon}
                        source={require('../../assets/icons/Bathroom.png')}
                      />
                      <Text style={styles.textcount}>{bathroom}</Text>
                    </View>
                    <View style={styles.floorarea}>
                      <Image
                        style={styles.Icon}
                        source={require('../../assets/icons/Area.png')}
                      />
                      <Text style={styles.textcount}>{floorarea}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.CardBotInfo}>
              <Text style={styles.priceText}>{price}</Text>
              <TouchableOpacity>
                <Image
                    style={styles.Layout}
                    source={(this.state.heart) ? require('../../assets/icons/kalptrue.png') : require('../../assets/icons/kalpfalse.png')}
                />
              </TouchableOpacity>
            </View>  
          </View>
        </View>
        </TouchableOpacity>
    )    
  }
}

const styles = StyleSheet.create({
  Container:{
    flexDirection:'row',
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  imageContainer:{
    width:'40%',
    height:121,
    marginLeft:'5%', 
    marginRight:5 

  },
  image:{     
    width:'100%',
    height:121, 
    borderRadius: 8,
  },
  CardInfo: {
    justifyContent:'space-between',
    flexDirection: "column",
    alignItems:'flex-end',
    paddingTop: 8,
    paddingBottom: 10,
    paddingRight: 12,
    width: '60%',
    height: 140,
  },
  CardTopInfo: {  
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width:'98%'  
  },
  CardTitleText: {
    fontSize: 12,
    fontFamily: "Gordita",
    fontWeight: "700",
    lineHeight: 17,
    color: "rgba(17,24,71,1)",
    
    marginBottom: 4,
  },
  Information: {
    flexDirection: "column",
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  Content: {
    width:'100%',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 8,
  },
  floorarea: {
    flexDirection: "row",
  },
  Icon: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
  
  RoomsContainer: {
    width: '100%',
    height: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  Rooms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  bedrooms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 12,
  },
  Icon: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
  bathrooms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 12,
  },
  Icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 12,
    height: 12,
    marginRight: 2,
  },
  LocationText: {
    fontSize: 8,
    lineHeight: 12,
    fontFamily: "Gordita",
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(136,140,164,1)",
  },
  LocationContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  CardBotInfo: {
    width:'98%',
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent:'space-between'
  },
  priceText: {
    fontSize: 12,
    fontFamily: "Gordita",
    fontWeight: "900",
    color: "rgba(62,174,255,1)",
  },
  Layout: {
    width: 35,
    height: 35,
    marginRight:"3%"
  },
  textcount:{
    justifyContent: "center",
    alignItems: "center",
    lineHeight:12,
    fontSize: 8,
    fontFamily: "Gordita",
    fontWeight: "500",
    color: "rgba(136,140,164,1)",
  },
  
})

ListingCard.propTypes = {                      
  title:PropTypes.string.isRequired,  
  image:PropTypes.string.isRequired,    
  address:PropTypes.string,
  room:PropTypes.string,
  floorarea:PropTypes.string,
  price:PropTypes.string,
  bathroom: PropTypes.string, 
  url:PropTypes.string.isRequired                                          
};

ListingCard.defaultProps = {          
  title:"",
  address:"-",
  room:"-",
  bathroom:"-",
  floorarea:"-",
  price:"-",
  image:"https://cdn.waa2.com//images/no_image_home.png",
  url: "https://www.waa2.com/" 
}




