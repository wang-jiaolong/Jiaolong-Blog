import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Jiaolong 's Blog",
      description: "Jiaolong 's Blog",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
  