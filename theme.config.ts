import { ThemeConfig } from "types/ThemeConfig";
import { darkTheme } from "theme/default";
import merge from "lodash.merge";

export const theme: ThemeConfig = merge(darkTheme, {
  styles: {
    fonts: {
      heading: "Roboto",
    },
  },
  nav: {
    primary: [
      { label: "DAO", href: "/vote" },
      { label: "More Info", href: "https://app.charmverse.io/namedao--proper-nouns--ismynamewtf/page-19377272787222233" },
      // { label: "About", href: "/about" },
    ],
    secondary: [],
  },
} as Partial<ThemeConfig>);
