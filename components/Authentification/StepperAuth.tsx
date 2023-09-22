import React, { useEffect, useState } from "react";
import { Box, Button, Center, Flex, Heading, HStack, Link, Stack, Text } from "@chakra-ui/react";
import SocietyForm from "./Form/SocietyForm";
import StrategyForm from "./Form/StrategyForm";
import MaturityForm from "./Form/MaturityForm";
import BusinessForm from "./Form/BusinessForm";
import RSEForm from "./Form/RSEForm";
import { PROJECTS_URL } from "../../routes";
import FormSociety from "./Form/SocietyForm";
import Stepper from "react-stepper-horizontal";
import style from "./Stepper.module.css";
import SujetForm from "./Form/SujetForm";

const steps = [
  {
    title: "KYB",
  },
  {
    title: "Votre Société",
  },
  {
    title: "Votre stratégie",
  },
  {
    title: "Votre maturité digitale",
  },
  {
    title: "Votre buisness model",
  },
  {
    title: "Votre démarche RSE",
  },
];

const StepperWithProgressBar = () => {
  ///////////////////////////////DECLARATION VARIABLES /////////////////////////////

  const [initialFormData, setInitialFormData] = useState({
    projectName: "",
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
    address: "",
    zipCode: 0,
    country: "France",
    continent: "Europe",
    companyID: 2,
    criteria: { Strategy: {}, Maturity: {}, Business: {}, RSE: {} },
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
  });

  const [formData, setFormData] = useState(initialFormData);

  const initialFormDataSociety = {
    societyName: 0,
    address: "1 rue du dahomey",
    country: "France",
    zipCode: 26555,
    continent: "Europe",
  };

  const [formDataSociety, setFormDataSociety] = useState(initialFormDataSociety);
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSujetForm, setShowSujetForm] = useState(false);

  /////////////////////////////////////////////////////////////////////////
  const handleStepClick = (stepIndex: React.SetStateAction<number>) => {
    setActiveStep(stepIndex);
  };

  const handleNextStep = () => {
    if (activeStep === 1 && !showSujetForm) {
      // Si l'étape actuelle est la deuxième étape (étape Société)
      // et que showSujetForm est faux, affichez SujetForm
      setShowSujetForm(true);
    } else if (activeStep < steps.length - 1) {
      // Si l'étape actuelle n'est pas la dernière, passez à l'étape suivante
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;

  // Fonction pour mettre à jour formDataSociety
  const updateFormDataSociety = (newData: any) => {
    setFormDataSociety((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const updatedFormData = { ...formData };

  updatedFormData.address = formDataSociety.address;
  updatedFormData.zipCode = formDataSociety.zipCode;
  updatedFormData.country = formDataSociety.country;
  //updatedFormData.societyName = formDataSociety.address;
  updatedFormData.continent = formDataSociety.continent;

  //////////////////////////////////////////////// REQUETE POST////////////////////////////////////////////////
  const handleFormDataSubmit = async () => {
    // Envoyez les données du formulaire au serveur

    try {
      const response = await fetch(PROJECTS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
      console.log("formData in POST", updatedFormData);
      if (response.ok) {
        const data = await response.json();
        console.log("Données du formulaire envoyées avec succès :", data);
        setIsSubmitted(true);
      } else {
        console.error("Échec de l'envoi des données du formulaire :", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données du formulaire :", error);
    }
  };
  //////////////////////////////////////////////// ////////////////////////////////////////////////
  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return (
          <>
            {" "}
            <Heading as="h1" mb={4} fontSize={32}>
              Avant de commencer
            </Heading>
          </>
        );
      case 1:
        return showSujetForm ? (
          <SujetForm formData={formData} setFormData={setFormData} />
        ) : (
          <FormSociety formData={formDataSociety} setFormData={updateFormDataSociety} />
        );
      case 2:
        return <StrategyForm formData={formData} setFormData={setFormData} />;
      case 3:
        return <MaturityForm formData={formData} setFormData={setFormData} />;
      case 4:
        return <BusinessForm formData={formData} setFormData={setFormData} />;
      case 5:
        return <RSEForm formData={formData} setFormData={setFormData} isSubmitted={isSubmitted} />;
      default:
        return null;
    }
  }
  const stepComponents = [,];

  return (
    <Box position="relative">
      <Box>
        <Stack border="1px" backgroundColor="#0C0E47">
          <Text>
            <Link href="/">Accueil</Link> &#62; <Link href="/authentification">Ajout de votre proje</Link>t
          </Text>
          <Heading  as="h1" mb={4} textAlign="center" fontSize={32}>
            Ajout de votre projet
          </Heading>
          <Center padding="80px">
            <Stepper
              steps={steps}
              activeStep={activeStep}
              activeColor="#ffd813"
              defaultColor="#eee"
              completeColor="#ffbd13"
              activeTitleColor="#fff"
              completeTitleColor="#eee"
              defaultTitleColor="#bbb"
              circleFontColor="#000"
              completeBarColor="#ffbd13"
            />
          </Center>
        </Stack>
        <Stack padding="80px 120px">
          <Center>
            <Box maxW="530px">{getSectionComponent()}</Box>
          </Center>
          <HStack justifyContent="center" w="100%" mt={4}>
            {isFirstStep && (
              <Button onClick={handleNextStep} colorScheme="blue">
                Inserez votre KYB
              </Button>
            )}
            {!isFirstStep && !isSubmitted && (
              <Button onClick={handlePrevStep} colorScheme="blue">
                Précédent
              </Button>
            )}
            {!isLastStep && !isFirstStep && (
              <Button onClick={handleNextStep} colorScheme="blue">
                Suivant
              </Button>
            )}
            {isLastStep && !isSubmitted && (
              <Button onClick={handleFormDataSubmit} colorScheme="blue">
                Enregistrer
              </Button>
            )}
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default StepperWithProgressBar;
