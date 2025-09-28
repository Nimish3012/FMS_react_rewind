import React from 'react';
import { useRouteError } from 'react-router';

// 7.5 error handling
// useRouterError()
// error.status, error.statusText

const Error = () =>
    {
        const err = useRouteError();
        console.log(err);
        
    return(
    <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff8f0',
        color: '#d32f2f',
        fontFamily: 'sans-serif'
    }}>
        <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="Error"
            style={{ width: 120, marginBottom: 24 }}
        />ss
        <h1>Oops! Something went wrong.</h1>
        <h2>{err.status + " : "+ err.statusText}</h2>
        <h4>{err.data}</h4>
        <div style={{ height: 24 }}></div>
        <p>We couldn't process your request.<br /></p>
        <p>
            Please try again or return to the <a href="/" style={{ color: '#388e3c' }}>home page</a>.
        </p>
    </div>
)}
;

export default Error;