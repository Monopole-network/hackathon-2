import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Stack, VStack, Select } from "@chakra-ui/react";
import { useState } from "react";
import SujetForm from "./SujetForm";

const FormSociety: React.FC = () => {
  // Définir un état (state) pour chaque champ
  const [projectName, setProjectName] = useState("Monopole");
  const [adress, setAdress] = useState("1 rue du Dahomey");
  const [countryName, setCountryName] = useState("France");
  const [CodePostal, setCodePostal] = useState("75012");
  const [continentName, setContinentName] = useState("Europe");

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto">
        <Heading as="h1" mb={4} fontSize="32px">
          Votre société
        </Heading>
        <Text>Les informations s’auto-complètent, on récupère ces informations là, grâce à votre KYB.</Text>
        <form>
          <VStack>
            <FormControl id="projectName" isRequired>
              <FormLabel>Dénomination légale de votre entreprise</FormLabel>
              <Input
                disabled
                type="text"
                name="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </FormControl>

            <FormControl id="adress" isRequired>
              <FormLabel>Adresse postale</FormLabel>
              <Input disabled type="text" name="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
            </FormControl>

            <FormControl id="countryName" isRequired>
              <FormLabel>Pays</FormLabel>
              <Select disabled name="countryName" value={countryName} onChange={(e) => setCountryName(e.target.value)}>
                <option value="France">France</option>
                <option value="Suede">Suede</option>
              </Select>
            </FormControl>

            <FormControl id="CodePostal" isRequired>
              <FormLabel>Code Postale</FormLabel>
              <Input
                disabled
                type="number"
                name="CodePostal"
                value={CodePostal}
                onChange={(e) => setCodePostal(e.target.value)}
              />
            </FormControl>

            <FormControl id="continentName" isRequired>
              <FormLabel>Sur quel continent votre siège social se situe-t-il ?</FormLabel>
              <Select
                disabled
                name="continentName"
                value={continentName}
                onChange={(e) => setContinentName(e.target.value)}
              >
                <option value="Europe">Europe</option>
                <option value="Asie">Asie</option>
              </Select>
            </FormControl>
            <SujetForm />
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default FormSociety;
