const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
            },
        },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .ts and .tsx extensions
        alias: {
        // Alias for ContactUsForm component
        'ContactUsForm': path.resolve(__dirname, 'src/components/ContactUsForm'),
        },
    },
};
