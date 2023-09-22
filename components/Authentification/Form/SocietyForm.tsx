import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Stack, VStack, Select } from "@chakra-ui/react";
import SujetForm from "./SujetForm";

const FormSociety: React.FC = ({ formData, setFormData }: any) => {
  // Utilisez les valeurs du formData plutôt que des valeurs statiques
  const { adress, country, zipCode, continent } = formData;
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyName, setSelectedCompanyName] = useState("");

  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const companyName = event.target.value;
    setSelectedCompanyName(companyName);

    // Vous pouvez rechercher l'ID de l'entreprise correspondante ici
    // par exemple, en parcourant la liste des entreprises et en comparant les noms
    const selectedCompany = companies.find((company) => company.companyName === companyName);

    // Si une entreprise correspondante est trouvée, mettez à jour companyID
    // Sinon, vous pouvez gérer la logique de création de l'entreprise ici
    if (selectedCompany) {
      setFormData((prevData: any) => ({
        ...prevData,
        companyID: selectedCompany.id,
      }));
    } else {
      // Gérez la création de l'entreprise ici si nécessaire
    }
  };
  const fetchCompanies = async () => {
    const URL = "http://localhost:3001/companies";
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      setCompanies(data);
      console.log("Entreprises récupérées avec succès :", companies);
    } else {
      console.error("Échec de la récupération des entreprises :", response.status);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);


  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Mettez à jour formData en fonction du champ du formulaire modifié
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box w="100%" mx="auto">
      <Heading as="h1" mb={4} fontSize="32px">
        Votre société
      </Heading>
      <Text>Les informations s’auto-complètent, on récupère ces informations là, grâce à votre KYB.</Text>
      <VStack>
        <FormControl id="societyName" isRequired>
          <FormLabel>Dénomination légale de votre entreprise</FormLabel>
          <Input
            disabled
            type="text"
            name="societyName"
            value={selectedCompanyName}
            onChange={handleCompanyNameChange}// Utilisez onChange pour mettre à jour la valeur
          />
        </FormControl>

        <FormControl id="adress" isRequired>
          <FormLabel>Adresse postale</FormLabel>
          <Input disabled type="text" name="adress" value={adress} onChange={handleFormChange} />
        </FormControl>

        <FormControl id="countryName" isRequired>
          <FormLabel>Pays</FormLabel>
          <Select disabled name="countryName" value={country} onChange={handleFormChange}>
            <option value="France">France</option>
            <option value="Suede">Suede</option>
          </Select>
        </FormControl>

        <FormControl id="CodePostal" isRequired>
          <FormLabel>Code Postale</FormLabel>
          <Input disabled type="number" name="CodePostal" value={zipCode} onChange={handleFormChange} />
        </FormControl>

        <FormControl id="continentName" isRequired>
          <FormLabel>Sur quel continent votre siège social se situe-t-il ?</FormLabel>
          <Select disabled name="continentName" value={continent} onChange={handleFormChange}>
            <option value="Europe">Europe</option>
            <option value="Asie">Asie</option>
          </Select>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormSociety;
