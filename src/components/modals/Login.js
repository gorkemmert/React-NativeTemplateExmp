import React from 'react';
import { ScrollView,View,StyleSheet,Text,Image,TextInput,TouchableOpacity,Linking} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from "react-native-modalbox"; 

import LoginStore from '../../Store/LoginStore';
import { observer } from 'mobx-react';
@observer

export default  class Login extends React.Component
{
    constructor() {
        super();
        this.state = {
            hidePassword: true,
            hidePassword2: true,
            register:false, 
            username:"",
            password:"",
            repeat:""
        }
    }

    _handleSubmit = () => {
        const {register, username, password, repeat} = this.state;
        if (register == true){
            alert("Register request: ", username, password, repeat);   // kayıt olmak için istek at
        }    
        else if (register == false){
            alert("Login request: ", username, password);           // login olmak için istek at
        }   
        else{
            alert("Error!")
        }
    };

    facebook = () => {
        alert("Facebook");        
    };

    google = () => {
        alert("Google");        
    };

    render() {
        return (
            <View style={style.body}>
                <Modal   
                   isOpen={LoginStore.visible}              
                   isVisible={false}                  
                   animationInTiming={300}            
                   animationOutTiming={300}            
                   coverScreen={true}                
                   swipeToClose={true}                  
                   onClosed={()=> LoginStore.setVisible(false)}      
                   onOpened={()=> {}}       
                   style={[style.modal]}
                   position={"center"}                    
                   backdrop={true}                    
                   isDisabled={false}        
                   entry={"center"}                        
                   swipeArea={40}                    
                   ref={"modal6"}  
                   backButtonClose={false}
                   backdropColor={"gray"}
                   backdropOpacity= {0.5}
                   backdropPressToClose={true}
                   swipeThreshold={20}
                >  

                <ScrollView showsVerticalScrollIndicator ={false}>

                    <View style={style.header}>
                        {
                        (this.state.register) ?
                        <Text style={style.title}>Sign Up</Text>
                        :
                        <Text style={style.title}>Sign In</Text>
                        }
                    </View>

                    <View style={style.logo_area}>
                        <Image style={{ width:220,height:52}} resizeMode= 'stretch' source={require('../../../assets/images/Main-Logo.png')} />
                    </View>

                    <View style={style.board}>
                        <Formik
                            initialValues={{
                                username:'',
                                password:'',
                                repeat:""
                            }}
                            onSubmit={this._handleSubmit}
                            validationSchema={Yup.object().shape({
                                username:Yup.string().email('Invalid email').required("Username is required."),
                                password:Yup.string().min(8, 'Too Short!').max(16, 'Too Long!').required("Password is required."),
                                repeat:this.state.register ? Yup.string().required("Password is required.").oneOf([Yup.ref('password'), null], 'Passwords must match'):Yup.string(),
                            })}
                        >
                            {({
                                  values,
                                  handleSubmit,
                                  isValid,
                                  isSubmitting,
                                  errors,
                                  handleChange
                            }) => (
                                <View>
                                    {
                                    (this.state.register) ?
                                    <View>
                                        <View style={style.item}>
                                            <TextInput
                                                value={values.username}
                                                onChangeText={handleChange('username')}
                                                placeholder={"Username"}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                maxLength={40}
                                                style={style.input}/>
                                            {(errors.username) && <Text style={style.alert}>{errors.username}</Text>}
                                        </View>

                                        <View style={style.item}>
                                            <TextInput
                                                value={values.password}
                                                onChangeText={handleChange('password')}
                                                placeholder={"Password"}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                maxLength={25}
                                                secureTextEntry={this.state.hidePassword}
                                                style={style.input}/>
                                            <TouchableOpacity onPress={()=>this.setState({hidePassword:!this.state.hidePassword })} style={{position: 'absolute', right:"3%", top:"35%"}}>
                                                <Image  style ={{height:20, width:20}} source={(this.state.hidePassword) ? require('../../../assets/icons/eye-slash.png') : require('../../../assets/icons/eye.png')}/>
                                            </TouchableOpacity>
                                                {(errors.password) && <Text style={style.alert}>{errors.password}</Text>}
                                        </View>

                                        <View style={style.item}>
                                            <TextInput
                                                value={values.repeat}
                                                onChangeText={handleChange('repeat')}
                                                placeholder={"Confirm"}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                maxLength={25}
                                                secureTextEntry={this.state.hidePassword2}
                                                style={style.input}/>
                                            <TouchableOpacity onPress={()=>this.setState({hidePassword2:!this.state.hidePassword2})} style={{position: 'absolute', right:"3%", top:"35%"}}>
                                                <Image  style ={{height:20, width:20}} source={(this.state.hidePassword2) ? require('../../../assets/icons/eye-slash.png') : require('../../../assets/icons/eye.png')}/>
                                            </TouchableOpacity>
                                                {(errors.repeat) && <Text style={style.alert}>{errors.repeat}</Text>}
                                        </View>
                                    </View>

                                    :

                                    <View>
                                        <View style={style.item}>
                                            <TextInput
                                                value={values.username}
                                                onChangeText={handleChange('username')}
                                                placeholder={"Username"}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                maxLength={40}
                                                style={style.input}/>
                                            {(errors.username) && <Text style={style.alert}>{errors.username}</Text>}
                                        </View>

                                        <View style={style.item}>
                                            <TextInput
                                                value={values.password}
                                                onChangeText={handleChange('password')}
                                                placeholder={"Password"}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                maxLength={25}
                                                secureTextEntry={this.state.hidePassword}
                                                style={style.input}/>
                                            <TouchableOpacity onPress={()=>this.setState({hidePassword:!this.state.hidePassword })} style={{position: 'absolute', right:"3%", top:"35%"}}>
                                                <Image  style ={{height:20, width:20}} source={(this.state.hidePassword) ? require('../../../assets/icons/eye-slash.png') : require('../../../assets/icons/eye.png')}/>
                                            </TouchableOpacity>
                                                {(errors.password) && <Text style={style.alert}>{errors.password}</Text>}
                                        </View>
                                    </View>
                                    }

                                    <View style={[style.item, {flexDirection: 'row', justifyContent: 'flex-end'}]}>
                                        <TouchableOpacity onPress={()=>Linking.openURL('https://corporate.waa2.com/privacy-policy')}>
                                            <Text style={{color: '#525464', fontSize: 16}}>Forgot your password?</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={style.item}>
                                        <TouchableOpacity
                                            disabled={!isValid || isSubmitting}
                                            onPress={handleSubmit}
                                            style={[style.button,{backgroundColor: (!isValid || isSubmitting) ? '#ddd' :'#111847' }]}>
                                            {
                                            (this.state.register) ?
                                            <Text style={style.title}>Sign Up</Text>
                                            :
                                            <Text style={style.title}>Login</Text>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                            }
                        </Formik>

                        <View style={[style.item,{marginBottom:"5%",justifyContent:'center',alignItems:'center'}]}>
                            <Text style={{color:'#525464', fontSize:16}}>Or</Text>
                        </View>
                        <View style={style.social}>
                            <TouchableOpacity onPress={()=> this.facebook()} style={style.social_item}>
                                <Image resizeMode= 'stretch' source={require('../../../assets/icons/facebook.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.google()} style={style.social_item}>
                                <Image resizeMode= 'stretch' source={require('../../../assets/icons/google.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={[style.item]}>
                            <TouchableOpacity onPress={()=>this.setState({register:!this.state.register})} style={{ justifyContent:'center',alignItems:'center'}}>
                                {
                                (this.state.register) ?
                                <Text style={{ fontSize:17,fontWeight:'500',color:'#525464'}}>Already a user? <Text style={{ color:'#5dc5dc',fontWeight:'700'}}>Sign In</Text></Text>
                                :
                                <Text style={{ fontSize:17,fontWeight:'500',color:'#525464'}}>Don’t have an account? <Text style={{ color:'#5dc5dc',fontWeight:'700'}}>Sign Up</Text></Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                </Modal>
            </View>
        )
    }
}
const style = StyleSheet.create({
    body:{ backgroundColor:'white',flex:1},
    header:{ padding:"3%",justifyContent:'center',alignItems:'center'},
    title:{fontWeight:'500',fontSize:20,color:'#FFFFFF'},
    logo_area:{ alignItems: 'center',marginTop:"10%", marginBottom:"5%"},
    board:{ marginTop: "6%",paddingHorizontal:"5%"},
    item:{marginBottom:"6%"},
    input:{borderWidth:1,borderColor:'#B0B0C3',backgroundColor: 'white',paddingVertical:"5%",paddingHorizontal:"3%",height:60, borderRadius:10},

    button:{
        backgroundColor:'#111847',
        paddingVertical:"6%",
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:15
    },

    button_text:{textAlign:'center',color:'white',fontSize:17,fontWeight:'700'},
    social:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:"20%",
    },
    social_item:{
        padding:"3%",
        width:100,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    alert:{ color:'red',fontSize:15},

    modal:{
        height:"90%",
        width:"85%",    
        backgroundColor: '#FFFFFF',
        borderRadius:16
     }
})