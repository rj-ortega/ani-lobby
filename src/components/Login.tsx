import React from 'react'
import { Loader } from 'semantic-ui-react';
import { getStoredUser, logIn } from '../modules/auth';

export default class Login extends React.Component {
    componentDidMount() {
        const user = getStoredUser("temp-user")
        if (user) {
            logIn(user.uid, user.username)
                .then(() => window.location.pathname = "/profile")
            return
        }
    }
    render() {
        return (
            <Loader active inline='centered' />
        );
    }
}