/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {

    return (
        <>
            <header className="py-4 px-5">
                <div className="container mx-auto flex justify-between items-center gap-7">
                    <img src={logo} alt="Logo" className="h-36 w-36" />
                </div>
            </header>
        </>
    )
}

export default Header