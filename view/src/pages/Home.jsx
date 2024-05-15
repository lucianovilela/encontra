import React, { useEffect } from 'react'
import {  Link } from "react-router-dom";
export default function Home () {
    useEffect(() => {
        console.log('Home loaded', new Date() );
    }, []);
    return (
        <div>     <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/formUpload">Form</Link>
                </li>
               
            </ul>
        </nav></div>
    )
}

