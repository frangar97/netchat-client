import { createContext } from "react";
import { action, makeObservable, observable, configure, runInAction } from "mobx";
import { IChannel } from "models/IChannel";
import { Channel } from "api/Channel";

configure({ enforceActions: 'always' })
class ChannelStore {

    @observable channels: IChannel[] = []

    constructor() {
        makeObservable(this);
    }

    @action loadChannels = async () => {
        const channels = await Channel.list();
        runInAction(() => {
            this.channels = channels;
        })
    }

    @action createChannel = async (channel: IChannel) => {
        await Channel.create(channel);
        runInAction(() => {
            this.channels = [...this.channels, channel];
        })
    }
}

export default createContext(new ChannelStore());