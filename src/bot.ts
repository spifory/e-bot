import { Client as _Client } from "yuuko";
import 'dotenv/config'

export class Client extends _Client {
    constructor() {
        super({
            token: process.env.TOKEN,
            intents: 33282,
            prefix: "",
        })

        this.on("ready", () => {
            this.editStatus({
                name: "o",
                type: 5.
            })
            console.info(`[I] connected as ${this.user.username}#${this.user.discriminator} at ${new Date().toLocaleString()}`)
        })
    }
}