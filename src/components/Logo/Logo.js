import React from 'react'
import './Logo.css'

function Logo() {
    return (
        <div className="logo">
             <img src= {require('../../assets/statusGuruLogo.png')} alt="Status"/>
        </div>
    )
}
export default Logo
