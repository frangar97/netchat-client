import { Button, Input, Segment } from "semantic-ui-react"

export const MessageForm = () => {
    return (
        <Segment>
            <Input labelPosition="left" placeholder="write your message" fluid name="message" style={{ marginBottom: "0.7em" }} label={<Button icon="add" />} />
            <Button.Group icon widths="2">
                <Button color="orange" content="Add reply" labelPosition="left" icon="edit" />
                <Button color="teal" content="Upload media" labelPosition="right" icon="cloud upload" />
            </Button.Group>
        </Segment>
    )
}