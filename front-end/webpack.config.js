const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/js/index.js",
        education: "./src/js/education.js",
        medicina: "./src/js/medicina.js",
        tabelas: "./src/js/tabelas.js",
        art: "./src/js/art.js",
    },
    mode: "development",
    devServer: {
        watchFiles: ["src/**/*"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(jpg|png|jpeg|svg|gif|pdf)$/,
                type: "asset/resource",
            },

            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },
    optimization: {
        minimizer: [`...`, new CssMinimizerPlugin()],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: "index.html",
            template: "src/html/index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: "education.html",
            template: "src/html/education.html",
            chunks: ["education"],
        }),
        new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: "medicina.html",
            template: "src/html/medicina.html",
            chunks: ["medicina"],
        }),
        new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: "tabelas.html",
            template: "src/html/tabelas.html",
            chunks: ["tabelas"],
        }),
        new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: "art.html",
            template: "src/html/art.html",
            chunks: ["art"],
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
        clean: true,
    },
};
