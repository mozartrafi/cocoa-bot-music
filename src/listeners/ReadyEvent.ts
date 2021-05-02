import { BaseListener } from "../structures/BaseListener";
import { DefineListener } from "../utils/decorators/DefineListener";

@DefineListener("ready")
export class ReadyEvent extends BaseListener {
    public execute(): void {
        this.client.logger.info(
            `${this.client.shard ? `[Shard #${this.client.shard.ids[0]}]` : ""} I'm ready to serve ${this.client.guilds.cache.size} guilds ` +
            `with ${this.client.channels.cache.filter(c => c.type === "text").size} text channels and ` +
            `${this.client.channels.cache.filter(c => c.type === "voice").size} voice channels`
        );
    }
}
