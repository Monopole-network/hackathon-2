import { Button, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ShieldCheckIcon, ShieldCheckLightIcon } from '../Icons';

const AuthentificationBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="authentification">
      {router.pathname === '/authentification' ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push('/authentification');
          }}
          aria-label='Authentification button'
        >
          <ShieldCheckIcon height="24px" width="24px" />
        </Button>
      ) : (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          onClick={() => {
            router.push('/authentification');
          }}
          aria-label='Authentification button'
        >
          <ShieldCheckLightIcon color="#646587" height="24px" width="24px" />
        </Button>
      )}
    </Tooltip>
  );
};

export default AuthentificationBtn;
