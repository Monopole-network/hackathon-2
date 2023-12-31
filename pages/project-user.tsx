import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ChartCard from '../components/ChartCard/ChartCard';

const ProjectUser: NextPage = () => {
  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <div className='chart-cards'>
      <ChartCard CatName='Démarche RSE' TxtResult='Vos critères RSE sont respectés.' Percent={92} Color='rgba(2, 163, 116, 1)' />
      <ChartCard CatName='Votre produit' TxtResult='Veuillez revoir “votre mission, vision & perspectives d’avenir”.' Percent={75} Color='rgba(217, 104, 0, 1)'  />
      <ChartCard CatName='Votre équipe' TxtResult='Veuillez revoir plusieurs critères.' Percent={46} Color='rgba(92, 0, 184, 1)'  />
      <ChartCard CatName='Votre business model' TxtResult='Veuillez revoir “votre mission, vision & perspectives d’avenir”.' Percent={84} Color='rgba(0, 22, 217, 1)'  />
      <ChartCard CatName='Votre expérience blockchain & web3' TxtResult='Veuillez revoir plusieurs critères.' Percent={18} Color='rgba(0, 132, 255, 1)'  />
      </div>
    </Flex>
  );
};

export default ProjectUser;
