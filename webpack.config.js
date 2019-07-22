const path = require( "path" );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require( "webpack-manifest-plugin" );
const WebpackNotifierPlugin = require( "webpack-notifier" );

const FRONT_APP = "front_app";
const JS = `${FRONT_APP}/javascripts`;
const STYLES = `${FRONT_APP}/stylesheets`;
const FONTS = `${FRONT_APP}/fonts`;
const IMAGES = `${FRONT_APP}/images`;

function compact( target ) {
  if ( target instanceof Array ) {
    const filtered = target.filter( e => !!e );
    if ( filtered.length === 1 )
      return filtered[ 0 ];
    return filtered;
  }
  const ret = {};
  for ( const k in target ) {
    if ( !!target[ k ] ) ret[ k ] = target[ k ];
  }
  return ret;
}

const userAppConfig = ( env, argv ) => {
  const production = argv.mode === "production";
  return {
    entry: compact( {
      main_app: `./${JS}/main.tsx`,
      css_app: production ? null : `./${JS}/css.js`
    } ),
    output: {
      path: path.resolve( __dirname, "public" ),
      filename: production ? "javascripts/[name]-[hash].js" : "javascripts/[name].js",
      publicPath: production ? "/" : "http://localhost:9091/",
      pathinfo: true
    },
    module: {
      rules: compact( [
        production ? null : {
          test: /\.tsx?$/,
          enforce: "pre",
          loader: "tslint-loader"
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            production ? MiniCssExtractPlugin.loader : "style-loader",
            { loader: "css-loader", options: { sourceMap: true } },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require( "postcss-import" ),
                  require( "autoprefixer" )(),
                  require( "csswring" )()
                ],
                sourceMap: true
              }
            },
            { loader: "sass-loader", options: { sourceMap: true } }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [ {
            loader: "url-loader",
            options: { limit: 10240, name: "images/[name]-[hash].[ext]" }
          } ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [ { loader: "file-loader", options: { name: "fonts/[name]-[hash].[ext]" } } ]
        }
      ] )
    },
    resolve: {
      extensions: [ ".tsx", ".ts", ".js", ".css", ".scss", ".sass", ".png", ".jpg", ".gif" ],
      modules: [
        path.resolve( __dirname, JS ),
        path.resolve( __dirname, STYLES ),
        path.resolve( __dirname, FONTS ),
        path.resolve( __dirname, IMAGES ),
        path.resolve( __dirname, "node_modules" )
      ]
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      host: "localhost",
      hot: true,
      hotOnly: true,
      port: 9091,
      disableHostCheck: true
    },
    plugins: compact( [
      new MiniCssExtractPlugin( {
        filename: `stylesheets/${ production ? "[name]-[hash].css" : "[name].css" }`,
        chunkFilename: `stylesheets/${ production ? "[id]-[hash].css" : "[id].css" }`
      } ),
      new ManifestPlugin( {
        fileName: "webpack-manifest.json"
      } ),
      production ? null : new WebpackNotifierPlugin( { alwaysNotify: true } )
    ] ),
    devtool: production ? "hidden-source-map" : "source-map"
  };
};

module.exports = userAppConfig;
