import pkg from "./package.json";

export default {
    input: "./src/hash.js",
    output: [
        {
            file: "./",
            format: "cjs",
            sourcemap: true,
        },
    ],
};
