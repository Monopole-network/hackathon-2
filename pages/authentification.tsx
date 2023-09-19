import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const Authentification: NextPage = () => {
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
      <Box w="90%" maxW="800px" mx="auto" color="white" borderWidth="1px" borderRadius="lg">
        <form>
          <VStack>
            <FormControl id="projectName" isRequired>
              <FormLabel>Nom du projet</FormLabel>
              <Input disabled type="text" name="projectName" />
            </FormControl>

            <FormControl id="companyName" isRequired>
              <FormLabel>Nom de l'entreprise </FormLabel>
              <Input disabled type="text" name="companyName" />
            </FormControl>

            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input type="text" name="description" placeholder="Votre description" />
            </FormControl>

            <FormControl id="address" isRequired>
              <FormLabel>Adresse</FormLabel>
              <Input type="text" name="address" placeholder="Votre adresse" />
            </FormControl>

            <FormControl id="address" isRequired>
              <Checkbox defaultChecked>Levée de fond </Checkbox>
            </FormControl>

            <Button type="submit" colorScheme="blue" mt={4}>
              Soumettre
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Authentification;
