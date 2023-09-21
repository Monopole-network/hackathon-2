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

const BusinessForm: React.FC = ({ formData, setFormData }: any) => {
  const percentCryptos = ["< 20%", "20% à 50%", "50% à 75%", "> 75%"];

  const revenus = ["Oui", "Non", "La société n’est pas encore crée", "Non renseigné"];

  const [value, setValue] = React.useState("0");

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;

    // Mettez à jour formData en fonction du champ du formulaire modifié
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBusinessPlanChange = (selectedValue: any) => {
    // Mettez à jour formData avec la valeur sélectionnée pour l'échelle de connaissances blockchain
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Business: {
          ...prevData.criteria.Business,
          percentCryptos: selectedValue,
        },
      },
    }));
  };

  // Fonction pour gérer la sélection des connaissances blockchain
  const handleRevenusChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Business: {
          ...prevData.criteria.Business,
          revenus: selected,
        },
      },
    }));
  };

  const handleCryptoChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Business: {
          ...prevData.criteria.Business,
          businessPlan: selected,
        },
      },
    }));
  };

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto">
        <Heading as="h1" mb={4}>
          Votre business model
        </Heading>
        <VStack align="stretch">
          <CheckboxGroup colorScheme="green" value={formData.businessPlan} onChange={handleBusinessPlanChange}>
            <Text>Avez-vous défini votre business plan ?</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              <Checkbox value="Oui">Oui</Checkbox>
              <Checkbox value="Non">Non</Checkbox>
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green" value={formData.percentCryptos} onChange={handleCryptoChange}>
            <Text>Sur la totalité de vos revenus, quelle est la part de crypto monnaie ? </Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {percentCryptos.map((percentCrypto, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={percentCrypto}>{percentCrypto}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green" value={formData.revenus} onChange={handleRevenusChange}>
            <Text>Avez-vous générez du chiffre d’affaire sur l’année N-2</Text>
            <Wrap spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {revenus.map((revenu, index) => (
                <WrapItem key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={revenu}>{revenu}</Checkbox>
                </WrapItem>
              ))}
            </Wrap>
          </CheckboxGroup>
        </VStack>
      </Box>
    </Flex>
  );
};

export default BusinessForm;
