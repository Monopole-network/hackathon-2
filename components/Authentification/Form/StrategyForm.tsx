import { Box, Checkbox, CheckboxGroup, Flex, Heading, Radio, RadioGroup, Select, Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const clientsTypes = ["B2B", "B2C", "B2B2B", "B2B2C", "Économique"];
const continents = ["Europe", "Afrique", "Amérique du Nord", "Asie", "Amérique du Sud", "Océanie", "Amérique centrale"];
const reorientation_stratégies = ["Oui", "Non", "Je ne sais pas", "Non renseigné"];

const StrategyForm = ({ formData, setFormData }: any) => {
  const handleFormChange = (e: any) => {
    const { name, value } = e.target;

    // Mettez à jour formData en fonction du champ du formulaire modifié
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClientsTypesChange = (selected: any) => {
    // Mettez à jour formData avec la valeur sélectionnée pour l'échelle de connaissances blockchain
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Strategy: {
          ...prevData.criteria.Strategy,
          selectedClientsTypes: selected,
        },
      },
    }));
  };

  // Fonction pour gérer la sélection des connaissances blockchain
  const handleContinentChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Strategy: {
          ...prevData.criteria.Strategy,
          selectedContinent: selected,
        },
      },
    }));
  };

  // Fonction pour gérer la sélection des audits de cyber-sécurité
  const handleReorientationStratégiesChange = (selected: any) => {
    // Mettez à jour formData avec les audits de cyber-sécurité sélectionnés
    setFormData((prevData: any) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        Strategy: {
          ...prevData.criteria.Strategy,
          selectedReorientationStratégies: selected,
        },
      },
    }));
  };

  return (
    <Box w="100%" mx="auto">
      <Heading as="h1" mb={8}>
        Votre stratégie
      </Heading>
      <VStack align="stretch" gap="2rem">
        <Stack>
          <CheckboxGroup colorScheme="green" value={formData.selectedClientsTypes} onChange={handleClientsTypesChange}>
            <Text>Type de clients</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {clientsTypes.map((client, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={client}>{client}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
        </Stack>
        <Stack>
          <CheckboxGroup colorScheme="green" value={formData.selectedContinent} onChange={handleContinentChange}>
            <Text>Premier territoire où votre activité est déployée</Text>
            <Box w="100%">
              <Select>
                {continents.map((continent, index) => (
                  <option key={index} value={continent}>
                    {continent}
                  </option>
                ))}
              </Select>
            </Box>
          </CheckboxGroup>
        </Stack>
        <Stack>
          <RadioGroup
            colorScheme="green"
            value={formData.selectedReorientationStratégies}
            onChange={handleReorientationStratégiesChange}
          >
            <Text>Besoin d’une réorientation stratégique ?</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {reorientation_stratégies.map((reorientation_stratégie, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Radio value={reorientation_stratégie}>{reorientation_stratégie}</Radio>
                </Box>
              ))}
            </Stack>
          </RadioGroup>
        </Stack>
      </VStack>
    </Box>
  );
};

export default StrategyForm;
