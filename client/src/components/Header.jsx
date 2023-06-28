import React, { useState } from 'react'
import {NavLink, Link, useNavigate} from "react-router-dom";
import { Avatar , Logo } from '../assets';
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import { motion } from "framer-motion";
import { SlideTop, buttonClick } from "../animations";
import { MdLogout, MdShoppingCart } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from '../context/actions/userActions';


const Header = () => {

  const user = useSelector((state) => state.user)
  const[isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const signOut = () => {
      firebaseAuth.signOut().then(() => {
         dispatch(setUserNull());
        navigate("/login", {replace : true});
      })
      .catch((err) => console.log(err));
    } 


    return (
  <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-4 sm:px-8 md:px-20 py-4 sm:py-6">
    <NavLink to={"/"} className="flex items-center justify-center gap-2 sm:gap-4">
      <img src={Logo} className="w-8 sm:w-12 md:w-14" alt="" />
      <p className="font-semibold text-base sm:text-xl"> BYTEHUB</p>
    </NavLink>

    <nav className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
      <ul className="hidden md:flex items-center justify-center gap-8">
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/"}
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/outlets"}
        >
          OUTLETS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/services"}
        >
          SERVICES
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
          to={"/aboutus"}
        >
          ABOUT US
        </NavLink>
      </ul>

      <motion.div {...buttonClick} className="relative cursor-pointer">
        <MdShoppingCart className="text-2xl sm:text-3xl text-textColor" />
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-3 -right-2">
          <p className="text-primary text-xs sm:text-base font-semibold">
            2
          </p>
        </div>
      </motion.div>

      {user ? (
        <>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsMenu(true)}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl cursor-pointer overflow-hidden flex items-center justify-center">
              <motion.img
                className="w-full h-full object-cover"
                src={user?.picture ? user?.picture : Avatar}
                whileHover={{ scale: 1.15 }}
                referrerPolicy="no-referrer"
              />
            </div>

            {isMenu && (
              <motion.div
                {...SlideTop}
                onMouseLeave={() => setIsMenu(false)}
                className="px-4 sm:px-6 py-4 w-36 sm:w-60 bg-lightOverlay backdrop-blur-md rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-2 sm:gap-4"
              >
                <Link
                  className="hover:text-red-500 text-xs sm:text-xl text-textColor"
                  to={"/dashboard/home"}
                >
                  Dashboard
                </Link>

                <Link
                  className="hover:text-red-500 text-xs sm:text-xl text-textColor"
                  to={"/profile"}
                >
                  My Profile
                </Link>

                <Link
                  className="hover:text-red-500 text-xs sm:text-xl text-textColor"
                  to={"/user-orders"}
                >
                  Orders
                </Link>
                <hr />

                <motion.div
                  {...buttonClick}
                  onClick={signOut}
                  className="group flex items-center justify-center px-2 sm:px-3 py-2 rounded-md bg-gray-100 shadow-md hover:bg-gray-300 gap-2 sm:gap-3"
                >
                  <MdLogout className="text-base sm:text-2xl text-textColor group-hover:text-headingColor" />
                  <p className="text-textColor text-xs sm:text-xl group-hover:text-headingColor">
                    Sign Out
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
        </>
      ) : (
        <>
          <NavLink to={"/login"}>
            <motion.button
              {...buttonClick}
              className="px-2 sm:px-4 py-1 sm:py-2 rounded-md shadow-md bg-lightOverlay border border-red-300 cursor-pointer"
            >
              Login
            </motion.button>
          </NavLink>
        </>
      )}
    </nav>
  </header>
);

    };

export default Header
