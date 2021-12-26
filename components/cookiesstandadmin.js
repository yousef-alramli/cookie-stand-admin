import React from 'react'
import PageHead from './Head'
import Header from './Header'
import LoginForm from './loginform'
import Main from './Main'
import axios from 'axios'
import { useState } from 'react'

const tokenUrl = 'https://coockies-yousef.herokuapp.com/api/token/';

const CookiesStandAdmin = () => {
    const [credintials, setCredintials]=useState({});
    const [token, setToken] = useState('');

    const handleSubmit = (e)  => {
        e.preventDefault();

        const data = {
            "username":e.target.username.value,
            "password":e.target.password.value
        }

                
        axios.post(tokenUrl, data).then(data => {
            // console.log(data.data.access);
            setToken(data.data.access)
        });
        setCredintials({data});
        
    }
    console.log(token);
    return (
        <>
            <PageHead />
            <Header />
            {!token ? <LoginForm submitHandler={handleSubmit} /> : <Main token={token}/>}
            
        </>
    )
}

export default CookiesStandAdmin
