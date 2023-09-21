import React, { useEffect, useState } from "react";
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
import MaturityForm from "./Form/MaturityForm";
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
  const [projects, setProjects] = useState("");
  const handleStepClick = (stepIndex: React.SetStateAction<number>) => {
    setActiveStep(stepIndex);
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
    console.log(formData);
  };

  const handlePrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;

  const initialFormData = {
 
    projectName: "Projet ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    medias: [
      {
        url: "https://source.unsplash.com/random?environment",
        alt: "Ceci est une image de projet",
      },
      {
        url: "https://source.unsplash.com/random?environment",
        alt: "Ceci est une image de projet",
      },
    ],
    address: "Bla bla bla",
    zipCode: 75000,
    country: "France",
    continent: "Europe",
    companyID: 2,
    criteria: { KYB: {}, Society: {}, Strategy: {}, Maturity: {}, Business: {}, RSE: {} },
    crowdfunding: false,
    categoriesID: [1],
    labelsID: [1],
    cryptosID: [1, 2, 3, 4],
    companyTypeID: 1,
    projectManagers: [
      {
        firstName: "",
        lastName: "",
        role: "",
      },
    ],
  };

  const [formData, setFormData] = useState(initialFormData);

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

      console.log(formData , response)

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
    <MaturityForm formData={formData} setFormData={setFormData} />,
    <BusinessForm formData={formData} setFormData={setFormData} />,
    <RSEForm formData={formData} setFormData={setFormData} />,
  ];

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
                  <Text key={step} textAlign="center">
                    {step}
                  </Text>
                  <Step key={step} onClick={() => handleStepClick(index)}>
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
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default StepperWithProgressBar;
