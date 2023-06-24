import React, { useEffect, useState } from 'react'
import { LoginBg2, Logo } from '../assets';
import { LoginInput } from '../components';
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from '../animations';
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../config/firebase.config";
import { validateUserJWTToken } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { alertInfo, alertWarning } from '../context/actions/alertActions';


const Login = () => {

    const [userEmail, setuserEmail] = useState("");
    const [isSignUp, setisSignUp] = useState(false);
    const [password, setpassword] = useState("");
    const [confirm_password, setconfirm_password] = useState("");

    const firebaseAuth =getAuth(app);
    const provider = new GoogleAuthProvider();

    const navigate= useNavigate();
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user);
    const alert = useSelector((state) => state.alert);

    useEffect (() => {
      if (user) {
        navigate("/", {replace :true});
      }
    }, [user])   ;


    

    const loginWithGoogle = async () => {
      await signInWithPopup(firebaseAuth, provider). then((userCred) => {
        firebaseAuth.onAuthStateChanged((cred) => {
          if(cred){ 
            cred.getIdToken().then((token) => {
              validateUserJWTToken(token).then((data) =>{
                dispatch (setUserDetails(data));
              });
              navigate("/", {replace : true});
            });
          }
        });
      });  
    };


    const signUpWithEmailPass = async () => {
      if((userEmail === "" || password === "" || confirm_password === "" ) ){
          dispatch(alertInfo("Required Fields should not be empty"))
      }
      else {
        if (password === confirm_password) {
            setuserEmail("")
                    setpassword("")
                    setconfirm_password("")
          await createUserWithEmailAndPassword (firebaseAuth, userEmail, password).then(userCred => {
            firebaseAuth.onAuthStateChanged((cred) => {
              if(cred){ 
                cred.getIdToken().then((token) => {
                  validateUserJWTToken(token).then((data) =>{
                    dispatch (setUserDetails(data));
                  });
                  navigate("/", {replace : true});
                });
              }
            });
          })
        }
        else{
          dispatch(alertWarning("Password Doesn't match"))
        }
      }
    };


    //actions
    

    //reducer


    //store-> GLobilised


    //dispatch


    const signInWithEmailPass = async() => {
        if(userEmail !== "" && password !== "" ){
          await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(userCred =>{
            firebaseAuth.onAuthStateChanged((cred) => {
              if(cred){ 
                cred.getIdToken().then((token) => {
                  validateUserJWTToken(token).then((data) =>{
                     dispatch (setUserDetails(data));
                  });
                  navigate("/", {replace : true}); 
                });
              }
            });
          }) 
        }
        else{
          dispatch(alertWarning("Password Doesn't match"))

        }
    }



  return <div className=" w-screen h-screen relative overflow-hidden flex">

    {/* {Background Image} */}
    <img src={LoginBg2} className="w-full h-full object-cover absolute top-0 left-0" 
    alt="" />
    
    {/* {content box} */}
      <div className="flex flex-col items-center bg-lightOverlay w-[60%] md:w-508 h-full z-10 backdrop-blur-sm p-4 px-4 py-12 gap-6">
        {/* {top logo section} */}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} className= "w-10 " alt="" />
            <p className="text-headingColor  font-semibold  "> B Y T E H U B</p>
        </div>


        {/* {welcome text} */}
        <p className="text-3xl font-semibold text-headingColor"> Welcome Back</p>
        <p className="text-xl  text-textColor -mt-6"> {isSignUp ? "Sign Up" : "Sign In"} with the following</p>


        {/* {input section } */}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4   ">
          <LoginInput  placeHolder={"Email Here"} icon={<FaEnvelope className="text-xl text-textColor" />} inputState={userEmail} inputStateFunction={setuserEmail} type="email" isSignUp={isSignUp}  />
        
          <LoginInput  placeHolder={"Password Here"} icon={<FaLock className="text-xl text-textColor" />} inputState={password} inputStateFunction={setpassword} type="password" isSignUp={isSignUp}  />

          {isSignUp && (<LoginInput  placeHolder={"Confirm Password Here"} icon={<FaEnvelope className="text-xl text-textColor" />} inputState={confirm_password} inputStateFunction={setconfirm_password} type="password" isSignUp={isSignUp}  /> )}
        
      {!isSignUp ? (<p> Doesn't have an account. <motion.button {...buttonClick} className="text-red-400 underline curser-pointer bg-transparent"
      onClick={() => setisSignUp(true)}> Create Now </motion.button> 
      </p>)
      
      :(<p> Already have an account. <motion.button {...buttonClick} className="text-red-400 underline curser-pointer bg-transparent" onClick={() => setisSignUp(false)}> Sign-in here</motion.button> 
      </p>)}


        {/* button section */}
        {isSignUp ? <motion.buttion {...buttonClick} className ="w-full items-center px-4 py-2 text-center rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150" onClick={signUpWithEmailPass}> 
          Sign Up
         </motion.buttion> : <motion.buttion {...buttonClick} className ="w-full items-center px-4 text-center py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150 " onClick={signInWithEmailPass}> 
          Sign In
         </motion.buttion> }
        </div>

        <div className='flex item-center justify-between gap-16'>
            <div className='w-24 h-[1px] rounded-md bg-black'></div>
            <p className='text-black '> or</p>
            <div className='w-24 h-[1px] rounded-md bg-black'></div>
         
        </div>       
        

        <motion.div {...buttonClick} className="flex items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl"
        onClick ={loginWithGoogle}
        >
        
        <FcGoogle className="text-3xl" />
        <p className='capitalize text-base text-headingColor'> Sign in with Google </p>
        </motion.div>

      </div>
     </div>;
  

};

export default Login
