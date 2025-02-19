module.exports = {
    presets: [
        // used to transform modern JavaScript code to be compatible with the current version of Node.js
        ["@babel/preset-env", { targets: { node: "current" } }],
    ],
    // transforms ES6 module syntax to commonJS syntax, enables babel to parse import assertions
    plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-syntax-import-assertions"],
};