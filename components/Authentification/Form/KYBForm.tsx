import { Box, Flex, Heading } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormKYB: React.FC = ({ formData, setFormData }: any) => {
  // Générer un nombre aléatoire entre 0 et 9999999

  return (
    <Box w="100%" mx="auto">
      <Heading as="h1" mb={4} fontSize={32}>
        Avant de commencer
      </Heading>
      <FormControl isRequired>
        <FormLabel>Insérez votre KYB</FormLabel>
        {/* Utilisez le nombre aléatoire comme valeur initiale */}
      </FormControl>
    </Box>
  );
};

export default FormKYB;
