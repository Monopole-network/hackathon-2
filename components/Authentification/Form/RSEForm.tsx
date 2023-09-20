import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Select,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

const RSEForm: React.FC = () => {
  const percentCryptos = ["< 20%", "20% à 50%", "50% à 75%", "> 75%"];

  const ecoGests = ["Oui", "Non", "En cours", "Non renseigné"];
  const salaryEqualities = ["Oui", "Non", "En cours", "Non renseigné"];
  const RSECharts = ["Oui", "Non", "En cours", "Non renseigné"];
  const ODDs = [
    "Éradication de la pauvreté",
    "Lutte contre la faim",
    "Accès à la santé",
    "Accès à une éducation de qualité",
    "Égalité entre les sexes",
    "Justice et paix",
    "Aucun de ses ODD",
  ];

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto">
        <Heading as="h1" mb={4}>
          Votre démarche RSE
        </Heading>
        <VStack align="stretch">
          <CheckboxGroup colorScheme="green">
            <Text>Avez-vous mis en place une politique d’éco gestes en entreprise ? </Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {ecoGests.map((ecoGest, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={ecoGest}>{ecoGest}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>

          <CheckboxGroup colorScheme="green">
            <Text>Avez-vous mis en place une politique d'égalité salariale Hommes / Femmes ? </Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {salaryEqualities.map((salaryEquality, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={salaryEquality}>{salaryEquality}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>

          <CheckboxGroup colorScheme="green">
            <Text>Avez-vous mis en place une charte RSE? </Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {RSECharts.map((RSEChart, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                  <Checkbox value={RSEChart}>{RSEChart}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>

          <CheckboxGroup colorScheme="green">
            <Text>Parmis les ODD suivants relatif à l'aspect sociétal sur lesquels travaillez-vous déja ?</Text>
            <Wrap spacing={0.5}>
              <WrapItem>
                {ODDs.map((ODD, index) => (
                  <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8} borderColor="red">
                    <Checkbox value={ODD}>{ODD}</Checkbox>
                  </Box>
                ))}
              </WrapItem>
            </Wrap>
          </CheckboxGroup>
        </VStack>
      </Box>
    </Flex>
  );
};

export default RSEForm;
