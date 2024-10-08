import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet,Text,View,Image ,Dimensions} from "react-native";

import { ScreenHomeNavigator,ScreenFavouritesNavigator,ScreenSettingsNavigator, ScreenRecentNavigator, ScreenFilterNavigator, ScreenListingNavigator,ScreenCountryNavigator } from "./customnavigation";

const Tab = createBottomTabNavigator();

import HomeStore from "../src/Store/HomeStore";
import { observer } from 'mobx-react';

@observer

export default class Tabs extends React.Component{

    render(){
        

        return(
        <Tab.Navigator
            
            tabBarOptions={{
                showLabel:false,
                
                style:{
                    
                    position:'absolute',
                    bottom:'3%',
                    left:'12%',
                    right:'12%',   
                    elevation:0,
                    backgroundColor:'#ffffff',
                    borderRadius:60,
                    
                    // height:Math.round((64 / Dimensions.get('window').height) * 100).toString()+"%",  
                    height:64,
                    ...styles.shadow

                }
            }}
            
        >
    
            <Tab.Screen name="Screen_Country" component={ScreenCountryNavigator} options={{      
                tabBarVisible: false,  

                tabBarButton:()=>(
                    <View style={{display:"none"}}></View>
                )
            }} />
            

            <Tab.Screen  name="Screen_Home" component={ScreenHomeNavigator}  options={{  
                    
                tabBarVisible: HomeStore.visible,     
                
                tabBarIcon:({focused}) => (
                    
                    <View style={{flex:1,marginTop:'20%'}}>
                        <View >
                            <Text
                                style={{
                                    display: focused ? 'flex' : 'none',
                                    fontFamily:'Gordita',
                                    color:'#111847',
                                    fontSize:14,
                                    fontWeight:'bold'        
                            }}
                            >{focused ? 'Search' : ''}</Text>
                            <View style=
                            {[styles.lineStyle,{display: focused ? 'flex' : 'none' ,left:'8%'}]}
                            />
                        </View>
                        <Image
                            source={require('../assets/icons/Home.png')}
                            resizeMode='contain'
                            style={{
                                display: focused ? 'none' : 'flex',
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#140C07'

                            }}
                        />
                    </View> 
                    
                ),
            }} />


            <Tab.Screen name="Screen_RecentSearches" component={ScreenRecentNavigator} options={{      
                tabBarVisible: false,  
                tabBarButton:()=>(
                    <View style={{display:"none"}}></View>
                )
            }} />

            <Tab.Screen name="Screen_Filter" component={ScreenFilterNavigator} options={{      
                tabBarVisible: false,  
                tabBarButton:()=>(
                    <View style={{display:"none"}}></View>
                )
            }} />

            <Tab.Screen name="Screen_Listing" component={ScreenListingNavigator} options={{      
                tabBarVisible: HomeStore.visible,  
                tabBarButton:()=>(
                    <View style={{display:"none"}}></View>
                )
            }} />

            <Tab.Screen name="Screen_Favourites" component={ScreenFavouritesNavigator} options={{
                tabBarVisible: HomeStore.visible,  
                tabBarIcon:({focused}) => (
                    <View style={{flex:1,marginTop:'20%'}}>
                        <View >
                            <Text
                                style={{
                                    display: focused ? 'flex' : 'none',
                                    fontFamily:'Gordita',
                                    color:'#111847',
                                    fontSize:14,
                                    fontWeight:'bold'        
                            }}
                            >{focused ? 'Favourites' : ''}</Text>
                            <View style=
                            {[styles.lineStyle,{display: focused ? 'flex' : 'none', left:'20%'}]}
                            />
                        </View>
                        
                        <Image
                            source={require('../assets/icons/Favourites2.png')}
                            resizeMode='contain'
                            style={{
                                display: focused ? 'none' : 'flex',
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#140C07'

                            }}
                        />
                    </View> 
                ),
            }}/>
            <Tab.Screen name="Screen_Settings" component={ScreenSettingsNavigator} options={{
                tabBarVisible: HomeStore.visible,    
                tabBarIcon:({focused}) => (
                    <View style={{flex:1,marginTop:'20%'}}>
                        <View >
                            <Text
                                style={{
                                    display: focused ? 'flex' : 'none',
                                    fontFamily:'Gordita',
                                    color:'#111847',
                                    fontSize:14,
                                    fontWeight:'bold'        
                            }}
                            >{focused ? 'Settings' : ''}</Text>
                            <View style=
                            {[styles.lineStyle,{display: focused ? 'flex' : 'none',left:'13%'}]}
                            />
                        </View>
                        <Image
                            source={require('../assets/icons/Setting.png')}
                            resizeMode='contain'
                            style={{
                                display: focused ? 'none' : 'flex',
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#140C07'

                            }}
                        />
                    </View>
                ),
            }}/>
        </Tab.Navigator>
        )
    }
}

const styles= StyleSheet.create({
    shadow: {
        shadowColor: '#979797',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.5,
        shadowRadius:3.5,
        elevation:5,
       
       
    },
    lineStyle:{
        borderWidth: 1.7,
        borderColor:'#FF488A',
        margin:10,
        position: 'absolute', 
        top: '63%',
        // left:'11%',  inline
        
        width: 12,
        alignContent: 'center',
        justifyContent: 'center',
   }
});
