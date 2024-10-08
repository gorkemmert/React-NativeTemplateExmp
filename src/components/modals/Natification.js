import React from 'react';
import {Text , TouchableOpacity , StyleSheet, View,Linking} from 'react-native';
import Modal from "react-native-modalbox";          
import SettingsSwitch from '../Buttons/SettingsSwitch';
import Check from '../CheckBox';
import SearchInput from '../SearchInput';

import RecentStore from '../../Store/RecentStore';
import { observer } from 'mobx-react';
@observer


export default class ModalBox extends React.Component
{   
  
    state={
       durum:false
    }
    
   render(){                                      
       return <View>

               <Modal   
                   isOpen={RecentStore.natificationVisible}              
                   isVisible={false}                  
                   animationInTiming={300}            
                   animationOutTiming={300}            
                   coverScreen={true}                
                   swipeToClose={true}                  
                   onClosed={()=> RecentStore.setNatification(false)}      
                   onOpened={()=> {}}       
                   style={[styles.modal2,{height:RecentStore.mail ? 506:426}]}
                   position={"center"}                    
                   backdrop={true}                    
                   isDisabled={false}        
                   entry={"center"}                        
                   swipeArea={40}                    
                   ref={"modal4"}  
                   backButtonClose={false}
                   backdropColor={"gray"}
                   backdropOpacity= {0.5}
                   backdropPressToClose={true}
                   swipeThreshold={20}
                   >  
                   <View style={styles.NatContainer}>
                        <View >
                            <View style={styles.titleContainer}>
                                <View style={styles.maintitle}>
                                    <Text style={{color:'#111847',fontFamily:'Gordita',fontWeight:'900',fontSize:18}}>Natification</Text>
                                </View>
                                <View style={styles.midtitle}>
                                    <Text style={{color:'#888CA4',fontFamily:'Gordita',fontWeight:'400',fontSize:14}}>Notify me of new ads in</Text>
                                </View> 
                            </View>
                            <View style={styles.switchContainer}>
                                <View style={styles.via}>   
                                    <Text style={{color:'#111847',fontFamily:'Gordita',fontWeight:'900',fontSize:14}}>Via:</Text> 
                                </View>

                                <View style={[styles.push,{marginBottom:34}]}>
                                    <View style={{marginLeft:0}}>
                                        <SettingsSwitch text={"push"}></SettingsSwitch>
                                    </View>
                                    <View style={styles.switchtextC}>
                                        <Text style={styles.text}>Push natification</Text>
                                    </View>
                                </View>
                                <View style={styles.push}>
                                    <View>
                                    <SettingsSwitch text={"mail"}></SettingsSwitch>
                                    
                                    </View>
                                    <View style={styles.switchtextC}>
                                        <Text style={styles.text} >E-mail</Text>
                                    </View>
                                </View>
                                <View style={[styles.emailContainer,{display:RecentStore.mail ? 'flex' : 'none'}]}>
                                    <SearchInput placeholder={"Enter email for alert"} textborder="transparent"></SearchInput>
                                </View>
                                <View style={styles.checkboxContainer}>
                                    <View style={styles.checkbox}>
                                        <Check></Check>
                                    </View>
                                    <View>
                                        <Text style={styles.text}>I consept to privacy agreements</Text>
                                    </View>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center',marginTop:16}}>
                                    <Text onPress={()=>Linking.openURL('https://corporate.waa2.com/privacy-policy')} style={{color:'#39A0FF',fontFamily:'Gordita',fontSize:14,fontWeight:'500',lineHeight:20}}>a link to legal pages</Text>
                                </View>  
                                  
                            </View>
                        </View>  
                        <View style={{marginBottom:16}}> 
                            <View style={styles.buttonContainer}>

                                <View style={[styles.ButtonC]}>
                                    <TouchableOpacity 
                                        onPress={()=>this.refs.modal4.close()}
                                        style={[styles.button,{backgroundColor:'#FFFFFF'}]} >
                                        <Text style={{fontFamily:'Gordita',fontSize:16,fontWeight:'500'}}>Cancel</Text>
                                    </TouchableOpacity>
                                </View> 
                                <View style={[styles.ButtonC]}>
                                    <TouchableOpacity 
                                        onPress={()=>this.refs.modal4.close()}
                                        style={[styles.button,{backgroundColor:'#111847'}]}>
                                        <Text style={{color:"#FFFFFF",fontFamily:'Gordita',fontSize:16,fontWeight:'500'}}>Next</Text>
                                    </TouchableOpacity>
                                </View>  

                            </View>
                        </View> 
                             
                   </View>

               </Modal>
               
           </View>
   }
}


const styles = StyleSheet.create({    
   modal2:{
       height:426,
       width:"80%",    
       backgroundColor: '#FFFFFF',
       borderRadius:16,
       alignItems:'center'
    },
    NatContainer:{
      width:'90%',
      height:'100%',
      backgroundColor:'#FFFFFF',
      justifyContent:'space-between',
      flexDirection:'column'
    },
    titleContainer:{
      alignItems:'center'
    },
    switchContainer:{
      marginTop:24
    },
    buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-around'
    },
    maintitle:{
        marginTop:19
    },
    midtitle:{
        marginTop:15
    },
    via:{
        marginBottom:15,
        marginLeft:2
    },
    push:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    checkboxContainer:{
        marginTop:44,
        flexDirection:'row'
    },

    text:{
        color:'#111847',
        fontFamily:'Gordita',
        fontWeight:'600',
        fontSize:14
    },
    switchtextC:{
        marginLeft:'5%'
    },
    checkbox:{
        marginRight:12,
        marginLeft:2
    },

    button:{
        borderRadius:36,
        borderWidth:1,
        borderColor:"111847",
        justifyContent:"center",
        alignItems:"center",
        height:50
    },
    ButtonC:{
        width:'40%',
        
    },
    emailContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,      
    }   
   
})
