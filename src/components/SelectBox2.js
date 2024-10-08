import React,{Component} from "react";
import { View, SafeAreaView } from "react-native";

import RNSingleSelect, {ISingleSelectDataType,} from "@freakycoder/react-native-single-select";

const staticData: Array<ISingleSelectDataType> = [
    { id: 0, value: "Euismod Justo", imageSource: require("../../assets/icons/australia.png") },
    { id: 1, value: "dsads", imageSource: require("../../assets/icons/argentina.png")},
    { id: 2, value: "fsddf", imageSource: require("../../assets/icons/australia.png")},
    { id: 3, value: "hfdhf", imageSource: require("../../assets/icons/argentina.png")},
    { id: 4, value: "gjgfjgffgjg", imageSource: require("../../assets/icons/australia.png")},
    { id: 5, value: "jgfjgfgfj", imageSource: require("../../assets/icons/argentina.png")},
    { id: 6, value: "trrtertr", imageSource: require("../../assets/icons/australia.png")},
    { id: 7, value: "gfgfdgfgdf", imageSource: require("../../assets/icons/argentina.png")},
    { id: 8, value: "ytytyrtytr", imageSource: require("../../assets/icons/australia.png")},
    { id: 9, value: "weeqweqwew", imageSource: require("../../assets/icons/argentina.png")},
    { id: 10, value: "Rilklkjlkj", imageSource: require("../../assets/icons/australia.png")},
    { id: 11, value: "Risujkkhkj", imageSource: require("../../assets/icons/argentina.png")},
    { id: 12, value: "Ridfsdf", imageSource: require("../../assets/icons/australia.png")},
  ];


export default class Singleselect extends Component{
      render(){ 
          return(
              <SafeAreaView>
                  <View style={{}}>
                  <RNSingleSelect
                    data={staticData}
                    width={'100%'}
                    height={65}
                    placeholder={'Country'}
                    
                    buttonContainerStyle={{borderRadius:20,borderWidth:1,borderColor:'#E8E8E8'}}
                    menuBarContainerWidth={'100%'}
                    menuBarContainerHeight={230}
                    
                    disableFilterAnimation={false}
                    placeholderTextColor='#111847'
                    placeholderTextStyle={{fontFamily:'Gordita',fontSize:14,lineHeight:19.95,fontWeight:'600'}}
                    menuBarContainerStyle={{borderWidth:1,borderColor:'#E8E8E8',backgroundColor:'#FFFFFF',borderRadius:20}}
                    menuItemTextStyle={{color:'#111847',fontFamily:'Gordita',fontSize:14,lineHeight:19.95,fontWeight:'600',backgroundColor:'transparent'}}
                    
                    disableAbsolute={false}
                    
                    onSelect={(selectedItem: ISingleSelectDataType) =>
                        console.warn()
                        
                    }
                    
            
                    />
                  </View>
              </SafeAreaView>
          )
      }
  }
  

  
  