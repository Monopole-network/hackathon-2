import { Box, Checkbox, CheckboxGroup, Flex, Heading, Select, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const clientsTypes = ["B2B", "B2C", "B2B2B", "B2B2C", "Économique"];
const continents = ["Europe", "Afrique", "Amérique du Nord", "Asie", "Amérique du Sud", "Océanie", "Amérique centrale"];
const reorientation_stratégies = ["Oui", "Non","Je ne sais pas", "Non renseigné"];

const StrategyForm: React.FC = () => {
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto" >
        <Heading as="h1" mb={4}>
          Votre stratégie
        </Heading>
        <VStack align="stretch" >
          <CheckboxGroup colorScheme="green"  >
            <Text>Type de clients</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {clientsTypes.map((client, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={client}>{client}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green">
            <Text>Premier territoire où votre activité est déployée</Text>
            <Box w="100%">
              <Select>
                {continents.map((continent, index) => (
                  <>
                    <option value={continent}>{continent}</option>
                  </>
                ))}
              </Select>
            </Box>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green">
            <Text>Besoin d’une réorientation stratégique ?</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {reorientation_stratégies.map((reorientation_stratégie, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox  value={reorientation_stratégie}>{reorientation_stratégie}</Checkbox>
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
