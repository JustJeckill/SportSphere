import {IConfigOptions} from "./types";
import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const configLoaders = (options: IConfigOptions): ModuleOptions['rules'] => {
    const { mode } = options;

    const isDev = mode === 'development';

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const config = [scssLoader, tsLoader];

    return config;
}
