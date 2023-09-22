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

const blockchainKnowledges = [
  "Formation certifiante",
  "Formation non certifiante",
  "Autodidacte",
  "Autres",
  "Non renseigné",
];
const securityAudits = ["Oui", "Non", "Société pas encore crée", "Non renseigné"];

const Maturity = ({ formData, setFormData }: any) => {
  const [value, setValue] = React.useState("0");

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;

    // Mettez à jour formData en fonction du champ du formulaire modifié
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlockchainKnowledgeScaleChange = (selected: any) => {
    // Mettez à jour formData avec la valeur sélectionnée pour l'échelle de connaissances blockchain
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Maturity: {
          ...prevData.criteria.Maturity,
          blockchainKnowledgeScale: selected,
        },
      },
    }));
  };

  // Fonction pour gérer la sélection des connaissances blockchain
  const handleBlockchainKnowledgeChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Maturity: {
          ...prevData.criteria.Maturity,
          blockchainKnowledges: selected,
        },
      },
    }));
  };

  // Fonction pour gérer la sélection des audits de cyber-sécurité
  const handleSecurityAuditsChange = (selected: any) => {
    // Mettez à jour formData avec les audits de cyber-sécurité sélectionnés
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Maturity: {
          ...prevData.criteria.Maturity,
          securityAudits: selected,
        },
      },
    }));
  };

  const handleTestFormData = () => {
    console.log("Données du formulaire :", formData);
  };

  return (
    <Box w="100%" mx="auto">
      <Heading as="h1" mb={8}>
        Votre maturité digitale & Web3
      </Heading>
      <VStack align="stretch" gap="2rem" fontSize="18px">
        <Stack>
          <RadioGroup
            colorScheme="green"
            onChange={handleBlockchainKnowledgeScaleChange}
            value={formData.blockchainKnowledgeScale}
          >
            <Text>Sur une échelle de 0 à 5 comment situez vous vos connaissances sur la blockchain ?</Text>
            <Stack alignContent="center" spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              <Radio size="lg" value="0">
                0
              </Radio>
              <Radio size="lg" value="1">
                1
              </Radio>
              <Radio size="lg" value="2">
                2
              </Radio>
              <Radio size="lg" value="3">
                3
              </Radio>
              <Radio size="lg" value="4">
                4
              </Radio>
              <Radio size="lg" value="5">
                5
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>
        <Stack>
          <CheckboxGroup
            colorScheme="green"
            value={formData.blockchainKnowledges}
            onChange={handleBlockchainKnowledgeChange}
          >
            <Text>Besoin d’une réorientation stratégique ?</Text>
            <Wrap spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {blockchainKnowledges.map((blockchainKnowledge, index) => (
                <WrapItem key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={blockchainKnowledge}>{blockchainKnowledge}</Checkbox>
                </WrapItem>
              ))}
            </Wrap>
          </CheckboxGroup>
        </Stack>
        <Stack>
          <RadioGroup colorScheme="green" value={formData.securityAudits} onChange={handleSecurityAuditsChange}>
            <Text>Avez vous déja réalisé des audits de cyber-sécurité pour votre société ?</Text>
            <Wrap spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {securityAudits.map((securityAudit, index) => (
                <WrapItem key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Radio value={securityAudit}>{securityAudit}</Radio>
                </WrapItem>
              ))}
            </Wrap>
          </RadioGroup>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Maturity;
