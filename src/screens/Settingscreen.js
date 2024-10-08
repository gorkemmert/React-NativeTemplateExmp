import React from "react";
import {StyleSheet,View,Text,SafeAreaView,ScrollView,TouchableOpacity,Linking,useSafeAreaInsets} from "react-native";

import SearchButton from "../components/Buttons/SearchButton";
import SelectBox from "../components/SelectBox";
import SettingsSwitch from "../components/Buttons/SettingsSwitch";
import Singleselect from "../components/SelectBox2";
import Login from "../components/modals/Login"

import HomeStore from '../Store/HomeStore';
import LoginStore from '../Store/LoginStore';
import InternetControl from "../control/internetControl"

export default class Settingscreen extends React.Component{

    goHomeAndSelectCountry = async (data)=>{
        await AsyncStorage.setItem('Country', data); 
        
    }



    render(){
        
        return(
            
            <SafeAreaView>
                <InternetControl/>
                <ScrollView 
                
                onScrollBeginDrag={() => HomeStore.setVisible(false)} onScrollEndDrag={() => HomeStore.setVisible(true)} showsVerticalScrollIndicator ={false}>
                <View style={styles.Container}>
                    
                    <View style={styles.title2}>
                        <Text style={styles.titletext}>
                            Account
                        </Text>
                    </View>
                    <View style={styles.ButtonC}>
                        <SearchButton text={"Create Account or Sing In"} funk={()=> LoginStore.setVisible(true)}></SearchButton>
                    </View>
                    <Login/>

                    <View style={styles.title2}>
                        <Text style={styles.titletext}>
                            Preferences
                        </Text>
                    </View>
                    <View style={styles.SelectC}>
                        <SelectBox popupTitle={"Select Country"} title={"Select Country"} funk={this.goHomeAndSelectCountry}></SelectBox>
                    </View>
                    
                    <View style={styles.PushC}>

                        <View style={{width:'83%',padding:8}}>
                            <View>
                                <Text style={{fontFamily:'Gordita',fontSize:14,color:'#111847',lineHeight:19.95,fontWeight:'600'}}>Push notification</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily:'Gordita',fontWeight:'800',fontSize:10,lineHeight:14.25,color:'#CACDD2'}}>Stay in the loop about new features and special deals</Text>
                            </View>
                        </View>
                        <View styles={{width:'17%'}}>
                            <SettingsSwitch text={'push'}></SettingsSwitch>
                        </View>
                        
                    </View>
                    <View style={styles.title2}>
                        <Text style={styles.titletext}>
                            About
                        </Text>
                    </View>
                    <View style={styles.AltButtonC}>
                        <TouchableOpacity>
                            <Text style={styles.alttext}>Manage data privacy settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AltButtonC}>
                        <TouchableOpacity  onPress={()=>Linking.openURL("https://corporate.waa2.com/terms-of-use")} >
                            <Text style={styles.alttext}>Terms of use</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AltButtonC}>
                        <TouchableOpacity  onPress={()=>Linking.openURL("https://corporate.waa2.com/privacy-policy")} >
                            <Text style={styles.alttext}>Privacy policy</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.AltButtonC}>
                        <TouchableOpacity>
                            <Text style={styles.alttext}>Version</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{marginBottom:'20%'}}></View>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
}


const styles = StyleSheet.create({
    Container:{
        
        marginLeft:'5%',
        marginRight:'5%'
        
    },

    titletext:{
        fontFamily:'Gordita',
        fontSize:24,
        color:'#111847',
        fontWeight:'bold'
    },
    title2:{
        alignItems:'flex-start',
        marginBottom:18,
        marginTop:10
    },
    ButtonC:{
        marginBottom:32,
        
    },
    SelectC:{
        marginBottom:18
    },
    PushC:{
        width:'100%',
        borderColor:'#E8E8E8',
        borderWidth:1,
        height:65,
        borderRadius:20,
        flexDirection:'row', 
        marginBottom:32 
    },
    AltButtonC:{
        borderColor:'#E8E8E8',
        borderWidth:1,
        height:65,
        borderRadius:20,
        marginBottom:18,
        padding:10,
        justifyContent:'center'
    },
    alttext:{
        fontFamily:'Gordita',
        fontSize:14,
        color:'#111847',
        lineHeight:22,
        fontWeight:'600',
        
    }


})