import React from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box, Image, Flex, Link, Button, Text } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box bg="gray.600" width="100vh%" height="100vh">
      <Image
        position="absolute"
        top="0"
        right="0"
        left="0"
        bottom="0"
        height="100%"
        width="100%"
        src="https://mediadc.brightspotcdn.com/dims4/default/070a5d2/2147483647/strip/true/crop/2287x1201+0+61/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F32%2F4c%2Fe60eb0044d9596e3f9b1a01f1cbd%2Ftsai.jpg"
        opacity={0.15}
        objectFit="cover"
        style={{ filter: "grayscale(100%) blur(4px) contrast(120%)" }}
      />
      <Flex
        direction="column"
        pos="relative"
        width="100%"
        height="100%"
        justify="center"
        align="center"
      >
        <Link
          color="white"
          fontSize="6xl"
          maxW="60rem"
          textAlign="center"
          lineHeight="1"
          href="https://www.washingtonexaminer.com/policy/foreign/taiwan-plans-to-donate-100-000-hospital-masks-to-us-per-week"
        >
          Taiwan plans to donate 100,000 hospital masks to US per week
        </Link>
        <Flex align="center" mt={8}>
          <Text fontSize="lg" color="gray.100" mr={2}>
            Share on
          </Text>
          <Button variantColor="gray" leftIcon="facebook" mr={2}>
            Facebook
          </Button>
          <Button variantColor="gray" leftIcon="twitter">
            Twitter
          </Button>
        </Flex>
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage
