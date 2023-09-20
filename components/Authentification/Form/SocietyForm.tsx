import { Box, Checkbox, CheckboxGroup, Flex, Heading, Select, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import SujetForm from "./SujetForm";

const FormSociety: React.FC = () => {
  /* const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour gérer les données soumises
    console.log("Données soumises :", formData);
  }; */

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto" >
        <Heading as="h1" mb={4} fontSize="32px">
          Votre société
        </Heading>
        <Text>Les informations s’auto-complètent, on récupère ces informations là, grâce à votre KYB. </Text>
        <form>
          <VStack>
            <FormControl id="projectName" isRequired>
              <FormLabel>Dénomination légale de votre entreprise</FormLabel>
              <Input disabled type="text" name="projectName" placeholder="Monopole" />
            </FormControl>

            <FormControl id="adress" isRequired>
              <FormLabel>Adresse postale</FormLabel>
              <Input disabled type="text" name="adress" placeholder="1 rue du Dahomey" />
            </FormControl>

            <FormControl id="countryName" isRequired>
              <FormLabel>Pays</FormLabel>
              <Select disabled name="countryName" placeholder="France" />
            </FormControl>

            <FormControl id="CodePostal" isRequired>
              <FormLabel>Code Postale</FormLabel>
              <Input disabled type="text" name="CodePostal" placeholder="1 rue du Dahomey" />
            </FormControl>

            <FormControl id="continentName" isRequired>
              <FormLabel>Sur quel continent votre siège social se situe-t-il ?</FormLabel>
              <Select disabled name="continentName" placeholder="Europe" />
            </FormControl>

            <SujetForm/>
            {/*    <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" placeholder="Votre description" />
            </FormControl>

            <FormControl id="imageUpload">
              <FormLabel>Télécharger des images</FormLabel>
              <Input type="file" accept="image/*" multiple onChange={handleImageUpload}  />
            </FormControl>

            <FormControl id="label" isRequired>
              <CheckboxGroup colorScheme="green" defaultValue={["Proof of Impact", "Foundation"]}>
                <Stack spacing={[1, 5]} direction={["column", "row"]}>
                  <Checkbox value="Proof of Impact">Proof of Impact</Checkbox>
                  <Checkbox value="Foundation">Foundation</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl> */}
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default FormSociety;
