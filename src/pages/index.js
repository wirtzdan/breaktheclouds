import React, { useState, useEffect } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style.css"
import { Box, Image, Flex, Link, Button, Text } from "@chakra-ui/core"

import SuggestNews from "../components/suggestnews"

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

      <Box bg="background" width="100vh%" height="100vh" p="4">
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
            fontWeight="bold"
            fontFamily=""
            maxW="64rem"
            textAlign="center"
            lineHeight="1"
            href={state.link}
            fontFamily="Rajdhani, sans-serif;"
          >
            {state.title}
          </Link>
          <Flex align="center" mt={8}>
            <Text fontSize="xl" color="gray.100" mr={2} fontWeight="medium">
              Share on
            </Text>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                state.link
              )}&t=${encodeURIComponent(state.title + " #breaktheclouds")}`}
              title="Share on Facebook"
              isExternal
            >
              <Button variantColor="gray" leftIcon="facebook" mr={2}>
                Facebook
              </Button>
            </Link>
            <Link
              href={`https://twitter.com/share?url=${encodeURIComponent(
                state.link
              )}&text=${encodeURIComponent(state.title + " #breaktheclouds")}`}
              title="Share on Facebook"
              isExternal
            >
              <Button variantColor="gray" leftIcon="twitter">
                Twitter
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Flex position="absolute" top="16" width="100%" justify="center">
        <Text
          className="glow"
          fontSize={["4xl", "5xl"]}
          mx="auto"
          lineHeight="0.8"
          fontWeight="bold"
          textAlign="center"
          fontFamily="Rajdhani, sans-serif;"
        >
          #BREAK
          <br />
          THE CLOUDS
        </Text>
      </Flex>
      <Box position="absolute" bottom="10" right="10">
        <SuggestNews />
      </Box>
    </Layout>
  )
}

export default IndexPage
