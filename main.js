import { serveHTTP } from "stremio-addon-sdk";

import addonInterface from "./addon.js";

serveHTTP(addonInterface, { port: 7000 });
