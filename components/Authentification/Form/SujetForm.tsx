import { Box, Checkbox, CheckboxGroup, Flex, Heading, Select, Text, Wrap, WrapItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack, HStack, VStack, Button, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";



const SujetForm: React.FC = () => {

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const URL = "http://localhost:3001/categories";
    const response = await fetch(URL);
    const data = await response.json();
    setCategories(data);
    if (response.ok) {
      console.log("Données du formulaire envoyées avec succès :", categories);
    } else {
      console.error("Échec de l'envoi des données du formulaire :", response.status);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);


  const categoryNames = [];

// Parcourir chaque élément et extraire le nom
for (const category of categories) {
  categoryNames.push(category.name);
}

console.log(categoryNames);

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto">
        <Heading as="h1" mb={4}>
          Dans quel(s) sujet(s) se placent votre projet ?
        </Heading>
        <VStack>
          <CheckboxGroup colorScheme="green">
            <Wrap spacing="0.5rem">
              {categoryNames.map((sujet, index) => (
                <WrapItem key={index} maxW="100%" border="1px" padding="0.5rem" borderRadius={8}>
                  <Checkbox value={sujet}>{sujet}</Checkbox>
                </WrapItem>
              ))}
            </Wrap>
          </CheckboxGroup>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SujetForm;
