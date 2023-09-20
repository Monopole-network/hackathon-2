import { Box, Checkbox, CheckboxGroup, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  HStack,
  VStack,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";


const FormSociety : React.FC = () => {
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
              <FormLabel>Nom de l&rsquo;entreprise </FormLabel>
              <Input disabled type="text" name="companyName" />
            </FormControl>

            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" placeholder="Votre description" />
            </FormControl>

            <FormControl id="address" isRequired>
              <FormLabel>Adresse</FormLabel>
              <Input disabled type="text" name="address" placeholder="Votre adresse" />
            </FormControl>

            <FormControl id="address" isRequired>
              <Checkbox defaultChecked>Levée de fond </Checkbox>
            </FormControl>

            <FormControl id="imageUpload">
              <FormLabel>Télécharger des images</FormLabel>
              <Input type="file" accept="image/*" multiple /* onChange={handleImageUpload} */ />
            </FormControl>

            <FormControl id="label" isRequired>
              <CheckboxGroup colorScheme="green" defaultValue={["Proof of Impact", "Foundation"]}>
                <Stack spacing={[1, 5]} direction={["column", "row"]}>
                  <Checkbox value="Proof of Impact">Proof of Impact</Checkbox>
                  <Checkbox value="Foundation">Foundation</Checkbox>
                </Stack>
              </CheckboxGroup>
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

export default FormSociety;
