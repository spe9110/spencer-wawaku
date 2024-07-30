<!--
ERROR: 

What Causes the "0308010c:digital envelope routines::unsupported" Error?
You are likely getting this error because of 2 main reasons:

you’re not using the LTS (long term support) version of Node JS. You can see I’m using Node 17.0.0, which is not an LTS version of Node.
you’re using react-script with a version less than 5
The error can also occur because you’re using Node 17.

How to Fix the "0308010c:digital envelope routines::unsupported" Error
There are at least 3 ways by which you can fix this error. We are going to look at them one by one. Any of them should work for you.

Pass --openssl-legacy-provider to Webpack or the CLI Tool
In a React app, for instance, you can pass --openssl-legacy-provider to the start script like this "react-scripts --openssl-legacy-provider start".

That should do it. But if this fails to fix the error, then proceed to the next fix. On many occasions, it works.

Use an LTS Version of Node JS
Consider downgrading your Node version to 16.16.0 or other LTS versions.

Currently, 18.12.1 is the latest LTS version of Node. You can download it from the Node JS official website or use NVM to install it.

Upgrade React Script to Version 5+
If you’re working with React and this still fails to fix the error for you, then it’s likely an issue with your React script.

If you’re using a React script version less than 5, then you should upgrade it to version 5+.

In my case, I’m currently using react-scripts 3.4.3:

As already pointed out in this article, if you are getting the "0308010c:digital envelope routines::unsupported" error, then it could happen you’re not using an LTS version of Node JS, or you’re using react-scripts version <5.

Hopefully the fixes we discussed in this tutorial help you fix this error. If any of the fixes fail to work for you, then you should try the others. In my case, upgrading react-scripts to 5+ was what worked for me.

 -->

<!-- 
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // The entry point of your application
    entry: './src/index.js',

    // Where the bundled output should be placed
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
    },
    devtool: 'source-map', // Generate source maps for easier debugging
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Correct regex to match .js and .jsx files
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: /node_modules/, // Exclude files in node_modules
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.((c|sa|sc)ss)$/i, // Apply this rule to .css files
                use: [MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    watch: true,
    mode: 'production', // Set mode to 'production' for optimized builds
    resolve: {
        extensions: ['.js', '.jsx'] // Resolve .js and .jsx extensions automatically
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'styles.css', 
            template: './public/index.html', // Path to your template
            inject: 'body', // Inject all scripts into the body
        }) // Name of the extracted CSS file
    ],
}
 -->