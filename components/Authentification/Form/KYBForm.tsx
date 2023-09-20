import { Box,Flex, Heading } from "@chakra-ui/react";
import { FormControl, FormLabel, Input} from "@chakra-ui/react";

const FormKYB: React.FC = () => {
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="100%" mx="auto" >
        <Heading as="h1" mb={4} fontSize={32}>
          Avant de commencer
        </Heading>
        <FormControl isRequired>
          <FormLabel>Insérez votre KYB</FormLabel>
          <Input placeholder="0000000" />
        </FormControl>
      </Box>
    </Flex>
  );
};

export default FormKYB;