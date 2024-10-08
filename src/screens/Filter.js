import React, {Component} from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet} from 'react-native';

import SaleRentSwitch from "../components/Buttons/SaleRentSwitch"
import SearchInput from "../components/SearchInput"
import Slider from "../components/Slider"
import SelecetBox from "../components/SelectBox"
import RoomCountButton from "../components/Buttons/RoomCountButton"
import SearchButton from "../components/Buttons/SearchButton"
import InternetControl from "../control/internetControl"
export default class Filter extends Component 
{
    goListing=()=>{
        this.props.navigation.navigate('Screen_Listing');
    }
    render(){   
        return ( 
        <SafeAreaView>
            <InternetControl/>
            <ScrollView showsVerticalScrollIndicator ={false}>

                <View style={styles.container}>
                    <View style={{marginTop:"1%"}}>
                        <SaleRentSwitch sale={"Sale"} rent={"Rent"}/>
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <SearchInput placeholder={"İstanbul, Türkiye"} textborder={"transparent"}/>
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <Text style={styles.CapTextStyle}>Price</Text>    
                    </View>

                    <View style={{marginTop:"5%"}}>
                        <Text style={styles.SubTextStyle}>3.000$ - 4.500$</Text>    
                    </View>

                    <View style={{marginTop:"2%"}}>
                          <Slider max={100000} min={0} thumbcolor={"#FF7448"} trackcolor={"#111847"}/>
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <Text style={styles.CapTextStyle}>Area</Text>    
                    </View>

                    <View style={{marginTop:"5%"}}>
                        <Text style={styles.SubTextStyle}>min - max</Text>    
                    </View>

                    <View style={{marginTop:"2%"}}>
                          <Slider max={200000} min={0} thumbcolor={"#FF7448"} trackcolor={"#111847"}/>
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <Text style={styles.CapTextStyle}>Published Date</Text>    
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <SelecetBox
                            popupTitle={'Choose date'}
                            title={"Choose date"}
                            cancel={"Cancel"}
                            select={"Select"}
                            search={"Search"}
                            noData={"No Data"}
                            showSearchBox={false}  
                            />
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <Text style={styles.CapTextStyle}>Property type</Text>    
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <SelecetBox
                            popupTitle={'Property type'}
                            title={"Property type"}
                            cancel={"Cancel"}
                            select={"Select"}
                            search={"Search"}
                            noData={"No Data"}
                            showSearchBox={false}  
                            />
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <Text style={styles.CapTextStyle}>Room</Text>    
                    </View>

                    <View style={{marginTop:"8%"}}>
                        <RoomCountButton/>  
                    </View>

                    <View style={{marginTop:"15%"}}>
                        <SearchButton text={"Search 1.260 ads"} funk={this.goListing}/>    
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )}                            
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:"5%"
    },

    CapTextStyle:{
        color:"#111847",
        fontFamily:"Gordita",
        fontWeight:"700",
        fontSize:22
    },

    SubTextStyle:{
        color:"#888CA4",
        fontFamily:"Gordita",
        fontWeight:"400",
        fontSize:12
    }
});


