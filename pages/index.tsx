import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { PROJECTS_URL } from "../routes";
import { Project } from "../globalTypes";
import Card from "../components/Card/Card";
import { Spinner } from "@chakra-ui/react";

const Home: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadData, setLoadData] = useState<boolean>(false);

  const fetchProjects = async () => {
    setLoadData(true);
    const response = await fetch(PROJECTS_URL);
    const data = await response.json();

    setLoadData(false);
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="90%" maxW="1200px" mx="auto" pt="20px">
        <Flex flexWrap="wrap" justifyContent="center" minHeight="500px" gap={25}>
          {loadData ? (
            <Flex alignItems="center">
              <Spinner size="xl" color="#fff" />
            </Flex>
          ) : (
            projects.map((project) => (
              <Card
                key={project.id}
                media={project.medias[0]}
                projectName={project.projectName}
                companyID={project.companyID}
                categoriesID={project.categoriesID}
                description={project.description}
                cryptosID={project.cryptosID}
              />
            ))
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
