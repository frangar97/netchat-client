import { FC } from 'react';
import { Menu } from "semantic-ui-react"

interface ChannelItemProps {
    id: string
    name: string,
}

export const ChannelItem: FC<ChannelItemProps> = ({ id, name }) => {
    return (
        <Menu.Item name={name} style={{ opacity: 0.7 }} onClick={() => { console.log({ id, name }) }}>
            # {name}
        </Menu.Item>
    )
}