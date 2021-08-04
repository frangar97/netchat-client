import { ChangeEvent, FC, useState } from "react"
import { Button, Form, Icon, Input, Modal } from "semantic-ui-react"
import { v4 as uuid } from 'uuid';
import { IChannel } from "models/IChannel"

interface ChannelFormProps {
    open: boolean
    closeModal: () => void,
    createChannel: (channel: IChannel) => void
}

export const ChannelForm: FC<ChannelFormProps> = ({ open, closeModal, createChannel }) => {
    const [channel, setChannel] = useState<IChannel>({ id: '', name: '', description: '' })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChannel((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = () => {
        createChannel({ ...channel, id: uuid() })
    }

    return (
        <Modal basic open={open}>
            <Modal.Header>Add Channel</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <Input fluid label="Channel Name" onChange={handleInputChange} name="name" />
                    </Form.Field>
                    <Form.Field>
                        <Input fluid label="Description" onChange={handleInputChange} name="description" />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color="green" inverted onClick={handleSubmit}><Icon name="checkmark" />Add</Button>
                <Button basic color="red" inverted onClick={closeModal}><Icon name="remove" />Cancel</Button>
            </Modal.Actions>
        </Modal>
    )
}