import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/react-nexusui.js",
        format: "cjs",
      },
      {
        file: "dist/react-nexusui.esm.js",
        format: "esm",
      },
    ],
    external: ["react", "nexusui"],
    plugins: [
      typescript({
        typescript: require("typescript"),
        abortOnError: false,
        tsconfigOverride: {
          compilerOptions: {
            module: "ES2015",
          },
        },
      }),
    ],
  },
];
