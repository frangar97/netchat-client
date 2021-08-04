import { Comment, Segment } from "semantic-ui-react"
import { MessageForm } from "./MessageForm";
import { MessageHeader } from './MessageHeader';

export const Messages = () => {
    return (
        <>
            <MessageHeader />
            <Segment>
                <Comment.Group>

                </Comment.Group>
            </Segment>
            <MessageForm />
        </>
    )
}