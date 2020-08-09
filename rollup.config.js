import ts from "@wessberg/rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

export default {
	input: "./src/mod.ts",
	output: [
		{
			file: "./dist/esm/bundle.min.mjs",
			format: "esm",
		},
		{
			file: "./dist/cjs/bundle.min.js",
			format: "cjs",
			exports: "default",
		},
	],
	plugins: [ts(), terser()],
};
