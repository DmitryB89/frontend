import path from 'path'
import  webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
    // точка входа в приложение
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    mode: 'development',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        // Использование html-файла из public как шаблон
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin()
    ],
    module: {
        // обработка файлов, выходящих за рамки js
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        // чтобы в импортах указывать путь без расширения
        extensions: ['.tsx', '.ts', '.js']
    }
}

export  default  config