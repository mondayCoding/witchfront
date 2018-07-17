
const path = require("path");
const webpack = require('webpack');

module.exports = {

   entry: {
      app: "./src/index.tsx",
      vendor: ["react", "react-dom", "react-router", "react-select", "react-localization", "axios", "react-sortable-hoc", "mark.js", "toastr"],
      serverApp: "./app.ts"
   },

   output: {
      path: path.resolve(__dirname, "public/javascripts/"),
      filename: "[name].js"
   },

   //heavy, good debugg
   devtool: "source-map",
   //light basic debug
   // devtool: "cheap-moduleT-source-map",

   resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
   },

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
         }
      ]
   },

   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
         name: "vendor",
         minChunks: Infinity,
      })
   ]
};

// const path = require("path");
//
// module.exports = {
//    entry: "./src/index.tsx",
//    output: {
//       path: path.resolve(__dirname, "public/javascripts/"),
//       filename: "bundle.js"
//    },
//    devtool: "source-map",
//    resolve: {
//       // Add '.ts' and '.tsx' as resolvable extensions.
//       extensions: [".ts", ".tsx", ".js", ".json"]
//    },
//    module: {
//       rules: [
//          {
//             test: /\.tsx?$/,
//             loader: "awesome-typescript-loader"
//          },
//          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//          {
//             enforce: "pre",
//             test: /\.js$/,
//             loader: "source-map-loader"
//          }
//       ]
//    },
//    externals: {
//       "react": "React",
//       "react-dom": "ReactDOM",
//       "jquery": 'jQuery'
//    },
      // new webpack.ProvidePlugin({
      //    $: "jquery"
      // })
// };
