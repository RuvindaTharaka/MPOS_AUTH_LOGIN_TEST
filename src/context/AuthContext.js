import axios from 'axios';
import React,{createContext,useState} from 'react';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const logIn = (username,password) => {
        axios.post(`${BASE_URL}/login`,{
            username,password
        }).then (res => {
            let userInfo=res.data;
            console.log(userInfo);
            AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
        }).catch(e => {
            console.log(`LogIn Error${e}`);
        });
    }
   
    return(
        <AuthContext.Provider value={{logIn}}>
             {children}
        </AuthContext.Provider>
    )
}