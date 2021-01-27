import { IMessage } from "../../typings";
import { DefineListener } from "../utils/decorators/DefineListener";
import { BaseListener } from "../structures/BaseListener";

@DefineListener("message")
export class MessageEvent extends BaseListener {
    public async execute(message: IMessage): Promise<any> {
        if (message.author.bot || message.channel.type !== "text") return message;

        if (message.content.toLowerCase().startsWith(this.client.config.prefix)) return this.client.commands.handle(message);
    }
}
