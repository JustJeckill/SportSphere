export type TConfigMode = 'production' | 'development';

export interface IConfigPaths {
    entry: string,
    output: string,
    html: string,
}

export interface IEnvVariables {
    mode?: TConfigMode,
    port?: number,
}

export interface IConfigOptions {
    mode: TConfigMode,
    port: number,
    paths: IConfigPaths,
}


