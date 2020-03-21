import React from "react"

import PropTypes from "prop-types"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
