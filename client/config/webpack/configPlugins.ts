import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Configuration} from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import {IConfigOptions} from "./types";

export const configPlugins = (options: IConfigOptions): Configuration['plugins'] => {
    const { mode, paths } = options;

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const config: Configuration['plugins'] = [];

    const htmlPlugin = new HtmlWebpackPlugin({
        template: paths.html,
    });
    config.push(htmlPlugin);

    if(isProd) {
        const cssPlugin = new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        });

        config.push(cssPlugin);
    }

    if(isDev) {
        const eslintPlugin = new ESLintPlugin();

        config.push(eslintPlugin);
    }

    return config;
}
