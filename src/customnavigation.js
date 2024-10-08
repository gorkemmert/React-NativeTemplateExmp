import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Favourites from "./screens/Favourites";
import Settingscreen from "./screens/Settingscreen";
import RecentSearches from "./screens/RecentSearches";
import Filter from "./screens/Filter";
import Listings from "./screens/Listings";
import {View, Text, Image, TouchableOpacity} from "react-native";
import Country from "./screens/Country";
const Stack = createStackNavigator(); 


const ScreenCountryNavigator=() =>{
  return(
          <Stack.Navigator>
          <Stack.Screen
              name="Screen_Country"
              component={Country}
              options={
                  {   
                      title:null,
                      headerStyle:{shadowColor: 'transparent'},
                      headerTitle: () => ( 
                      <View style={{justifyContent:"center", alignItems:"center" }}>
                          <Image
                          style={{ width: 104, height: 24}}
                          source={require('../assets/images/Logo.png')}
                          resizeMode='contain'
                          />
                      </View>
                    ),
                      cardStyle:{
                          backgroundColor:"white",
                    },
                      
                  }
              }
          />

      </Stack.Navigator>
  )
}

export {ScreenCountryNavigator}




const ScreenHomeNavigator=() =>{
    return(
            <Stack.Navigator>
            <Stack.Screen
                name="Screen_Home"
                component={Home}
                options={
                    {   
                        title:null,
                        headerStyle:{shadowColor: 'transparent'},
                        headerTitle: () => ( 
                        <View style={{justifyContent:"center", alignItems:"center" }}>
                            <Image
                            style={{ width: 104, height: 24}}
                            source={require('../assets/images/Logo.png')}
                            resizeMode='contain'
                            />
                        </View>
                      ),
                        cardStyle:{
                            backgroundColor:"white",
                      },
                        
                    }
                }
            />

        </Stack.Navigator>
    )
}

export {ScreenHomeNavigator}

const ScreenRecentNavigator=({navigation}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Screen_RecentSearches"
                component={RecentSearches}
                options={
                    {
                      title:null,
                      headerStyle:{shadowColor: 'transparent',},
                      headerTitle: () => ( 
                          <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{color:"#111847", fontFamily:"Gordita", fontSize:22, fontWeight:"700"}}>Recent Searches</Text>
                          </View>
                      ),
                      headerLeft: () => ( 
                        <View style={{ width: 60, height: 60, justifyContent:"center", alignItems:"center", marginLeft:24 }}>
                          <TouchableOpacity onPress={()=>navigation.goBack() }>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../assets/icons/Arrow-Left.png')}
                                resizeMode='contain'
                            />
                          </TouchableOpacity>
                        </View>
                      ),
                     
                      cardStyle:{
                          backgroundColor:"white",
                      },
                    }
                }
            />
        </Stack.Navigator>
    )
}
export {ScreenRecentNavigator}


const ScreenFilterNavigator=({navigation}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Screen_Filter"
                component={Filter}
                options={
                    {
                      title:null,
                      headerStyle:{shadowColor: 'transparent',},
                      headerTitle: () => ( 
                          <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{color:"#111847", fontFamily:"Gordita", fontSize:22, fontWeight:"700"}}>Filter</Text>
                          </View>
                      ),
                      headerLeft: () => ( 
                        <View style={{ width: 60, height: 60, justifyContent:"center", alignItems:"center",  marginLeft:24 }}>
                          <TouchableOpacity onPress={()=>navigation.goBack() }>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../assets/icons/Arrow-Left.png')}
                                resizeMode='contain'
                            />
                          </TouchableOpacity>
                        </View>
                      ),

                      headerRight: () => ( 
                        <View style={{ width: 60, height: 60, justifyContent:"center", alignItems:"center", marginRight:24 }}>
                          <TouchableOpacity >
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../assets/icons/Reset.png')}
                                resizeMode='contain'
                            />
                          </TouchableOpacity>
                        </View>
                      ),
                     
                      cardStyle:{
                          backgroundColor:"white",
                      },
                    }
                }
            />
        </Stack.Navigator>
    )
}
export {ScreenFilterNavigator}


const ScreenListingNavigator=() =>{
  return(
      <Stack.Navigator>
          <Stack.Screen
              name="Screen_Listing"
              component={Listings}
              
              options={
                  {
                    headerTransparent:true,
                    title:null,
                    headerStyle:{shadowColor: 'transparent'},  
                    cardStyle:{
                        backgroundColor:"white",
                    },
                  }
              }
          />
      </Stack.Navigator>
  )
}
export {ScreenListingNavigator}


const ScreenFavouritesNavigator=() =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Screen_Favourites"
                component={Favourites}
                options={
                    {
                      title:null,
                      headerStyle:{shadowColor: 'transparent',},
                      headerTitle: () => ( 
                          <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{color:"#111847", fontFamily:"Gordita", fontSize:22, fontWeight:"700"}}>Favourites</Text>
                          </View>
                      ),
                     
                      cardStyle:{
                          backgroundColor:"white",
                      },

                      headerRight: () => ( 
                        <View style={{ width: 60, height: 60, justifyContent:"center", alignItems:"center", marginRight:24 }}>
                          <TouchableOpacity>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../assets/icons/Delete.png')}
                                resizeMode='contain'
                            />
                          </TouchableOpacity>
                        </View>
                      )
                    }
                }
            />
        </Stack.Navigator>
    )
}
export {ScreenFavouritesNavigator}

const ScreenSettingsNavigator=() =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Screen_Settings"
                component={Settingscreen}
                options={
                    {
                        title:null,
                        headerStyle:{shadowColor: 'transparent',},
                        headerTitle: () => ( 
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                              <Text style={{color:"#111847", fontFamily:"Gordita", fontSize:22, fontWeight:"700"}}>Settings</Text>
                            </View>
                        ),
                        cardStyle:{
                            backgroundColor:"white",
                        },                
                    }
                }
            />
        </Stack.Navigator>
    ) 
}

export {ScreenSettingsNavigator}

