const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const APP_NAME = "Todo with persist store";

module.exports = env => ({
	mode: "production",
	entry: {
		main: ["./src/index.ts"]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].styles.css"
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			title: APP_NAME,
		})
	],
	output: {
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js",
		path: path.resolve(__dirname, env.output),
		publicPath: "/"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true
						}
					}
				]
			},
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                {
                  loader: "css-loader",
                  options: { sourceMap: true }
                },
                {
                  loader: "resolve-url-loader"
                },
                {
                  loader: "sass-loader",
                  options: { sourceMap: true }
                }
              ]
            }
		]
	}
});
