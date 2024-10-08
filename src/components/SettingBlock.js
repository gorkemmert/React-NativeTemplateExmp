import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

import Modal from "react-native-modalbox";  

export default class SettingBlock extends Component  
{
    constructor() {
        super();
        this.state = {                       
            state1:true,
            state2:false,    
            state3:false,
            state4:false,
            state5:false,
            state6:false,
            state7:false 
        }
    }

    render(){
        const {funk} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.block}>
                <TouchableOpacity onPress={funk}>
                        <Image source={require('../../assets/icons/Filter.png')} style={styles.ImageStyle} />
                    </TouchableOpacity>
                    <View style = {styles.lineStyle} />
                    <TouchableOpacity onPress={()=>this.refs.modal1.open()}>
                        <Image source={require('../../assets/icons/Sort.png')} style={styles.ImageStyle} />
                    </TouchableOpacity>
                </View>

                    <Modal                 
                    isVisible={false}                  
                    animationInTiming={300}            
                    animationOutTiming={300}             
                    coverScreen={true}                
                    swipeToClose={true}                  
                    onClosed={()=>console.warn('kapandı')}      
                    onOpened={()=>console.warn('açıldı')}       
                    style={[styles.modal]} 
                    position={"top"}                     
                    backdrop={true}                    
                    isDisabled={false}         
                    entry={"top"}                        
                    swipeArea={40}                     
                    ref={"modal1"}  
                    backButtonClose={false}
                    backdropColor={"gray"}
                    backdropOpacity= {0.5}
                    backdropPressToClose={true}
                    swipeThreshold={20}
                    >         

                    <View styles={{flex:1}}>
                        <TouchableOpacity onPress={()=> this.setState({state1:true, state2:false, state3:false, state4:false, state5:false, state6:false, state7:false})}>
                            <Text style={(this.state.state1) ? styles.CaptextStyle : styles.textStyle}>Most Recent</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.setState({state1:false, state2:true, state3:false, state4:false, state5:false, state6:false, state7:false})}>
                            <Text style={(this.state.state2) ? styles.CaptextStyle : styles.textStyle}>Price (Low to high)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.setState({state1:false, state2:false, state3:true, state4:false, state5:false, state6:false, state7:false})}>
                            <Text style={(this.state.state3) ? styles.CaptextStyle : styles.textStyle}>Price (High to low)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.setState({state1:false, state2:false, state3:false, state4:true, state5:false, state6:false, state7:false})}>
                            <Text style={(this.state.state4) ? styles.CaptextStyle : styles.textStyle}>Smallest First</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.setState({state1:false, state2:false, state3:false, state4:false, state5:true, state6:false, state7:false})}>
                            <Text style={(this.state.state5) ? styles.CaptextStyle : styles.textStyle}>Largest First</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.setState({state1:false, state2:false, state3:false, state4:false, state5:false, state6:true, state7:false})}>
                            <Text style={(this.state.state6) ? styles.CaptextStyle : styles.textStyle}>Newest First</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.setState({state1:false, state2:false, state3:false, state4:false, state5:false, state6:false, state7:true})}>
                            <Text style={(this.state.state7) ? styles.CaptextStyle : styles.textStyle}>Oldest First</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </View>
    )}                                
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    block:{
        height:60,
        borderColor:"#E8E8E8",
        borderRadius:20,
        borderWidth:1,
        backgroundColor:"#111847",
        flexDirection:"row",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-around"
    },

    ImageStyle: {
        height: 24,
        width: 24,
        resizeMode : 'stretch',
        alignItems: 'center',
    },


    lineStyle:{
        borderWidth: 0.5,
        borderColor:"#E8E8E8",
        paddingVertical:"20%",
    },

    modal:{
        height:244,
        width:"44%",
        backgroundColor: "white",
        borderWidth:1,
        borderRadius:20,
        borderColor:"#E8E8E8",
        marginTop:"30%",
        marginLeft:"20%",
        marginBottom:"10%"
    },

    CaptextStyle:{
        marginLeft:"8%",
        fontSize:14,
        fontFamily:"Gordita",
        fontWeight:"700",
        marginTop:"10%",
        color:"#140C07"
    },

    textStyle:{
        marginLeft:"8%",
        marginTop:"10%",
        fontFamily:"Gordita",
        fontWeight:"700",
        fontSize:14,
        color:"#CACDD2"
    },

});