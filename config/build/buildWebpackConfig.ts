import webpack from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options

    return {
        // точка входа в приложение
        entry: paths.entry,
        mode: mode,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            // обработка файлов, выходящих за рамки js
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    }

}