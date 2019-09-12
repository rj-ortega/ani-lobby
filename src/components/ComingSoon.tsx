import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

interface Props {
    open: boolean
    closeModal: () => void,
}

const ComingSoon: React.FC<Props> = (props) => {
    const close = () => {
        props.closeModal()
    }
    return (
        <div>
            <Modal dimmer size="tiny" open={props.open} onClose={close}>
                <Modal.Header>Feature Coming Soon!</Modal.Header>
                <Modal.Actions>
                    <Button color='black' onClick={close}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default ComingSoon