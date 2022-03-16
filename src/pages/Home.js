import React,{useState, useEffect} from "react";
import firebaseApp from "../firebase";
import {getAuth, signOut} from "firebase/auth";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from "firebase/firestore";
 

const Home = () => {

    return(
        <h1>HOME</h1>
    )
}

export default Home;