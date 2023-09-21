import { Box, Checkbox, CheckboxGroup, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const clientsTypes = ["B2B", "B2C", "B2B2B", "B2B2C", "Économique"];
const continents = ["Europe", "Afrique", "Amérique du Nord", "Asie", "Amérique du Sud", "Océanie", "Amérique centrale"];
const reorientation_stratégies = ["Oui", "Non", "Je ne sais pas", "Non renseigné"];

const StrategyForm: React.FC = () => {
  // État local pour stocker les choix
  const [selectedClientsTypes, setSelectedClientsTypes] = useState<string[]>([]);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [selectedReorientationStratégies, setSelectedReorientationStratégies] = useState<string[]>([]);

  // Fonction pour gérer la sélection des types de clients
  const handleClientsTypesChange = (selected: string[]) => {
    setSelectedClientsTypes(selected);
    console.log("selectedContinent",selectedClientsTypes)
  };

  // Fonction pour gérer la sélection du continent
  const handleContinentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContinent(event.target.value);
    console.log("selectedContinent",selectedContinent)
  };

  // Fonction pour gérer la sélection des réorientations stratégiques
  const handleReorientationStratégiesChange = (selected: string[]) => {
    setSelectedReorientationStratégies(selected);
    console.log("selectedReorientationStratégies",selectedReorientationStratégies)
  };

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto">
        <Heading as="h1" mb={4}>
          Votre stratégie
        </Heading>
        <VStack align="stretch">
          <CheckboxGroup colorScheme="green" value={selectedClientsTypes} onChange={handleClientsTypesChange}>
            <Text>Type de clients</Text>
            <Stack spacing="0.5rem" maxW="100%" direction={["column", "row"]}>
              {clientsTypes.map((client, index) => (
                <Box key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={client}>{client}</Checkbox>
                </Box>
              ))}
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green" value={selectedContinent} onChange={handleContinentChange}>
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
          <CheckboxGroup colorScheme="green" value={selectedReorientationStratégies} onChange={handleReorientationStratégiesChange}>
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
