import { IChannel } from "models/IChannel";
import { request } from "./generic";

export const Channel = {
    list: (): Promise<IChannel[]> => request.get("channel"),
    create: (channel: IChannel) => request.post("channel", channel)
}