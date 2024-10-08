import React from "react";
import {StyleSheet,View,SafeAreaView,FlatList} from "react-native";
import { useState } from "react/cjs/react.development";

import RecentCard from "../components/RecentCard";
import Natification from "../components/modals/Natification";
import InternetControl from "../control/internetControl"
export default function RecentSearches(){

    const [data, setdata] = useState([
        
        {
            id:"1",
            title:"International Continental New York Times Square",
            descriptionText:"Whole Apartment - 3 rooms",
            type:'rent',
            price:"$200000000",
            date:"Posted 3 hours ago"
            
        },
        {
            id:"2",
            title:"International Continental New York Times Square",
            descriptionText:"Whole Apartment - 3 rooms",
            type:'rent',
            price:"$200000000",
            date:"Posted 3 hours ago"
            
        },
        {
            id:"3",
            title:"International Continental New York Times Square",
            descriptionText:"Whole Apartment - 3 rooms",
            type:'rent',
            price:"$200000000",
            date:"Posted 3 hours ago"
            
        },
        {
            id:"4",
            title:"International Continental New York Times Square",
            descriptionText:"Whole Apartment - 3 rooms",
            type:'rent',
            price:"$200000000",
            date:"Posted 3 hours ago"
            
        },
        {
            id:"5",
            title:"International Continental New York Times Square",
            descriptionText:"Whole Apartment - 3 rooms",
            type:'rent',
            price:"$200000000",
            date:"Posted 3 hours ago"
            
        },
        {
            id:"6",
            title:"International Continental New York Times Square",
            descriptionText:"Whole Apartment - 3 rooms",
            type:'rent',
            price:"$200000000",
            date:"Posted 3 hours ago"
            
        },
        {
            id:"7",
            title:"International Continental New York Times Square",
            descriptionText:"Whole Apartment - 3 rooms",
            type:'rent',
            price:"$200000000",
            date:"Posted 3 hours ago"
            
        },

    ])

    return(
        <SafeAreaView>
            <InternetControl/>

            <View style={styles.container}>
                
                <View style={{marginTop:20}}>
                    <FlatList
                        showsVerticalScrollIndicator ={false}
                        keyExtractor={(item)=>item.id}
                        data={data}
                        renderItem={({item})=>(
                        <View style={styles.card}>
                            <RecentCard 
                            titleText={item.title} 
                            descriptionText={item.descriptionText} 
                            price={item.price}
                            type={item.type}
                            hour={item.date}

                            />  
                        </View>              
                        )}
                    /> 
                </View>   

                <Natification/>

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
    },
    headerC:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    SearchC:{
        width:'69%',
        justifyContent:'center',
        alignItems:'center'
        
    },
    BlockC:{
        width:'28%',
        marginLeft:'3%',
        justifyContent:'center',
        alignItems:'center',
        
    }
})

