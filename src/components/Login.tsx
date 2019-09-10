import React from 'react'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps { }
const Login: React.SFC<Props> = ({ history }) => {
    console.log(history)
    return (
        <div>Loding...</div>
    )
}

export default Login