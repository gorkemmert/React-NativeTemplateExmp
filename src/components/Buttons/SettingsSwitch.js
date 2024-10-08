import React from "react";
import {StyleSheet,View,Switch} from "react-native";

import RecentStore from "../../Store/RecentStore";
import { observer } from 'mobx-react';

@observer

export default class SettingsSwitch extends React.Component{
      
    state = {                                
        toggled: false,              
    };
      
    toggleSwitch = (value,text) => {
        if(text==="mail"){
            this.setState({toggled : value}, RecentStore.setmail(value))
        }else if (text==="push"){
            this.setState({toggled : value},RecentStore.setpush(value) )
        }
  
    }

    render(){
        const { text } = this.props;
        return(
            
            <View style={styles.container}>
                <Switch onValueChange={(value)=>this.toggleSwitch(value,text)}
                        value={this.state.toggled}
                        trackColor={{ false: "#CACDD2", true: "#FF7448" }}
                        thumbColor={this.state.toggled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 1)"}
                        ios_backgroundColor="#CACDD2" 
                        toggle={this.state.toggled} 
                        style={{ transform: [{ scaleX: .9 }, { scaleY: .8 }] }
                        
                    }
                />
            
            </View>          

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }
});