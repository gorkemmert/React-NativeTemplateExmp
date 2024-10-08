import React from 'react';
import {Text, StyleSheet, View } from 'react-native';
import Modal from "react-native-modalbox";  

import SaleRentButton from "../Buttons/SaleRentButton";

import HomeStore from '../../Store/HomeStore';
import { observer } from 'mobx-react';
@observer

export default class SaleRentModals extends React.Component
{
    render(){     
                            
        return <View>

                <Modal    
                    isOpen={HomeStore.saleVisible}             
                    isVisible={false}                  
                    animationInTiming={300}            
                    animationOutTiming={300}             
                    coverScreen={true}                
                    swipeToClose={true}                  
                    onClosed={()=> HomeStore.setSaleVisible(false)}    
                    onOpened={()=>{}}       
                    style={[styles.modal]} 
                    position={"top"}                     
                    backdrop={true}                    
                    isDisabled={false}         
                    entry={"center"}                        
                    swipeArea={40}                     
                    ref={"modal1"}  
                    backButtonClose={false}
                    backdropColor={"gray"}
                    backdropOpacity= {0.5}
                    backdropPressToClose={true}
                    swipeThreshold={20}
                    >         

                    <View style={{flex:1}}>
                        <View style={{backgroundColor:"#111847",height:60, width:"48%", borderTopEndRadius:12, borderTopStartRadius:12, marginLeft:"3%"}}>                                     
                            <Text style={{color:"#888CA4", fontFamily:"Gordita", fontSize:10, fontWeight:"400", paddingLeft:"10%", marginTop:"7%"}}>Booking type</Text>
                            <Text style={{color:"#FFFFFF", fontFamily:"Gordita", fontSize:16, fontWeight:"500", paddingLeft:"10%", marginTop:"7%"}}>Sale</Text>
                        </View>  

                        <View style ={{backgroundColor:"#111847",height:108, width:"100%", borderRadius:12, justifyContent:"center", alignContent:"center"}}>
                            <SaleRentButton/>
                        </View>
                    </View>

                </Modal>
            </View>
    }
}


const styles = StyleSheet.create({           
    modal:{
        height:168,
        width:"90%",
        backgroundColor: "transparent",
        marginTop:"51%"
    }
})

 


