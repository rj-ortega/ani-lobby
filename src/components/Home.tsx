import React from 'react'

export default function Home() {
    return (
        <>
            <video autoPlay muted loop className="myVideo">
                <source src="/assets/yourname.mp4" type="video/mp4"></source>
            </video>
        </>
    )
}