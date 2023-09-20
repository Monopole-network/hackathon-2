import { Box, Checkbox, CheckboxGroup, Flex, Heading, Select, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const sujets = ["Social", "Économique", "Caritative", "Environnemental"];

const SujetForm: React.FC = () => {
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%"  mx="auto">
        <Heading as="h1" mb={4}>
          Dans quel(s) sujet(s) se placent votre projet ?
        </Heading>
        <VStack>
          <CheckboxGroup colorScheme="green">
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
              {sujets.map((sujet, index) => (
                <Box key={index} w="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={sujet}>{sujet}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SujetForm;
