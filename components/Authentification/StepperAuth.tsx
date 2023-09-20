import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import SocietyForm from "./Form/SocietyForm";
import KYBForm from "./Form/KYBForm";
import StrategyForm from "./Form/StrategyForm";
import Maturity from "./Form/MaturityForm";
import BusinessForm from "./Form/BusinessForm";
import RSEForm from "./Form/RSEForm";

const steps = [
  { title: "KYB", content: "Contenu de la première étape" },
  { title: "Votre Société", content: "Contenu de la première étape" },
  { title: "Votre stratégie", content: "Contenu de la deuxième étape" },
  { title: "Votre maturité digitale", content: "Contenu de la troisième étape" },
  { title: "Votre buisness model", content: "Contenu de la quatrième étape" },
  { title: "Votre démarche RSE", content: "Contenu de la cinquième étape" },
];

const StepperWithProgressBar: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Box>
        <Box position="relative">
          <Box border="1px" borderColor="red">
            <Heading as="h1" mb={4} textAlign='center' fontSize={32}>
              Ajout de votre projet
            </Heading>
            <Tabs variant="unstyled" index={currentStep}>
              <TabList border="1px" borderColor="red" display="flex" alignItems="center" justifyContent="center">
                {steps.map((step, index) => (
                  <Tab key={index} isDisabled={index > currentStep} >
                    <Box key={index} textAlign="center">
                      <Circle
                        size="50px"
                        borderWidth={2}
                        borderColor={index < currentStep ? "green.500" : "gray.300"}
                        bg={index < currentStep ? "green.500" : "white"}
                        color={index < currentStep ? "white" : "black"}
                        cursor="pointer"
                        onClick={() => setCurrentStep(index)}
                      >
                        {index}
                      </Circle>
                      <Text mt={2}>{step.title}</Text>
                    </Box>
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                {steps.map((step, index) => (
                  <TabPanel key={index}>
                    <>
                      <Box border="1px" borderColor="red" maxW="530px" mx="auto" my="auto">
                        {index === 0 && <KYBForm />}
                        {index === 1 && <SocietyForm />}
                        {index === 2 && <StrategyForm />}
                        {index === 3 && <Maturity />}
                        {index === 4 && <BusinessForm/>}
                        {index === 5 && <RSEForm/>}
                      </Box>
                    </>

                    <HStack mt={4}>
                      <Button onClick={prevStep} mr={2} isDisabled={currentStep === 0}>
                        Précédent
                      </Button>
                      <Button onClick={nextStep} isDisabled={currentStep === steps.length - 1}>
                        Suivant
                      </Button>
                    </HStack>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StepperWithProgressBar;
