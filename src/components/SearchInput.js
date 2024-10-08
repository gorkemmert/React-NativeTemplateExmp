import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types'; 
 
export default class SearchInput extends Component {
   constructor() {
    super();
    this.state = {                       
        text:''
    }
  }
 
  render() {
    const {text} = this.state;
    const {placeholder, color, border, textborder} = this.props
    return (
        <View style={styles.container}>
          <View style={[styles.input, {backgroundColor:color, borderColor:border}]}>
            <Image source={require('../../assets/icons/Search.png')} style={styles.ImageStyle} />
            <TextInput
              style={{borderColor:textborder, alignItems:"center", paddingLeft:"2%", color:"#888CA4", fontWeight:"700", borderRightWidth:50, fontSize:15}}
              value={text}
              onChangeText={(text)=>this.setState({ text })}
              placeholder={placeholder}
              autoCapitalize="none"
              placeholderTextColor={"#888CA4"}
              //multiline={true}
              maxLength={40}
            />
          </View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 60,
    borderRadius: 20,
    margin: 5,
    width:"100%"
  },

  ImageStyle: {
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
      alignItems: 'center'
  },

});

SearchInput.propTypes = {                      
  placeholder:PropTypes.string.isRequired,  
  color:PropTypes.string,  
  border:PropTypes.string,    
  textborder:PropTypes.string,                              
};

SearchInput.defaultProps = {          
  placeholder:'İstanbul, Türkiye',
  color:'#FFFFFF',  
  border:"#E8E8E8", 
  textborder:"#E8E8E8"
}