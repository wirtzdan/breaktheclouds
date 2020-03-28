import React from "react"

import PropTypes from "prop-types"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <base href="/index.html" />
      <ColorModeProvider value="dark">
        <CSSReset />
        <main>{children}</main>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
