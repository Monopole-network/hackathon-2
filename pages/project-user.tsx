import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ChartCard from '../components/ChartCard/ChartCard';

const ProjectUser: NextPage = () => {
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <div className='chart-cards'>
      <ChartCard CatName='Démarche RSE' TxtResult='Vos critères RSE sont respectés.' percent={92} />
      <ChartCard CatName='Votre produit' TxtResult='Veuillez revoir “votre mission, vision & perspectives d’avenir”. Appuyez sur Voir tout pour avoir plus de détails' percent={80} />
      </div>
    </Flex>
  );
};

export default ProjectUser;
