import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  vite: {},
  presets: [require.resolve("@umijs/preset-vue")],
  mfsu: false,
});
