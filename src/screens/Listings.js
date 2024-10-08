import React, {Component} from "react";
import {StyleSheet, View, SafeAreaView, FlatList,Text} from "react-native";

import ListingCard from "../components/listingCard";
import SearchInput from "../components/SearchInput";
import SettingBlock from "../components/SettingBlock";

import HomeStore from '../Store/HomeStore';
import InternetControl from "../control/internetControl"
import axios from 'axios';
import FilterStore from "../Store/FilterStore";

import { observer } from 'mobx-react';
@observer
class Listing extends Component
{

    constructor() {
        super();
        this.state = {
          list: [],
          image1:''
        }
      }

    componentDidMount() {
        this.getHomesItem();
        
      }
    
    getHomesItem= () => {

        //https://pixabay.com/api?key=26935219-85c92c451d52a004c265f42aa&per_page=10
        axios.get(FilterStore.apiurl)
          .then(res => {
            this.setState({
              list: res.data
            }, () => console.log(this.state))
          })
      }



    goFilter=()=>{
        this.props.navigation.navigate('Screen_Filter');

    }

    render(){
        
        return(
            <SafeAreaView>
                <InternetControl/>
                <View style={styles.container}>
                    <View style={styles.headerC}>
                        <View style={styles.SearchC}>
                            <SearchInput placeholder={"Istanbul, Türkiye"} textborder={"transparent"}></SearchInput>
                        </View>
                        <View style={styles.BlockC}>
                            <SettingBlock funk={this.goFilter}/>
                        </View>
                    </View>
                    
                    <View style={{marginTop:20}}>
                        <FlatList
                            ListFooterComponent={() => <View style={{marginBottom:'80%'}}></View>}
                            showsVerticalScrollIndicator ={false}
                            onScrollBeginDrag={() => HomeStore.setVisible(false)} 
                            onScrollEndDrag={() => HomeStore.setVisible(true)}
                            keyExtractor={(item)=>item.id.toString()}
                            data={this.state.list}
                            renderItem={({item})=>(
                            <View style={styles.card}>
                                <ListingCard 
                                title={item.title_en[0].charAt(0).toUpperCase() + item.title_en[0].slice(1)} 
                                address={item.city} 
                                room={item.rooms} 
                                bathroom={item.bathrooms}
                                floorarea={item.floor_area}
                                price={item.price.toString()}
                                image={
                                    item.pictures ? item.pictures.split('|')[0] : item.pictures
                                }
                                url={item.url}
                                />  
                            </View>              
                            )}
                        /> 
                        {/* <View style={{marginBottom:'-44%'}}></View> */}
                    </View>   
                    
                </View>       
            </SafeAreaView>
            )
        }
}
export default Listing;

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

