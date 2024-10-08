import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, FlatList,Button} from "react-native";

import SearchInput from "../components/SearchInput";
import SearchButton from "../components/Buttons/SearchButton";
import RecentSearch from "../components/RecentSearch";
import RecentlyAds from "../components/RecentlyAds";
import SaleRentModals from '../components/modals/SaleRentModals';
import RoomModals from '../components/modals/RoomModals';
import PriceModals from '../components/modals/PriceModals';
import FilterStore from '../Store/FilterStore';
import HomeStore from '../Store/HomeStore';
import InternetControl from "../control/internetControl"
import Not from './denemebildirim';
const DATA = [        
    {
      id: '1',
      location:"Ankara, Türkiye",       // burası ileride istek ile alınacak
      price: "$4.000",
      room:"4+ rooms",
      image:"https://icdn.ensonhaber.com/resimler/diger/22_4951.jpg",
      linkText:"immobilere.com",
      url:"www.immobilare.com",
      title:"Ankarada Ev"
    },

    {
      id: '2',
      location:"Balıkesir, Türkiye",       
      price: "$1.000",
      room:"1+ rooms",
      image:"https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
      linkText:"subito.com",
      url:"https://waa2.com",
      title:"Balıkesir Ev"
    },

    {
      id: '3',
      location:"İstanbul, Türkiye",       
      price: "$10.000",
      room:"3+ rooms",
      image:"https://media.istockphoto.com/photos/two-story-home-near-in-suburb-of-chicago-picture-id1276724606?b=1&k=20&m=1276724606&s=170667a&w=0&h=asvVNSDVVH_aCaEQ37_z0t9AIjy-oc1hCdpQFVi9LzU=",
      linkText:"remax.com",
      url:"www.remax.com",
      title:"İstanbul Ev"
    },
];

import { observer } from 'mobx-react';

@observer
class Home extends Component
{
    constructor() {
        super();
        this.state = {                       
          y_coordinate:""     
        }
    }
    
    handlePress(evt){
        this.setState({y_coordinate:evt.nativeEvent.locationY});
    }

    goListing=()=>{
        this.props.navigation.navigate('Screen_Listing');
        FilterStore.setapiurl("https://mocki.io/v1/38bc5644-425f-48ec-a18d-e4b4119b6a1e");

    }
    
    render() {
        
        return(
            
            <SafeAreaView>
                {/* <Not></Not> */}
                <InternetControl/>
                <ScrollView onScrollBeginDrag={() => HomeStore.setVisible(false)} onScrollEndDrag={() => HomeStore.setVisible(true)} showsVerticalScrollIndicator ={false}>
                    <View>
                
                        <View style={styles.container}>

                            <View style={{marginHorizontal:"4%", marginTop:10}}>
                                <SearchInput placeholder={"İstanbul, Türkiye"} color={"#353A60"} border={"#353A60"} textborder={"transparent"}/>
                            </View>

                            <View style={{borderColor:"#E8E8E8", borderBottomWidth:0.3, marginHorizontal:"4%", marginTop:"3%"}}/>

                            <View style={{marginHorizontal:"4%", marginTop:8, flexDirection:"row"}}>
                                <View style={{width:"49.1%", marginTop:"1%"}}>
                                    <TouchableOpacity onPress={(evt)=> {HomeStore.setSaleVisible(true), this.handlePress(evt)}}>
                                        <Text style={{color:"#888CA4", fontFamily:"Gordita", fontSize:10, fontWeight:"400", marginTop:"0%"}}>Booking type</Text>
                                        <Text style={{color:"#FFFFFF", fontFamily:"Gordita", fontSize:16, fontWeight:"500", marginTop:"8%"}}>Sale</Text>
                                    </TouchableOpacity>
                                </View>

                                <SaleRentModals/> 

                                <View style={{borderColor:"#E8E8E8", borderLeftWidth:0.3, marginTop:"1%"}}/>
                                
                                <View style={{width:"49.6%", marginLeft:"6%", marginTop:"1%"}}>
                                    <TouchableOpacity onPress={()=> HomeStore.setRoomVisible(true)}>
                                        <Text style={{color:"#888CA4", fontFamily:"Gordita", fontSize:10, fontWeight:"400", marginTop:"0%"}}>Rooms</Text>
                                        <Text style={{color:"#FFFFFF", fontFamily:"Gordita", fontSize:16, fontWeight:"500", marginTop:"8%"}}>2+</Text>
                                    </TouchableOpacity>
                                </View>

                                <RoomModals/>  
                                
                            </View>

                            <View style={{borderColor:"#E8E8E8", borderBottomWidth:0.3, marginHorizontal:"4%", marginTop:"3%"}}/>

                            <View style={{marginHorizontal:"4%", marginTop:"3%"}}>
                                <TouchableOpacity onPress={()=> HomeStore.setPriceVisible(true)}>
                                    <Text style={{color:"#888CA4", fontFamily:"Gordita", fontSize:10, fontWeight:"400", marginTop:"0%"}}>Price</Text>
                                    <Text style={{color:"#FFFFFF", fontFamily:"Gordita", fontSize:16, fontWeight:"500", marginTop:"3%"}}>3000$ - 4.500$</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <PriceModals/>

                            <View style={{borderColor:"#E8E8E8", borderBottomWidth:0.3, marginHorizontal:"4%", marginTop:"3%"}}/>

                            <View style={{marginHorizontal:"4%", marginTop:"4%"}}>
                                <SearchButton text={"Search 1.260 ads"} funk={this.goListing}/>
                            </View>

                        </View>
                        
                          
                        <View style={{marginTop:"6%", flexDirection:"row", marginHorizontal:"5%", justifyContent:"space-between", alignItems:"center"}}>
                            <Text style={{fontFamily:"Gordita", fontWeight:"700", fontSize:18, color:"#111847"}}>Recent Searches</Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Screen_RecentSearches')}>
                                <Text style={{fontFamily:"Gordita", fontWeight:"500", fontSize:12, color:"#FF488A"}}>View all</Text>
                            </TouchableOpacity>
                        </View>
                       
                        

                        <FlatList
                            data={DATA}
                            renderItem={({item})=>( 
                                <View style={{marginLeft:15, marginTop:"10%", marginBottom:"6%"}}> 
                                    <RecentSearch location={item.location} room={item.room} price={item.price}/> 
                                </View> 
                            )}             
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />


                        <View style={{marginTop:"6%", marginHorizontal:"5%"}}>
                            <Text style={{fontFamily:"Gordita", fontWeight:"700", fontSize:18, color:"#111847"}}>Recently Viewed Ads</Text>
                        </View>

                        <FlatList
                            data={DATA}
                            renderItem={({item})=>( 
                                <View style={{marginLeft:15, marginTop:"6%", marginBottom:"10%"}}> 
                                    <RecentlyAds location={item.location} room={item.room} image={item.image} url={item.url} linkText={item.linkText} title={item.title}/> 
                                </View> 
                            )}             
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />            
                    </View>
                    <View style={{marginBottom:'25%'}}></View>
                </ScrollView>
            </SafeAreaView>
        )
    };
}

export default Home;

export const styles = StyleSheet.create({
    container: {
        marginHorizontal:"5%",
        backgroundColor:"#111847",
        height:"40%",
        borderRadius:20,
        marginTop:"5%"
    }
});