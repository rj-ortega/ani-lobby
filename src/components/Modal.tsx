import React, { Component } from 'react'
import { Button, Header, Dropdown, Modal, DropdownItemProps } from 'semantic-ui-react'

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
        fetch('https://ani-lobby.herokuapp.com/api/v1/users')
            .then(res => res.json())
            .then(res => this.setState({
                users: res.message
            }))
            .catch(error => console.log(error))
    }
    render() {
        const { dimmer, users } = this.state
        const userSelection: DropdownItemProps[] = users.map(user => ({ key: user.username, text: user.username, value: user.username }))
        return (
            <div>
                <Modal dimmer={dimmer} open={this.props.open} onClose={this.close}>
                    <Modal.Header>Select a User</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Users</Header>
                            <Dropdown
                                placeholder='Select User'
                                fluid
                                selection
                                options={userSelection}
                            />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            Nope
                         </Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content="Continue"
                            onClick={this.close}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ProfileModal