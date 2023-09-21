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
 

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <StepperAuth />
    </Flex>
  );
};

export default Authentification;
