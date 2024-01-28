import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

// Т.к порядок имеет значение - лучше выносить в отдельные переменные
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [tsLoader]
}
