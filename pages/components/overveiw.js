import React from 'react'
import Footer from './Footer'
import Header from './Header'

function OverVeiw() {
    let flag = true
    return (
        <div>
            <Header flag = {flag}/>
            <h1>Overveiw</h1>
            <Footer/>
        </div>
    )
}

export default OverVeiw
