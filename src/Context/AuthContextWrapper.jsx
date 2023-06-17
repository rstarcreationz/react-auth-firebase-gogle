import React, {createContext, useContext, useState} from "react"
import {
   createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
   // onAuthStateChanged,
   // signOut,
   // GoogleAuthProvider,
   // signInWithPopup,
  } from "firebase/auth";
import { auth } from "../Firebase/firebase";
// import { analytics } from "../Firebase/firebase";

const authContext = createContext();

export const AuthContextWrapper = ({children}) => {

   
    const [loginDetail, setLoginDetail] = useState({
        email: "",
        password: ""
    });

    const value = {
        setLoginDetail,
        loginDetail,
        logIn,
        signUp
    }

    function logIn (){
       signInWithEmailAndPassword(auth, loginDetail?.email, loginDetail?.password).then(response=>{
           localStorage.setItem("userToken", response._tokenResponse.idToken);
       });
    }

    function signUp(){
      createUserWithEmailAndPassword(auth, loginDetail?.email, loginDetail?.password).then(response=>{
        localStorage.setItem("userToken", response.idToken);
      })
    }

    return (
        <React.Fragment>
            <authContext.Provider value={value}>
                {children}
            </authContext.Provider>
        </React.Fragment>
    )
}

export function useUserAuth () {
    return useContext(authContext)
}