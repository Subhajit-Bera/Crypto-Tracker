import React from 'react'
import {Box, Stack, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We provide a comprehensive platform that offers latest prices, trends, and news about cryptocurrencies. Manage your crypto investments efficiently with our real-time market_chart.Our real-time data ensures you are always informed.
          </Text>
        </VStack>

        <VStack>
          <Text>Founder</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer