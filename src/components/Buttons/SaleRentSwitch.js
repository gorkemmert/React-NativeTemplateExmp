import React from "react";
import PropTypes from 'prop-types';
import {View} from "react-native";

import SwitchSelector from "react-native-switch-selector";
import FilterStore from '../../Store/FilterStore';
import { observer } from 'mobx-react';
@observer


export default class SaleRentSwitch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'',
        };
    }
    
    setType(value){
        this.setState({type: value});
        FilterStore.setSaleRentSwitch(value)
    }

    render(){
        const { sale,rent} = this.props
        return(
            <View>
                <View padder>
                <SwitchSelector
                    height={50}
                    backgroundColor="rgba(17,24,71,1)"
                    textColor="rgba(136,140,164,1)"
                    fontSize={12}
                    
                    textStyle={{
                        fontSize: 12,
                        fontFamily: "Gordita",
                        fontWeight: "500",
                        color: "rgba(136,140,164,1)",
                    }}

                    selectedTextStyle={{
                        fontSize: 12,
                        fontFamily: "Gordita",
                        fontWeight: "500",
                        lineHeight: 20,
                        color: "rgba(255, 255, 255, 1)",
                    }}
                    selectedColor="rgba(255, 255, 255, 1)"
                    buttonColor="rgba(255,116,72,1)"
    
                    options={[
                            { label: sale, value: "sale"},
                            { label: rent, value: "rent" }, 
                    ]
                    }
                    hasPadding
                    initial={0}
                    
                    onPress={value => this.setType(value)}

                    /> 
                </View>
                
            </View>
        )
    }
}

SaleRentSwitch.propTypes = {                      
    sale:PropTypes.string.isRequired,  
    rent:PropTypes.string.isRequired,                                                
 };
 
 SaleRentSwitch.defaultProps = {          
    sale:'Sale',
    rent:"Rent"              
 }