import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import Broweser from "./Broweser"
import Login from "./Login"
import { useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from '../utiles/firebase';
import { useDispatch } from "react-redux";
import { addUser ,removeUser} from "../utiles/userSlice";


const Body = () => {
  const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Broweser/>
        }
    ])
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayname}=user;
          dispatch(addUser({uid:uid,email:email,displayname:displayname}))
        } else {
          //user is signed out
          dispatch(removeUser({}))
        }
      });
    },[])
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body