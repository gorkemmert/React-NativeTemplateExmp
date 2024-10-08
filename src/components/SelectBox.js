import React, {Component} from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';    

import Select2 from "react-native-select-two";   

import HomeStore from '../Store/HomeStore';

export default class SelectBox extends Component
{
    render() {
        const {popupTitle, title, cancel, select, search, noData, showSearchBox, Data} = this.props;
        const {funk} = this.props;
        return (
        <View>

            <Select2
                isSelectSingle={true}             
                colorTheme={"#111847"}               
                popupTitle={popupTitle}   
                title={title}        
                style={{borderRadius:20, height:65, borderColor:"#E8E8E8"}}          

                onSelect={data => {
                    HomeStore.setIndex(data.toString()),
                    funk(data.toString())                 
                }}

                onRemoveItem={data => {           
                    console.warn('remove'+ data); 
                }}

                cancelButtonText={cancel}       
                selectButtonText={select}          
                searchPlaceHolderText={search}  
                data={Data}                       
                listEmptyTitle={noData}     
                showSearchBox={showSearchBox}              

                modalStyle={{                     
                    backgroundColor:"white",
                    flex:1
                }}

                selectedTitleStyle={{fontFamily:'Gordita',fontSize:14,color:'#111847',lineHeight:19.95,fontWeight:'600'}}
                 
            />
        </View>
    )}
}

SelectBox.propTypes = {                      
    popupTitle:PropTypes.string.isRequired,  
    title:PropTypes.string.isRequired,   
    cancel:PropTypes.string.isRequired,  
    select:PropTypes.string.isRequired,  
    search:PropTypes.string.isRequired,   
    noData:PropTypes.string.isRequired,    
    showSearchBox:PropTypes.bool.isRequired,
    Data:PropTypes.array.isRequired,
    funk:PropTypes.func.isRequired                                   
};

SelectBox.defaultProps = {          
    popupTitle:'',
    title:"",
    cancel:"Cancel",
    select:"Select",
    search:"Search",
    noData:"No Data",
    showSearchBox:true,
    Data:[
        {id:1,name:'Australia'},     
        {id:2,name:'America'},    
        {id:3,name:'England'}, 
    ],
    funk:(data) => console.warn(data)
}

