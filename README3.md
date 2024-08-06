<!-- 
Webpack configuration

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // The entry point of your application
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "production",
    devtool: 'source-map', // Generate source maps for easier debugging
    devServer: {
        port: 3000,
        static: './dist'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.((c|sa|sc)ss)$/i, // Apply this rule to .css files
                use: [MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
};



Package.json file before restoring the CRA

{
  "name": "spencer-wawaku",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@gsap/react": "^2.1.1",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.2",
    "babel-loader": "^9.1.3",
    "formik": "^2.4.5",
    "framer-motion": "^11.0.28",
    "gsap": "^3.12.5",
    "leaflet": "^1.9.4",
    "lodash": "^4.17.21",
    "react": "^18.2.0",
    "react-countup": "^6.5.3",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "react-leaflet": "^4.2.1",
    "react-multi-carousel": "^2.8.5",
    "react-router-dom": "^6.22.3",
    "react-scripts": "^5.0.1",
    "react-scroll-trigger": "^0.6.14",
    "react-simple-typewriter": "^5.0.1",
    "react-slick": "^0.30.2",
    "slick-carousel": "^1.8.1",
    "web-vitals": "^2.1.4",
    "yup": "^1.4.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "webpack-dev-server",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/cli": "^7.24.8",
    "@babel/core": "^7.25.2",
    "@babel/plugin-transform-arrow-functions": "^7.24.7",
    "@babel/preset-env": "^7.25.2",
    "@babel/preset-react": "^7.24.7",
    "css-loader": "^7.1.2",
    "mini-css-extract-plugin": "^2.9.0",
    "sass": "^1.77.8",
    "sass-loader": "^16.0.0",
    "style-loader": "^4.0.0",
    "webpack": "^5.93.0",
    "webpack-cli": "^5.1.4"
  }
}

 -->


/*

var mymap = L.map('map')

#map{
    width: 100%;
    min-height: 600px;
    z-index: 10;
}
Sources:
https://zhiqiyu.github.io/post/react-leaflet-setup/
*/ 

<!-- 
/*
 replaced Link with the standard HTML <a> tag for each icon.
The href attribute contains the external link you want to navigate to.
The target="_blank" attribute opens the link in a new tab.
The rel="noopener noreferrer" attribute is a security best practice when using target="_blank" to prevent potential security vulnerabilities.

IMPORTANT:
It looks like you are using the Link component from react-router-dom to create links. However, for external links that navigate to external websites or platforms, you should use the regular HTML anchor (<a>) tag instead of the Link component. 

INCORRECT WAY:
==============
<Link 
                        to={{pathname: "https://www.youtube.com/@codewithspencer-fd7ib"}} 
                        className="youtube-icon"
                        target="_blank"
                        aria-label="youtube"
                        >
                        <FaYoutube />
                    </Link>

CORRECT WAY
============
<a 
                        href="https://www.youtube.com/@codewithspencer-fd7ib"
                        className="youtube-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="youtube"
                        >
                        <FaYoutube />
                    </a>
*/ 
pour netoyer le cache
git rm -r --cached node_modules
 -->