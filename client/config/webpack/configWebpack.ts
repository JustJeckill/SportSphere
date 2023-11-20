import { configLoaders } from "./configLoaders";
import { configPlugins } from "./configPlugins";
import { IConfigOptions } from "./types";
import { configDevServer } from "./configDevServer";

export const configWebpack = (options: IConfigOptions) => {
    const { mode, paths } = options;

    const isDev = mode === 'development';

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: 'bundle.[contenthash].js',
            clean: true,
        },
        module: {
            rules: configLoaders(options),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: configPlugins(options),
        devServer: isDev ? configDevServer(options) : undefined,
        devtool: isDev && 'inline-source-map',
    }
}
