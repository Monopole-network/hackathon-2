import { Box, Checkbox, CheckboxGroup, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const clientsTypes = ["B2B", "B2C", "B2B2B", "B2B2C", "Économique"];
const continents = ["Europe", "Afrique", "Amérique du Nord", "Asie", "Amérique du Sud", "Océanie", "Amérique centrale"];
const reorientation_stratégies = ["Oui", "Non", "Je ne sais pas", "Non renseigné"];

const StrategyForm: React.FC = ({ formData, setFormData }: any) => {
  const handleFormChange = (e: any) => {
    const { name, value } = e.target;

    // Mettez à jour formData en fonction du champ du formulaire modifié
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClientsTypesChange = (selectedValue: any) => {
    // Mettez à jour formData avec la valeur sélectionnée pour l'échelle de connaissances blockchain
    setFormData((prevData: any) => ({
      ...prevData,
      selectedClientsTypes: selectedValue,
    }));
  };

  // Fonction pour gérer la sélection des connaissances blockchain
  const handleContinentChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      selectedContinent: selected,
    }));
  };

  // Fonction pour gérer la sélection des audits de cyber-sécurité
  const handleReorientationStratégiesChange = (selected: any) => {
    // Mettez à jour formData avec les audits de cyber-sécurité sélectionnés
    setFormData((prevData: any) => ({
      ...prevData,
      selectedReorientationStratégies: selected,
    }));
  };

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto">
        <Heading as="h1" mb={4}>
          Votre stratégie
        </Heading>
        <VStack align="stretch">
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
          <CheckboxGroup
            colorScheme="green"
            value={formData.selectedReorientationStratégies}
            onChange={handleReorientationStratégiesChange}
          >
            <Text>Besoin d’une réorientation stratégique ?</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {reorientation_stratégies.map((reorientation_stratégie, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={reorientation_stratégie}>{reorientation_stratégie}</Checkbox>
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
