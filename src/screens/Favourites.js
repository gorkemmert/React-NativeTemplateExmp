import React from "react";
import {StyleSheet,View,SafeAreaView, FlatList} from "react-native";
import { useState } from "react/cjs/react.development";

import ListingCard from "../components/listingCard";
import HomeStore from '../Store/HomeStore';
import InternetControl from "../control/internetControl"

export default function Favourites(){

    const [data, setdata] = useState([
        {
            id:"1",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-ph.lamudi.com/static/media/bm9uZS9ub25l/2x2x6x1200x900/93061a1b8e9c71.jpg"       
        },
        {
            id:"2",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"   
        },
        {
            id:"3",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"4",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"5",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"6",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"7",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"8",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"9",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"10",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"11",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"12",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        },
        {
            id:"13",
            title:"International Continental New York Times Square",
            address:"New York - US",
            room:"2",
            bathroom:"1",
            floorarea:"200",
            price:"$200000000",
            image:"https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x5x880x450/059fdfcab35e30.jpg"
            
        }
    ])

    return(
        <SafeAreaView>
            <InternetControl/>
            <View style={styles.container}>
                <FlatList
                    ListFooterComponent={() => <View style={{marginBottom:'20%'}}></View>}
                    showsVerticalScrollIndicator ={false}
                    onScrollBeginDrag={() => HomeStore.setVisible(false)} 
                    onScrollEndDrag={() => HomeStore.setVisible(true)}
                    keyExtractor={(item)=>item.id}
                    data={data}
                    renderItem={({item})=>(
                    <View style={styles.card}>
                        <ListingCard 
                        title={item.title} 
                        address={item.address} 
                        room={item.room} 
                        bathroom={item.bathroom}
                        floorarea={item.floorarea}
                        price={item.price}
                        image={item.image.toString()}
                        />  
                    </View>              
                    )}
                /> 
                
                  
            </View> 
               
        </SafeAreaView>
    )
}


const styles= StyleSheet.create({
    container:{
        marginLeft:'5%',
        marginRight:'5%'  
    },
    card:{
        marginBottom:20
    }
})

