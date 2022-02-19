import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

const potato = {
  input: "./components/index.ts",
  output: {
    file: "./components/output.js",
    format: "esm",
  },
  plugins: [
    typescript(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
  ],
  external: ["react", "react-dom"],
};

export default potato;
