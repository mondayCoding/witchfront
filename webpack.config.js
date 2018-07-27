
const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

   mode: "development",

   entry: {
      app: "./src/index.tsx",
      vendor: ["react", "react-dom", "react-router", "react-select", "react-localization", "react-sortable-hoc", "axios","mark.js", "toastr"]
   },

   output: {
      path: path.resolve(__dirname, "../witchnode/public/javascripts/"),
      filename: "[name].js"
   },

   //heavy, good debugg
   devtool: "source-map",
   //light basic debug
   // devtool: "cheap-moduleT-source-map",

   // auto figure file.extension in import calls
   resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
   },

   plugins: [
      new MiniCssExtractPlugin({
        filename: "../stylesheets/autoSass.css",
      })
    ],

   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
         },
         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
         {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
         },
         {
            test: /\.scss$/,
            use: [
               // enable for external file
               {
                  loader: MiniCssExtractPlugin.loader,
               },
               // use in development
               //   "style-loader",
              "css-loader",
              "sass-loader"
            ]
         }
         // {
         //    test: /\.scss$/,
         //    use: [
         //        "style-loader", // creates style nodes from JS strings
         //        "css-loader", // translates CSS into CommonJS
         //        "sass-loader" // compiles Sass to CSS
         //    ]
         // }
      ]
   },

   optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
   }
};

