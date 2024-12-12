// import babel from "rollup-plugin-babel";
// import external from "rollup-plugin-peer-deps-external";
// import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
// import jsx from "acorn-jsx";

export default [
  // {
  //   input: "./src/index.ts",
  //   output: [
  //     {
  //       file: "dist/index.js",
  //       format: "cjs",
  //       sourcemap: true,
  //     },
  //     {
  //       file: "dist/index.es.js",
  //       format: "esm",
  //       sourcemap: true,
  //     },
  //   ],
  //   external: ["./styles.css"],
  //   acornInjectPlugins: [jsx()],
  //   plugins: [
  //     postcss({
  //       plugins: [],
  //       minimize: true,
  //     }),
  //     babel({
  //       exclude: "node_modules/**",
  //       presets: ["@babel/preset-react"],
  //     }),
  //     typescript({
  //       tsconfig: "./tsconfig.json",
  //       jsx: "react",
  //       sourceMap: true, // Ensure source maps are included
  //       inlineSources: true, // Inline source files in maps
  //     }),
  //     external(),
  //     resolve(),
  //     terser(),
  //   ],
  // },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: false,
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
