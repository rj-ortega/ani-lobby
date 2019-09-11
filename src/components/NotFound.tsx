import React from 'react'
import { Message } from 'semantic-ui-react'

export default function NotFound() {
    return (
        <Message id="not-found" size="huge" floating>
            <Message.Header>404 Not Found</Message.Header>
            <p>Sorry that page doesn't exist</p>
            <p>At least enjoy my favorite Tororo loop</p>
            <img className="gif" src="/assets/tororo.gif" alt="tororo gif" />
        </Message >
    );
}