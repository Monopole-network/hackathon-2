import { Box, Checkbox, CheckboxGroup, Flex, Heading, Radio, RadioGroup, Select, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

const blockchainKnowledges = [
  "Formation certifiante",
  "Formation non certifiante",
  "Autodidacte",
  "Autres",
  "Non renseigné",
];
const securityAudits = ["Oui", "Non", "Société pas encore crée", "Non renseigné"];

const Maturity: React.FC = () => {
  const [value, setValue] = React.useState("0");
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto" >
        <Heading as="h1" mb={4}>
          Votre maturité digitale & Web3
        </Heading>
        <VStack align="stretch">
          <RadioGroup colorScheme="green" onChange={setValue} value={value}>
            <Text>Sur une échelle de 0 à 5 comment situez vous vos connaissances sur la blockchain ?</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              <Radio value="0">0</Radio>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
            </Stack>
          </RadioGroup>
          <CheckboxGroup colorScheme="green">
            <Text>Besoin d’une réorientation stratégique ?</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {blockchainKnowledges.map((blockchainKnowledge, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={blockchainKnowledge}>{blockchainKnowledge}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green">
            <Text>Avez vous déja réalisé des audits de cyber-sécurité pour votre société ?</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {securityAudits.map((securityAudit, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={securityAudit}>{securityAudit}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Maturity;
