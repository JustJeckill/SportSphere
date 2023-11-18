import path from 'path';

module.exports = (env) => {
    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';
    const directoryOutput = env.mode;

    return {
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, directoryOutput),
            filename: 'build.[contenthash].js',
        },
    }
};
