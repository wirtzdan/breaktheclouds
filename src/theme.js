import React from "react"
import { theme } from "@chakra-ui/core"

const customIcons = {
  facebook: {
    path: (
      <g fill="currentColor" stroke="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </g>
    ),
  },
  twitter: {
    path: (
      <g fill="currentColor" stroke="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </g>
    ),
  },
}

export default {
  ...theme,
  colors: {
    background: "#0B1E29",
    ...theme.colors,
  },
  fonts: {
    heading: "Rajdhani, serif",
    ...theme.fonts,
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
}
