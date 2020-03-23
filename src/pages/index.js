import React, { useState, useEffect } from "react"
import axios from "axios"
import TimeAgo from "react-timeago"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style.css"
import bctlogo from "../images/btc-logo.svg"
import { Box, Image, Flex, Link, Button, Text } from "@chakra-ui/core"

import SuggestNews from "../components/suggestnews"
import LearnMore from "../components/learnmore"

function IndexPage() {
  const [state, setState] = useState([])

  async function getRandomNews() {
    const response = await axios.get(
      `https://v2-api.sheety.co/dd25b99d32c98f422ee8aa482ec596a2/breaktheclouds/news`
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
      <SEO title="New Tab" />
      <Box bg="background" width="100vh%" height="100vh" p="4">
        <Image
          position="absolute"
          top="0"
          right="0"
          left="0"
          bottom="0"
          height="100%"
          width="100%"
          display={state.image ? "block" : "none"}
          src={state.image}
          opacity={0.15}
          objectFit="cover"
          style={{ filter: "grayscale(100%) contrast(60%) brightness(140%)" }}
        />

        <Flex
          direction="column"
          pos="relative"
          width="100%"
          height="100%"
          justify="center"
          align="center"
        >
          <Text opacity="0.5" fontSize={["xl", "2xl"]} fontWeight="600">
            <TimeAgo date={state.date} ago /> by{" "}
            <Link
              href={"https://" + state.domain}
              isExternal
              textDecoration="underline"
            >
              {state.site}
            </Link>
          </Text>
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
            isExternal
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
              className="no-underline"
              isExternal
            >
              <Button variantColor="gray" leftIcon="facebookfull" mr={2}>
                Facebook
              </Button>
            </Link>
            <Link
              href={`https://twitter.com/share?url=${encodeURIComponent(
                state.link
              )}&text=${encodeURIComponent(state.title + " #breaktheclouds")}`}
              title="Share on Facebook"
              isExternal
              className="no-underline"
            >
              <Button variantColor="gray" leftIcon="twitterfull">
                Twitter
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Flex
        width="100%"
        position="absolute"
        bottom={8}
        px={8}
        alignItems="center"
        justify="space-between"
      >
        <Box>
          <SuggestNews />
          <Button leftIcon="refresh" variant="ghost" onClick={getRandomNews}>
            Refresh
          </Button>
        </Box>
        <Text fontWeight="600">
          {" "}
          {state.credit ? `Submitted by ${state.credit}` : null}
        </Text>
        <Box>
          <Link
            href="https://twitter.com/_breaktheclouds"
            className="no-underline"
            isExternal
          >
            <Button leftIcon="twitter" variant="ghost">
              Twitter
            </Button>
          </Link>
          <LearnMore />
        </Box>
      </Flex>
      <Flex position="absolute" top="16" width="100%" justify="center">
        <Link href="https://twitter.com/_breaktheclouds" isExternal>
          <Image className="flicker" src={bctlogo} w={300} />
        </Link>
      </Flex>
    </Layout>
  )
}

export default IndexPage
