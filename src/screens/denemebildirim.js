
 import React from 'react';
 import PushNotificationIOS from "@react-native-community/push-notification-ios";
 import PushNotification from "react-native-push-notification";
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 export default class Not extends React.Component{
   componentDidMount(){
       this.createChannels();
       this.createNotifications();
   }
 
   createNotifications=()=>{
     PushNotification.cancelAllLocalNotifications();
     PushNotification.localNotification({
       channelId : "test-channel-id",
       title:'Bu bir Bildirim Başlığı',
       message:'Bu bir Bildirim mesajıdırrrr'
     });
     PushNotification.localNotificationSchedule({
       channelId : "test-channel-id",
       title:'alarm',
       message:"alarm mesajı",
       date:new Date(Date.now()+20*1000),
       allowWhileIdle:true,
     });
   } 
 
   createChannels=()=>{
       PushNotification.createChannel(
         {
           channelId : "test-channel-id",
           channelName:"Test-channel",
         }
       )
   }
 
 render(){
 
     return (
        <View style={{display:"none"}}></View>
     )
   }
 }
 
 
 