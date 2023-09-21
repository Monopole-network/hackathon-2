import { Button, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HomeIcon, HomeLightIcon } from '../Icons';

const ProjectUserBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="ProjectUser">
      {router.pathname === '/project-user' ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push('/project-user');
          }}
          aria-label='Project user button'
        >
          <HomeIcon height="24px" width="24px" />
        </Button>
      ) : (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          onClick={() => {
            router.push('/project-user');
          }}
          aria-label='ProjectUser button'
        >
          <HomeLightIcon color="#646587" height="24px" width="24px" />
        </Button>
      )}
    </Tooltip>
  );
};

export default ProjectUserBtn;
