import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signinform,setSignform]=useState(false)

    const setEvent =()=>{
        console.log('clicked');
        setSignform(!signinform);

    }
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="logo"></img>

        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
            <h1 className="font-bold text-3xl py-4">{signinform ? 'Sign in':"Sign up"}</h1>
              {signinform && (<>            <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-slate-500 rounded-lg' />
              </>)}
              <input type='text' placeholder='Email or Mobile number' className='p-4 my-4 w-full bg-slate-500 rounded-lg' />
              <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-slate-500 rounded-lg' />
           
            <button className='p-4  my-4 bg-red-700 w-full rounded-lg'>{signinform ? 'Sign in':"Sign up"}</button>
            <p className='py-4 cursor-pointer' onClick={setEvent}>{signinform ? "are u registed or Sign in now ":"New to Netflix Sign up now  "} </p>

        </form>
    </div>
  )
}

export default Login