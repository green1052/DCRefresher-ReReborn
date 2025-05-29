import type { PlasmoCSConfig } from "plasmo";

console.log(1);



export const config: PlasmoCSConfig = {
    matches: [
        "https://*.dcinside.com/*"
    ],
    exclude_matches: [
        "https://event.dcinside.com/*",
        "https://h5.dcinside.com/*",
        "https://m.dcinside.com/*",
        "https://mall.dcinside.com/*",
        "https://wiki.dcinside.com/*"
    ],
    run_at: "document_start"
}
