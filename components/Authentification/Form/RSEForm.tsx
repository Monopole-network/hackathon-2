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

const RSEForm: React.FC = ({ formData, setFormData }: any) => {
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

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;

    // Mettez à jour formData en fonction du champ du formulaire modifié
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEcoGestsChange = (selectedValue: any) => {
    // Mettez à jour formData avec la valeur sélectionnée pour l'échelle de connaissances blockchain
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        RSE: {
          ...prevData.criteria.RSE,
          ecoGests: selectedValue,
        },
      },
    }));
  };

  const handleSalaryEqualitiesChange = (selectedValue: any) => {
    // Mettez à jour formData avec la valeur sélectionnée pour l'échelle de connaissances blockchain
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        RSE: {
          ...prevData.criteria.RSE,
          salaryEqualities: selectedValue,
        },
      },
    }));
  };

  // Fonction pour gérer la sélection des connaissances blockchain
  const handleRSEChartsChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        RSE: {
          ...prevData.criteria.RSE,
          RSECharts: selected,
        },
      },
    }));
  };

  const handleOddChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        RSE: {
          ...prevData.criteria.RSE,
          ODDs: selected,
        },
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
          Votre démarche RSE
        </Heading>
        <VStack align="stretch">
          <CheckboxGroup colorScheme="green" value={formData.ecoGests} onChange={handleEcoGestsChange}>
            <Text>Avez-vous mis en place une politique d’éco gestes en entreprise ? </Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {ecoGests.map((ecoGest, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={ecoGest}>{ecoGest}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>

          <CheckboxGroup colorScheme="green" value={formData.salaryEqualities} onChange={handleSalaryEqualitiesChange}>
            <Text>Avez-vous mis en place une politique d&rsquo;égalité salariale Hommes / Femmes ? </Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {salaryEqualities.map((salaryEquality, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={salaryEquality}>{salaryEquality}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>

          <CheckboxGroup colorScheme="green" value={formData.RSECharts} onChange={handleRSEChartsChange}>
            <Text>Avez-vous mis en place une charte RSE? </Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {RSECharts.map((RSEChart, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={RSEChart}>{RSEChart}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>

          <CheckboxGroup colorScheme="green" value={formData.ODDs} onChange={handleOddChange}>
            <Text>Parmis les ODD suivants relatif à l&rsquo;aspect sociétal sur lesquels travaillez-vous déja ?</Text>
            <Wrap spacing={0.5}>
              {ODDs.map((ODD, index) => (
                <WrapItem key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={ODD}>{ODD}</Checkbox>
                </WrapItem>
              ))}
            </Wrap>
          </CheckboxGroup>
        </VStack>
      </Box>
    </Flex>
  );
};

export default RSEForm;
