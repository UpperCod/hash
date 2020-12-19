import renameExtensions from "@betit/rollup-plugin-rename-extensions";

export default {
    input: "./src/hash.js",
    output: {
        dir: "./",
        format: "cjs",
        sourcemap: true,
    },
    plugins: [
        renameExtensions({
            include: ["**/*.js"],
            mappings: {
                ".js": ".cjs",
            },
        }),
    ],
};
