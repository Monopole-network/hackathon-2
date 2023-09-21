import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Progress,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
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

const StepperWithProgressBar: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex: SetStateAction<number>) => {
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

  const activeStepText = steps[activeStep];

  const [formData, setFormData] = useState({
    clientsTypes: [],
    continent: null,
    reorientationStratégies: [],
  });
  const handleFormSubmit = () => {
    // Envoyez les données où vous le souhaitez (par exemple, à une autre page ou un backend)
    console.log("Données du formulaire envoyées :", formData);
  };

  // Composants à afficher en fonction de l'étape active
  const stepComponents = [
    // eslint-disable-next-line react/jsx-key
    <KYBForm />,
    // eslint-disable-next-line react/jsx-key
    <SocietyForm />,
    // eslint-disable-next-line react/jsx-key
  
    // eslint-disable-next-line react/jsx-key
    <Maturity />,
    // eslint-disable-next-line react/jsx-key
    <BusinessForm />,
    // eslint-disable-next-line react/jsx-key
    <RSEForm />,

    // eslint-disable-next-line react/jsx-key
    <StrategyForm
    formData={formData} // Passez les données en tant que props
    setFormData={setFormData} // Passez la fonction pour mettre à jour les données en tant que props
  />
  ];

  return (
    <>
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
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StepperWithProgressBar;
