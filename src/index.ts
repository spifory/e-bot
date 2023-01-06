import path from "path";
import { Client } from "./bot.js";

const client = new Client();

function main() {
    client.addDir(path.join(__dirname, "exts"));
    client.connect()
}

main()