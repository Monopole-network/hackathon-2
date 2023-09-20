import { Box, Checkbox, CheckboxGroup, Flex, Heading, Radio, RadioGroup, Select, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

const BusinessForm: React.FC = () => {

  const percentCryptos = ["< 20%", "20% à 50%", "50% à 75%" , "> 75%"];

  const revenus = ["Oui", "Non", "La société n’est pas encore crée" , "Non renseigné"]
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto">
        <Heading as="h1" mb={4}>
          Votre business model
        </Heading>
        <VStack align="stretch">
          <CheckboxGroup colorScheme="green">
            <Text>Avez-vous défini votre business plan ?</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              <Checkbox value="Oui">Oui</Checkbox>
              <Checkbox value="Non">Non</Checkbox>
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green">
            <Text>Sur la totalité de vos revenus, quelle est la part de crypto monnaie ? </Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {percentCryptos.map((percentCrypto, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={percentCrypto}>{percentCrypto}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green">
            <Text>Avez-vous générez du chiffre d’affaire sur l’année N-2</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {revenus.map((revenu, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={revenu}>{revenu}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
        </VStack>
      </Box>
    </Flex>
  );
};

export default BusinessForm;