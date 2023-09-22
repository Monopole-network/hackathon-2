import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { PROJECTS_URL, CATEGORIES_URL } from "../routes";
import { Project, Category, filterTypes } from "../globalTypes";
import Card from "../components/Card/Card";
import { Spinner } from "@chakra-ui/react";
import Filter from "../components/Filter/Filter";
import TagCategory from "../components/TagCategory/TagCategory";

const Home: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<any>({
    crypto: undefined,
    label: undefined,
    categories: [],
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loadData, setLoadData] = useState<boolean>(false);
  const filterBgColor = useColorModeValue("#E84142", "rgba(207, 171, 253, 0.12)");
  const sorTextColor = useColorModeValue("#000", "#fff");

  const fetchCategories = async () => {
    const response = await fetch(CATEGORIES_URL);
    const data = await response.json();

    setCategories(data);
  };

  const fetchProjects = async () => {
    setLoadData(true);
    const response = await fetch(PROJECTS_URL);
    const data = await response.json();

    setLoadData(false);
    setProjects(data);
    setFilteredProjects(data);
  };

  const filterProjects = () => {
    if (
      selectedFilters.label === undefined &&
      selectedFilters.crypto === undefined &&
      selectedFilters.categories.length === 0
    ) {
      setFilteredProjects(projects);
      return;
    }

    const definedKeys = Object.keys(selectedFilters).filter((key) => {
      if (Array.isArray(selectedFilters[key])) {
        return selectedFilters[key].length > 0;
      } else {
        return selectedFilters[key] !== undefined;
      }
    });

    const projectsByFilter: any = {};

    definedKeys.map((key) => {
      switch (key) {
        case "crypto":
          projectsByFilter["crypto"] = projects.filter((project) =>
            project.cryptosID.includes(selectedFilters?.crypto!)
          );
          break;

        case "label":
          projectsByFilter["label"] = projects.filter((project) => project.labelsID.includes(selectedFilters?.label!));
          break;

        case "categories":
          projectsByFilter["categories"] = projects.filter((project) =>
            project.categoriesID.some((projectCategoryID) => selectedFilters.categories.includes(projectCategoryID))
          );
          break;

        default:
          break;
      }
    });

    for (const key in projectsByFilter) {
      if (projectsByFilter[key].length === 0) {
        delete projectsByFilter[key];
      }
    }

    const newProjectsFiltered = projects.filter((project) => {
      if (Object.keys(projectsByFilter).length > 0) {
        return Object.keys(projectsByFilter)
          .map((filter) => {
            switch (filter) {
              case "crypto":
                return project.cryptosID.includes(selectedFilters[filter]!);

              case "label":
                return project.labelsID.includes(selectedFilters[filter]!);

              case "categories":
                return project.categoriesID.some((projectCategoryID) =>
                  selectedFilters.categories.includes(projectCategoryID)
                );

              default:
                break;
            }
          })
          .every((filter) => filter === true);
      } else {
        return false;
      }
    });

    if (newProjectsFiltered.length > 0) {
      setFilteredProjects(newProjectsFiltered);
      return;
    }

    setFilteredProjects(projects);
  };

  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [selectedFilters]);

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="90%" maxW="1200px" mx="auto" my="50px" pt="20px">
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap={30}
          alignItems="center"
          borderRadius={16}
          backgroundColor={filterBgColor}
          padding="20px 31px"
          minHeight="80px"
          marginBottom="32px"
        >
          <Flex flexWrap="wrap" gap={15}>
            <Filter filters={selectedFilters} setFilters={setSelectedFilters} filterType={filterTypes.crypto} />
            <Filter filters={selectedFilters} setFilters={setSelectedFilters} filterType={filterTypes.label} />
          </Flex>
          <div style={{ marginLeft: "auto", color: sorTextColor, cursor: "notAllowed" }}>Trier</div>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center" gap={5} marginBottom="32px">
          {categories.map((category) => (
            <TagCategory
              key={category.id}
              categoryID={category.id}
              filters={selectedFilters}
              setFilters={setSelectedFilters}
              isSelected={selectedFilters.categories.includes(category.id)}
              large
            />
          ))}
        </Flex>
        <Grid gridTemplateColumns="repeat(auto-fit, 281px)" justifyContent="center" minHeight="500px" gap={25}>
          {loadData ? (
            <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
              <Spinner size="xl" color="#fff" />
            </Flex>
          ) : (
            filteredProjects.map((project) => (
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
        </Grid>
      </Box>
    </Flex>
  );
};

export default Home;
