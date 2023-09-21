import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  Text,
} from "@chakra-ui/react";
import SocietyForm from "./Form/SocietyForm";
import KYBForm from "./Form/KYBForm";
import StrategyForm from "./Form/StrategyForm";
import Maturity from "./Form/MaturityForm";
import BusinessForm from "./Form/BusinessForm";
import RSEForm from "./Form/RSEForm";

const steps = [
  "KYB",
  "Votre Société",
  "Votre stratégie",
  "Votre maturité digitale",
  "Votre buisness model",
  "Votre démarche RSE",
];

const StepperWithProgressBar = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex: React.SetStateAction<number>) => {
    setActiveStep(stepIndex);
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;

  const [formData, setFormData] = useState({});

  const handleFormDataSubmit = async () => {
    // Envoyez les données du formulaire au serveur

    const URL = "http://localhost:3001/projects";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Données du formulaire envoyées avec succès :", data);
      } else {
        console.error("Échec de l'envoi des données du formulaire :", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données du formulaire :", error);
    }
  };

  const stepComponents = [
    <KYBForm formData={formData} setFormData={setFormData} />,
    <SocietyForm formData={formData} setFormData={setFormData} />,
    <StrategyForm formData={formData} setFormData={setFormData} />,
    <Maturity formData={formData} setFormData={setFormData} />,
    <BusinessForm formData={formData} setFormData={setFormData} />,
    <RSEForm formData={formData} setFormData={setFormData} />,
  ];

  const handleTestFormData = () => {
    console.log("Données du formulaire :", formData);
  };


  return (
    <Box>
      <Box position="relative">
        <Box>
          <Heading as="h1" mb={4} textAlign="center" fontSize={32}>
            Ajout de votre projet
          </Heading>
          <Stack>
            <Stepper size="sm" index={activeStep} gap="0">
              {steps.map((step, index) => (
                <>
                  <Text textAlign="center">{step}</Text>
                  <Step key={index} onClick={() => handleStepClick(index)}>
                    <StepIndicator>
                      <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                    {index < steps.length - 1 && <StepSeparator />}
                  </Step>
                </>
              ))}
            </Stepper>
            <Box border="1px" borderRadius="12px" w="530px" mx="auto" my="auto">
              {stepComponents[activeStep]}
            </Box>
            <HStack justifyContent="center" mt={4}>
              {!isFirstStep && (
                <Button onClick={handlePrevStep} colorScheme="blue">
                  Précédent
                </Button>
              )}
              {!isLastStep && (
                <Button onClick={handleNextStep} colorScheme="blue">
                  Suivant
                </Button>
              )}
              {isLastStep && (
                <Button onClick={handleFormDataSubmit} colorScheme="blue">
                  Enregistrer
                </Button>
              )}
            </HStack>
            <Button onClick={handleTestFormData} colorScheme="green">
            Tester l&rsquo;enregistrement
          </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default StepperWithProgressBar;
