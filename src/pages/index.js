import React, { useState, useEffect } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box, Image, Flex, Link, Button, Text } from "@chakra-ui/core"

function IndexPage() {
  const [state, setState] = useState([])

  async function getRandomNews() {
    const response = await axios.get(
      `https://v2-api.sheety.co/dd25b99d32c98f422ee8aa482ec596a2/upliftingCoronaNews/news`
    )

    const randomNews =
      response.data.news[Math.floor(Math.random() * response.data.news.length)]

    setState(randomNews)
  }

  useEffect(() => {
    getRandomNews()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Box bg="background" width="100vh%" height="100vh" p={4}>
        <Image
          position="absolute"
          top="0"
          right="0"
          left="0"
          bottom="0"
          height="100%"
          width="100%"
          src={state.image}
          opacity={0.15}
          objectFit="cover"
          style={{ filter: "grayscale(100%) contrast(60%)" }}
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
            fontSize={["4xl", "6xl"]}
            maxW="64rem"
            textAlign="center"
            lineHeight="1"
            href={state.link}
          >
            {state.title}
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
}

export default IndexPage
