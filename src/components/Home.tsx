import React from 'react'

export default function Home() {
    return (
        <>
            <video autoPlay muted loop className="myVideo">
                <source src="/assets/mia.mp4" type="video/mp4"></source>
            </video>
        </>
    )
}