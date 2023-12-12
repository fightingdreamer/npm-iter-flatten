import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/iter/flatten.ts"),
      name: "@fightingdreamer/iter-flatten",
      formats: ["es", "cjs"],
      fileName: "iter-flatten",
    },
  },
});
