import React, { Component } from 'react'
import { Button, Modal, DropdownItemProps } from 'semantic-ui-react'

type User = {
    id: string,
    created_at: string,
    updated_at: string,
    username: string
    animes: null | []
}

interface Props {
    isUser: boolean,
    open: boolean
    toggleUser: () => void,
}

interface State {
    dimmer: true | "blurring" | "inverted",
    users: User[]
}

class ProfileModal extends Component<Props, State> {
    state: State = {
        dimmer: true,
        users: []
    }
    close = () => {
        this.props.toggleUser()
    }
    componentDidMount() {
        //    const data = getAnimes()
    }
    render() {
        const { dimmer, users } = this.state
        const userSelection: DropdownItemProps[] = users.map(user => ({ key: user.username, text: user.username, value: user.username }))
        return (
            <div>
                <Modal dimmer={dimmer} open={this.props.open} onClose={this.close}>
                    <Modal.Header>Choose a secure option Log In</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <div id="firebaseui-auth-container" />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            Nope
                         </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ProfileModal