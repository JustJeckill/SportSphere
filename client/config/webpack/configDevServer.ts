import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {IConfigOptions} from "./types";

export function configDevServer(options: IConfigOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port,
        open: true,
    }
}
