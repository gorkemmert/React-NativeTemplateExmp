import React from 'react';
import {Text , StyleSheet, View } from 'react-native';

import Modal from "react-native-modalbox";  

import Slider from "../Slider";
import SearchButton from "../Buttons/SearchButton";

import HomeStore from '../../Store/HomeStore'; 
import { observer } from 'mobx-react';
@observer

export default class PriceModals extends React.Component
{
    render(){                                      
        return <View>

                <Modal    
                    isOpen={HomeStore.priceVisible}              
                    isVisible={false}                  
                    animationInTiming={300}            
                    animationOutTiming={300}             
                    coverScreen={true}                
                    swipeToClose={true}                  
                    onClosed={()=> HomeStore.setPriceVisible(false)}      
                    onOpened={()=> {}}       
                    style={[styles.modal]} 
                    position={"top"}                     
                    backdrop={true}                    
                    isDisabled={false}         
                    entry={"center"}                        
                    swipeArea={40}                     
                    ref={"modal3"}  
                    backButtonClose={false}
                    backdropColor={"gray"}
                    backdropOpacity= {0.5}
                    backdropPressToClose={true}
                    swipeThreshold={20}
                    >         

                    <View style={{flex:1}}>
                        <View style={{backgroundColor:"#111847",height:60, width:"94%", borderTopEndRadius:12, borderTopStartRadius:12, marginLeft:"3%"}}>                                     
                            <Text style={{color:"#888CA4", fontFamily:"Gordita", fontSize:10, fontWeight:"400", paddingLeft:"5%", marginTop:"3%"}}>Price</Text>
                            <Text style={{color:"#FFFFFF", fontFamily:"Gordita", fontSize:16, fontWeight:"500", paddingLeft:"5%", marginTop:"3%"}}>3000$ - 4.500$</Text>
                        </View>  

                        <View style ={{backgroundColor:"#111847",height:155, width:"100%", borderRadius:12, justifyContent:"center", alignContent:"center"}}>
                            <View style={{marginHorizontal:"5%"}}>
                                <Slider max={1000} min={0} trackcolor={"white"} thumbcolor={"rgba(255,72,138,1)"}/>
                            </View>
                            <View style={{marginHorizontal:"5%", marginBottom:"5%"}}>
                                <SearchButton text={"Done"}/>
                            </View>
                        </View>
                    </View>

                </Modal>
            </View>
    }
}


const styles = StyleSheet.create({           
    modal:{
        height:216,
        width:"90%",
        backgroundColor: "transparent",
        marginTop:"67%"
    }
})


