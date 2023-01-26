require("dotenv").config();
import { Client } from "discord.js";

const client = new Client(process.env.CLIENT_TOKEN);
