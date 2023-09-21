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
      Maturity: {
        ...prevData.Maturity,
        blockchainKnowledgeScale: selected,
      },
    }));
  };

  // Fonction pour gérer la sélection des connaissances blockchain
  const handleBlockchainKnowledgeChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      Maturity: {
        ...prevData.Maturity,
        blockchainKnowledges: selected,
      },
    }));
  };

  // Fonction pour gérer la sélection des audits de cyber-sécurité
  const handleSecurityAuditsChange = (selected: any) => {
    // Mettez à jour formData avec les audits de cyber-sécurité sélectionnés
    setFormData((prevData: any) => ({
      ...prevData,
      Maturity: {
        ...prevData.Maturity,
        securityAudits: selected,
      },
    }));
  };

  const handleTestFormData = () => {
    console.log("Données du formulaire :", formData);
  };

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto">
        <Heading as="h1" mb={4}>
          Votre maturité digitale & Web3
        </Heading>
        <VStack align="stretch">
          <RadioGroup
            colorScheme="green"
            onChange={handleBlockchainKnowledgeScaleChange}
            value={formData.blockchainKnowledgeScale}
          >
            <Text>Sur une échelle de 0 à 5 comment situez vous vos connaissances sur la blockchain ?</Text>
            <Stack alignContent="center" spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              <Radio value="0">0</Radio>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
            </Stack>
          </RadioGroup>
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
          <CheckboxGroup colorScheme="green" value={formData.securityAudits} onChange={handleSecurityAuditsChange}>
            <Text>Avez vous déja réalisé des audits de cyber-sécurité pour votre société ?</Text>
            <Wrap spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {securityAudits.map((securityAudit, index) => (
                <WrapItem key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={securityAudit}>{securityAudit}</Checkbox>
                </WrapItem>
              ))}
            </Wrap>
          </CheckboxGroup>
          <Button onClick={handleTestFormData} colorScheme="green">
            Tester l'enregistrement
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Maturity;
