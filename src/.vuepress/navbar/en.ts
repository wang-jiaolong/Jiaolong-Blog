import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Weekly", icon: "page", link: "/weekly" },
  { text: "Wiki", icon: "repo", link: "/wiki" },
  // { text: "Study", icon: "study", link: "/study" },
  // { text: "Gallery", icon: "pic", link: "/gallery" },
  { text: "Guide", icon: "guide", link: "/guide" },

  { text: "About", icon: "info", link: "/about" },
  // { text: "Message", icon: "mark", link: "/message" }
  // { text: "Timeline", icon: "time", link: "/timeline" }

]);
