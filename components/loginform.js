import React from 'react'
import {useState} from 'react';
function LoginForm({submitHandler}) {

    // const [credintials, setCredintials]=useState({username:'', password:''});
    // const usernameChangeHandler =(e)=>{
    //     console.log(e.target.value);
    //     setCredintials({username:e.target.value})
    //     console.log(credintials);
    // }

    // const passwordChangeHandler =(e)=>{
    //     console.log(e.target.value);
    //     setCredintials({...credintials, password:e.target.value});
    //     console.log(credintials);
    // }

    return (
       
        <form className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-red-200 border-2 border-red-400 rounded-lg text-md" onSubmit={submitHandler} method='post'>
            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="username">User Name</label>
                <input className="px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" placeholder="User Name"  />
            </div>

            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="password">Password</label>
                <input className="px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" placeholder="password"/>
            </div>

            <button className="px-3 py-4 mt-8 uppercase bg-red-500 rounded text-green hover:bg-red-600 text-red-50" type="submit">Sign In</button>

        </form>
    )
}

export default LoginForm
