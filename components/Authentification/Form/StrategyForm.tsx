import { Box, Checkbox, CheckboxGroup, Flex, Heading, Select, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const strategy = ["Social", "Économique", "Caritative", "Environnemental"];

const StrategyForm: React.FC = () => {
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="90%" maxW="514px" mx="auto" color="white">
        <Heading as="h1" mb={4}>
          Dans quelles sujets se placent votre projet ?
        </Heading>

        <VStack>
          <CheckboxGroup colorScheme="green">
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
              {strategy.map((step, index) => (
                <Box key={index} w="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={step}>{step}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
        </VStack>
      </Box>
    </Flex>
  );
};

export default StrategyForm;
