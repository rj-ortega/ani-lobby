import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

interface Props {
    open: boolean
    closeModal: () => void,
}

const LoginModal: React.FC<Props> = (props) => {
    const close = () => {
        props.closeModal()
    }
    return (
        <div>
            <Modal dimmer size="tiny" open={props.open} onClose={close}>
                <Modal.Header>Choose a secure option to Sign In</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <div id="firebaseui-auth-container" />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={close}>
                        Nope
                        </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default LoginModal