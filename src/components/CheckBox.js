import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import RecentStore from '../Store/RecentStore';
import { observer } from 'mobx-react';

@observer
export default class Check extends Component {
    constructor() {
      super();
      this.state = {                       
        checked:false       
      }
  }
  render(){
  return (
    <View style={styles.container}>
        <View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={this.state.checked}
              onCheckColor={"white"}     
              onFillColor={"#FF7448"}
              boxType={"square"}
              onValueChange={(value)=>this.setState({checked : value},RecentStore.setCheckbox(value))}  
              animationDuration={0.3}   
              tintColor="#aaaaaa"
              onTintColor='#FF7448'
              style={{width:20,height:20}}
            />
            
          </View>
      </View>
    </View>
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    
  },
});