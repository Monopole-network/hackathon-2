import { Box, Checkbox, CheckboxGroup, Flex, Text } from "@chakra-ui/react";
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
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import StepperAuth from "../components/Authentification/StepperAuth";

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
      <StepperAuth />
    </Flex>
  );
};

export default Authentification;
