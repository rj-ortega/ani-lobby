import React from 'react'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps { }
const Login: React.FC<Props> = ({ history }) => {
    console.log(history)
    return (
        <div>Loading...</div>
    )
}

export default Login