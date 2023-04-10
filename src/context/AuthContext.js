import axios from 'axios';
import React,{createContext,useState} from 'react';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const logIn = async (username,password) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('/login', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
   
    return(
        <AuthContext.Provider value={{logIn}}>
             {children}
        </AuthContext.Provider>
    )
}