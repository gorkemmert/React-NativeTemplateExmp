import React from 'react';
import { StyleSheet, View } from 'react-native';

import Modal from "react-native-modalbox";
import { observer } from 'mobx-react'; 
import { WebView } from 'react-native-webview'; 

import ListingStore from '../../Store/ListingStore'; 
@observer

export default class WebViewModal extends React.Component
{
    render(){   
        const {url} = this.props;                                
        return <View>

                <Modal   
                    isOpen={ListingStore.WebViewVisible}                
                    isVisible={false}                  
                    animationInTiming={300}            
                    animationOutTiming={300}             
                    coverScreen={true}                
                    swipeToClose={true}                  
                    onClosed={()=> ListingStore.setWebViewVisible(false)}       
                    onOpened={()=> {}}       
                    style={[styles.modal]} 
                    position={"center"}                     
                    backdrop={true}                    
                    isDisabled={false}         
                    entry={"center"}                        
                    swipeArea={40}                     
                    ref={"modal5"}  
                    backButtonClose={false}
                    backdropColor={"gray"}
                    backdropOpacity= {0.5}
                    backdropPressToClose={true}
                    swipeThreshold={20}
                    >         
                   
                    <WebView source={{ uri: url }} />

                </Modal>
            </View>
    }
}


const styles = StyleSheet.create({           
    modal:{
        height:"80%",
        width:"85%",
        backgroundColor: "transparent",
    }
})



