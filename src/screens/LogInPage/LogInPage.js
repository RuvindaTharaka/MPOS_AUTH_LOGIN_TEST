/* eslint-disable prettier/prettier */
import React from 'react';
import { useState,useContext } from 'react';
import { Text,View,Button,TextInput } from 'react-native';
import { AuthContext, AuthProvider } from '../../context/AuthContext';

function LogInPage({navigation}) {

    const [username, setUsername] =  useState('');
    const [password, setPassword] =  useState('');
    const val = useContext(AuthContext);

    
    const logInuser = async() => {
        let resp =await AuthProvider.login(username,password);
        console.log ("resp : "+resp);
    } 

    return (
       <View style={{ display:'flex', alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
            <View style={{ width: '80%'}}>
                <Text>{val}</Text>
                <TextInput style={{ marginBottom: 12, borderWidth:1,borderColor: "#bbb",borderRadius: 5,paddingHorizontal: 14}} placeholder = "Username" value={username} onChangeText = {(e)=> {setUsername(e)}}/>
                <TextInput style={{ marginBottom: 12, borderWidth:1,borderColor: "#bbb",borderRadius: 5,paddingHorizontal: 14}} placeholder = "Password" secureTextEntry = {true} value={password} onChangeText = {(e)=> {setPassword(e)}}/>
                <Button title="LOGIN" onPress={logInuser} style={{borderColor:'black',borderWidth:1,margin:10,padding:10,backgroundColor:'blue'}} >Log In</Button>   
            </View>
       </View>
    )
}

export default LogInPage;

