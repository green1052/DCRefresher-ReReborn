import {Storage} from "@plasmohq/storage";
import type {PlasmoMessaging} from "@plasmohq/messaging";

const storage = new Storage({area: "local"});
let settings = storage.get<SettingsStore>("refresher.settings");

storage.watch({
    "refresher.settings": (change) => {
        settings = change.newValue;
    }
});

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    res.send(await settings);
};

export default handler;