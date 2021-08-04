import { useEffect, useState } from "react"
import { Icon, Menu } from "semantic-ui-react"
import { IChannel } from "models/IChannel";
import { ChannelItem } from "./ChannelItem";
import { ChannelForm } from "./ChannelForm";
import { useContext } from "react";
import ChannelStore from "store/ChannelStore";
import { observer } from "mobx-react-lite";


export const Channels = observer(() => {
    const { channels, loadChannels, createChannel } = useContext(ChannelStore);
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true)

    const closeModal = () => setModal(false)

    const displayChannels = (channelLis: IChannel[]) => {
        return (
            channelLis.length > 0 &&
            channelLis.map((channel) => (<ChannelItem key={channel.id} name={channel.name} id={channel.id} />))
        )
    }

    const handleChannelCreate = (channel: IChannel) => {
        createChannel(channel);
    }

    useEffect(() => {
        loadChannels();
    }, [loadChannels])

    return (
        <>
            <Menu.Menu style={{ paddingBottom: "2em" }}>
                <Menu.Item>
                    <span>
                        <Icon name="exchange" /> CHANNELS
                    </span>
                    ({channels.length}) <Icon name="add" onClick={openModal} />
                </Menu.Item>
                {displayChannels(channels)}
            </Menu.Menu>
            <ChannelForm open={modal} closeModal={closeModal} createChannel={handleChannelCreate} />
        </>
    )
})