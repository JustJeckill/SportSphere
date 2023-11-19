import path from "path";
import { configWebpack } from "./config/webpack/configWebpack";
import { IEnvVariables } from "./config/webpack/types";

export default (env: IEnvVariables) => {
    const { mode, port } = env;

    const options = {
        mode: mode ?? 'development',
        port: port ?? 3000,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, mode),
            html: path.resolve(__dirname, 'templates', 'index.html'),
        },
    }

    const config = configWebpack(options);

    return config;
};
