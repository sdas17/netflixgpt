import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkvalidate} from '../utiles/validate';
import {createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import {auth} from '../utiles/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signinform,setSignform]=useState(false)
    const [errormessage,seterrormessage]=useState(null)
    const navgigate =useNavigate();

    const email =useRef(null)
    const password =useRef(null);
    const name=useRef(null)

    const setEvent =()=>{
        setSignform(!signinform);

    }
    const handlebutton = ()=>{
    //validation in form
    console.log(email.current,password.current);
    const message =checkvalidate(email.current.value,password.current.value)
    console.log(message);
    seterrormessage(message)
    if (message) return null ;
    if (signinform) {
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        navgigate("/")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode +"+"+ errorMessage)

      });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navgigate("/broswer")


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode +"+"+ errorMessage)
      });
    }
    }
  
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="logo"></img>

        </div>
        <form  onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
            <h1 className="font-bold text-3xl py-4">{signinform ? '  Sign up ':"Sign in"}</h1>
              {signinform && (<>            <input type='text'ref={name} placeholder='Name' className='p-4 my-4 w-full bg-slate-500 rounded-lg' />
              </>)}
              <input  ref={email}  type='text' placeholder='Email or Mobile number' className='p-4 my-4 w-full bg-slate-500 rounded-lg' />
              <input type='text'  ref={password} placeholder='Password' className='p-4 my-4 w-full bg-slate-500 rounded-lg' />
                 <p className='text-red-600 font-bold text-sm '>{errormessage}</p>
            <button className='p-4  my-4 bg-red-700 w-full rounded-lg' onClick={handlebutton}>{signinform ? '  Sign up     ':"Sign in"}</button>
            <p className='py-4 cursor-pointer' onClick={setEvent}>{signinform ? "Alredy Registed ? Sign up now": "  are u registed ? or Sign up now            "} </p>

        </form>
    </div>
  )
}

export default Login