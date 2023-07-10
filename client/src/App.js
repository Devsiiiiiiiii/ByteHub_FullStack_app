import React, { useEffect, useState } from 'react'
import { getAuth } from "firebase/auth";
import {Route, Routes} from "react-router-dom" 
import { AboutUs, Dashboard, Login, Main, Outlets, Services, VendorLogin } from './containers';
import { app } from './config/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartItems, validateUserJWTToken } from './api';
import { setUserDetails } from './context/actions/userActions';
import { motion } from "framer-motion";
import { fadeInOut } from './animations';
import { Alert, CheckOutSuccess, MainLoader, UsersOrder } from './components';
import { setCartItems } from './context/actions/cartActions';

const App = () => {

  const firebaseAuth =getAuth(app);
  const [isLoading, setisLoading] = useState(false);
  const alert = useSelector(state => state.alert);

  const dispatch = useDispatch()

  useEffect (() => {
    setisLoading(true) ;
    firebaseAuth.onAuthStateChanged((cred) => {
      if(cred) { 
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            if (data) {
              getAllCartItems(data.user_id).then((items) => {
                console.log(items)
                dispatch(setCartItems(items))
              })
            }
            dispatch (setUserDetails(data));
          });
        });
      }

      setInterval(() => {
        setisLoading(false);
      }, 3000);
    });
  }, [])
  return (
  <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center  "> 
        {isLoading && (
          <motion.div {...fadeInOut} className="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full">
            <MainLoader />
          </motion.div>
        )}
        <Routes>
            <Route path="/*" element = {<Main />} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/dashboard/*" element = {<Dashboard/>} />
            <Route path="/outlets/*" element = {<Outlets/>} />
            <Route path="/vendorlogin" element = {<VendorLogin/>} />
            <Route path="/aboutus/*" element = {<AboutUs/>} />
            <Route path="/services/*" element = {<Services/>} />

            <Route path="/checkout-success" element = {<CheckOutSuccess/>} />
            <Route path="/user-orders" element = {<UsersOrder/>} />
            



        </Routes>

        {alert?.type && <Alert type = {alert?.type} message={alert?.message}/>}

  </div>
  );
  
};

export default App
