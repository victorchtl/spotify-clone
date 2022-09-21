import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { Component } from 'react'
import { useDispatch } from 'react-redux';
import { LOGIN } from '../slices/userSlice';

interface dataI {
    email: string,
    password: string
}

class AuthService {

    dispatch = useDispatch()

    async login({email, password}: {email: string, password: string}) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                this.dispatch(LOGIN(user))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

}

export default new AuthService();