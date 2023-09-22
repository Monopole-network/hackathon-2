import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SeeAllButtonProps {
  path: string;
}

const SeeAllButton: React.FC<SeeAllButtonProps> = ({ path }) => {
  const router = useRouter();

  return (
    <Button
      borderRadius="20px"
      border="1px solid white"
      borderColor="white"
      w="140px"
      h="48px"
      onClick={() => router.push(path)}
    >
      <Flex w="" justify="center" align="center">
        <Text>Voir Tout</Text>
      </Flex>
    </Button>
  );
};

export default SeeAllButton;
