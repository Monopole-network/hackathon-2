import { Box, Flex, Progress, Text, useColorMode } from "@chakra-ui/react";

import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "Votre Société", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const StepperAuth: React.FC = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const activeStepText = steps[activeStep].description;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;
  return (
    <>
      <Box>
        <Text>Ajout de votre projet</Text>
        <Box position="relative">
          <Stepper size="sm" index={activeStep} gap="0">
            {steps.map((step, index) => (
              <Step key={index} gap="0">
                <StepIndicator bg="white">
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
              </Step>
            ))}
          </Stepper>
          <Progress value={progressPercent} position="absolute" height="3px" width="full" top="10px" zIndex={-1} />
        </Box>
      </Box>
    </>
  );
};

export default StepperAuth;
