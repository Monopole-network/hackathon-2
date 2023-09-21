import { Box, Checkbox, CheckboxGroup, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const clientsTypes = ["B2B", "B2C", "B2B2B", "B2B2C", "Économique"];
const continents = ["Europe", "Afrique", "Amérique du Nord", "Asie", "Amérique du Sud", "Océanie", "Amérique centrale"];
const reorientation_stratégies = ["Oui", "Non", "Je ne sais pas", "Non renseigné"];

const StrategyForm = ({ formData, setFormData }: any) => {
  const [strategyData, setStrategyData] = useState({
    clientsTypes: [],
    continents: [],
    reorientation_stratégies: [],
  });
  useEffect(() => {
    setFormData((prevData: any) => ({
      ...prevData,
      Strategy: strategyData,
    }));
  }, [setFormData, strategyData]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setStrategyData({
      ...strategyData,
      [name]: value,
    });
  };

  const handleClientsTypesChange = (selected: any) => {
    // Mettez à jour formData avec la valeur sélectionnée pour l'échelle de connaissances blockchain
    setFormData((prevData: any) => ({
      ...prevData,
      Strategy: {
        ...prevData.Strategy,
        selectedClientsTypes: selected,
      },
    }));
  };

  // Fonction pour gérer la sélection des connaissances blockchain
  const handleContinentChange = (selected: any) => {
    // Mettez à jour formData avec les connaissances blockchain sélectionnées
    setFormData((prevData: any) => ({
      ...prevData,
      Strategy: {
        ...prevData.Strategy,
        selectedContinent: selected,
      },
    }));
  };

  // Fonction pour gérer la sélection des audits de cyber-sécurité
  const handleReorientationStratégiesChange = (selected: any) => {
    // Mettez à jour formData avec les audits de cyber-sécurité sélectionnés
    setFormData((prevData: any) => ({
      ...prevData,
      Strategy: {
        ...prevData.Strategy,
        selectedReorientationStratégies: selected,
      },
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
