"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token = process.env['TOKEN'];
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildMessageReactions
    ]
});
client.on('messageReactionAdd', reaction => {
    console.log(reaction);
});
client.on('messageDelete', (message) => __awaiter(void 0, void 0, void 0, function* () {
    // const file:DeletedMessages = JSON.parse( fs.readFileSync('deleted_messages.json','utf-8') )
    // file.data.map((deletedMessage,index)=>{
    //     console.log(index,deletedMessage.content);
    // })
    var _a, _b;
    console.log((_a = message.author) === null || _a === void 0 ? void 0 : _a.username, message.content);
    message.channel.send({ content: `> User "${(_b = message.author) === null || _b === void 0 ? void 0 : _b.tag}" delete the message "${message.content}"` });
    // const data = JSON.parse(file)
    // console.log();
}));
client.on('ready', () => {
    var _a;
    console.log(`Running as ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}!`);
});
client.login(token);
