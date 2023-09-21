
import { LABELS_URL, CRYPTOS_URL, CATEGORIES_URL } from "../routes";
import React,{useState,useEffect} from 'react';


const Filters = () => {

     // TODO Responsive + CSS
     // TODO Recup la liste des projets (json server) mais pour l'instant on fait avec la fake data vu que c vide sur le server
     //fake data À retirer
     const dataInitialProjets = [
        {
            projectName: "Test projet 2",
            description: "The 'FutureGreen' project is an ambitious and innovative initiative aimed at designing and implementing a futuristic, sustainable, green city from scratch.",
            media: [
                {
                    url: "https://testimage.com",
                    alt: ""
                },
                {
                    url: "https://testimage.com",
                    alt: ""
                },
            ],
            address: "70 road Kingston",
            companyName: "Testing Limits",
            crowdfunding: false,
            labelsID: [1],
            cryptosID: [1],
            categoriesID: [1],
            companyTypeID: 1,
            projectManagers: [
                {
                    firstName: "Yolene",
                    lastName: "CONSTABLE",
                    role: "Head Manager"
                }
            ]

        },
        {
            projectName: "Blueprint for a Sustainable City",
            description: "The 'FutureGreen' project is an ambitious and innovative initiative aimed at designing and implementing a futuristic, sustainable, green city from scratch.",
            media: [
                {
                    url: "https://testimage.com",
                    alt: ""
                },
                {
                    url: "https://testimage.com",
                    alt: ""
                },
            ],
            address: "70 road Kingston",
            companyName: "Blueprints",
            crowdfunding: false,
            labelsID: [1],
            cryptosID: [2],
            categoriesID: [2],
            companyTypeID: 1,
            projectManagers: [
                {
                    firstName: "Yolene",
                    lastName: "CONSTABLE",
                    role: "Head Manager"
                }
            ]

        },
        {
            projectName: "WorkForce Equality",
            description: "The 'WorkForce Equality' project is a comprehensive initiative designed to tackle income disparities and promote equal work opportunities.",
            media: [
                {
                    url: "https://testimage.com",
                    alt: ""
                },
                {
                    url: "https://testimage.com",
                    alt: ""
                },
            ],
            address: "70 road Kingston",
            companyName: "Testing Limits 2",
            crowdfunding: false,
            labelsID: [2],
            cryptosID: [1],
            categoriesID: [3],
            companyTypeID: 1,
            projectManagers: [
                {
                    firstName: "Yolene",
                    lastName: "CONSTABLE",
                    role: "Head Manager"
                }
            ]

        },
        {
            projectName: "The Green Machine",
            description: "The 'Green Machine' project is a pioneering venture dedicated to developing eco-friendly transportation technology. Our main focus is on creating innovative and sustainable solutions in the form of electric and hydrogen-powered vehicles.",
            media: [
                {
                    url: "https://testimage.com",
                    alt: ""
                },
                {
                    url: "https://testimage.com",
                    alt: ""
                },
            ],
            address: "70 road Melson",
            companyName: "Green Tech",
            crowdfunding: true,
            labelsID: [2],
            cryptosID: [2],
            categoriesID: [4],
            companyTypeID: 1,
            projectManagers: [
                {
                    firstName: "Yolene",
                    lastName: "CONSTABLE",
                    role: "Head Manager"
                }
            ]

        },
        {
            projectName: "TEEST MARIA",
            description: "The 'WorkForce Equality' project is a comprehensive initiative designed to tackle income disparities and promote equal work opportunities.",
            media: [
                {
                    url: "https://testimage.com",
                    alt: ""
                },
                {
                    url: "https://testimage.com",
                    alt: ""
                },
            ],
            address: "70 road Kingston",
            companyName: "TMARIA",
            crowdfunding: false,
            labelsID: [1],
            cryptosID: [1,2],
            categoriesID: [4],
            companyTypeID: 1,
            projectManagers: [
                {
                    firstName: "Yolene",
                    lastName: "CONSTABLE",
                    role: "Head Manager"
                }
            ]

        },
        
    ]
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedCryptosFilter, setSelectedCryptosFilter] = useState(0);
    const [selectedLabelsFilter, setSelectedLabelsFilter] = useState(0);
    const [cryptos, setCryptos] = useState([]);
    const [labels, setLabels] = useState([]);
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState(dataInitialProjets);
    const [selectedProjects, setSelectedProjects] = useState(dataInitialProjets);


    // Recup la liste des labels et cryptos 
    // TODO Répartir les 2 requetes dans des fonctions différents 
    const fetchListCryptosLabels = async () => {
        // Optimiser si temps dispo (boucle for)
        //fetch labels
        const responseLabels = await fetch(LABELS_URL);
        const dataLabels = await responseLabels.json();
        //console.log(dataLabels);
        setLabels(dataLabels);

        //fetch cryptos
        const responseCryptos = await fetch(CRYPTOS_URL);
        const dataCryptos = await responseCryptos.json();
        console.log(dataCryptos);
        setCryptos(dataCryptos);
        //*/        
    };

    const fetchListCategoriesLabels = async () => {
        // Optimiser si temps dispo (boucle for)
        //fetch categories
        const responseCategories = await fetch(CATEGORIES_URL);
        const dataCategories = await responseCategories.json();
        //console.log(dataLabels);
        setCategories(dataCategories);
    };

    useEffect(() => {
        fetchListCryptosLabels(); 
        fetchListCategoriesLabels();       
    }, []);

    const updateFilteredProjectsByCryptoLabel = () => {
        console.log('updateFilteredProjectsByCryptoLabel()');
        //console.log('selectedCryptosFilter : '+selectedCryptosFilter);
        // on repart d'une base propre
        let projetsFiltred = selectedProjects; 
        console.log("projets filtrés par categories");
        console.log(projetsFiltred);


        console.log("selectedCryptosFilter");
        console.log(selectedCryptosFilter);

        // filtrage des projets par cryptos 
        if (selectedCryptosFilter !== 0 && selectedCryptosFilter !== null) {
            //console.log('updateFilteredProjects FUNCTION');
            console.log('selectedCryptosFilter : '+selectedCryptosFilter);
            projetsFiltred = selectedProjects.filter((project) => project.cryptosID.includes(selectedCryptosFilter));
            console.table(projetsFiltred);
        }


        console.log("selectedLabelsFilter");
        console.log(selectedLabelsFilter);

        // filtrages des projets par labels 
        //console.log('selectedLabelsFilter : '+selectedLabelsFilter);
        if (selectedLabelsFilter !== 0 && selectedLabelsFilter !== null) {
            projetsFiltred = projetsFiltred.filter((project) => project.labelsID.includes(selectedLabelsFilter));
            console.table(projetsFiltred);
        }

        setSelectedProjects(projetsFiltred);
        console.log(projetsFiltred);
    }

    const updateCategoryFilter  = (categoryID:never) => {
        let categoriesFilters = selectedCategory; 
        if (!categoriesFilters.includes(categoryID)) { // si l'id de la catégorie n'est pas présent dans le tableau -> insert 
            categoriesFilters.push(categoryID);
        }
        else { // sinon l'insérer
            const index = categoriesFilters.indexOf(categoryID);
            categoriesFilters.splice(index, 1);
        }
        setSelectedCategory(categoriesFilters);
        console.log(selectedCategory);
        filterProjectsByCategory();
    }

    const filterProjectsByCategory = () => {
        console.log('filterProjectsByCategory ()');
        console.log('selectedCategory');
        console.log(selectedCategory);

        //let projectedAlreadyFiltered = selectedProjects;
        let projectedAlreadyFiltered = projects;
        //console.log(projectedAlreadyFiltered);

        if (selectedCategory.length === 0) {
            console.log('no categories selected');
            console.log(projects);
            setSelectedProjects(projects);
        } else {
            console.log('categories selected');
            /*
            const filteredProjects = projects.filter((project) =>
              selectedCategory.every((categoryId) =>
                project.categoriesID.includes(categoryId)
              )
            );//*/
            let filteredProjects:any[]=[];

            for (let i=0; i<projects.length; i++) {
                let addProject:boolean = false;
                for (let j=0; j<selectedCategory.length; j++) {
                    if (projectedAlreadyFiltered[i].categoriesID.includes(selectedCategory[j])) {
                        addProject = true;
                    }
                }
    
                if (addProject) {
                    filteredProjects.push(projectedAlreadyFiltered[i]);
                }
            }
            setSelectedProjects(filteredProjects);
            console.log(filteredProjects);
          }
         console.log(selectedProjects);
       
    }

    // update des filtrages des projets
    const handleChangeFilter = (e:any) => {
        const value = parseInt(e.target.value);
        const filterType = e.target.id.split("_");

        switch (filterType[2]) {
            case 'labels':
                setSelectedLabelsFilter(value);
            break; 
            case 'cryptos':
                setSelectedCryptosFilter(value);
            break; 
        }
    }

    useEffect(() => {
        console.log("state filters has CHANGED");
        filterProjectsByCategory();
        updateFilteredProjectsByCryptoLabel(); 
        console.log('_____________________________________');
               
    }, [selectedCryptosFilter, selectedLabelsFilter, selectedCategory]);


    // TODO Harmoniser les labels avec le composant de Yolene (implémenter le param pour la couleur fin la renseigner)
    return (
            <div>
                <div>
                    <div>Filtres</div>
                    <div>
                        <div id='cryptosList'>
                            <p>Crypto Monnaie</p>
                            <select onChange={handleChangeFilter} name="cryptos" id="filters__cryptos">
                                <option value="0">CryptoMonnaie</option>
                                {cryptos.map((crypto: any) => <option key={crypto.id} value={crypto.id}>{crypto.name}</option>)}
                            </select>
                        </div>
                        <div id='labelsList'>
                            <p>Labels</p>
                            <select onChange={handleChangeFilter} name="labels" id="filters__labels">
                                <option value="0">Labels</option>
                                {labels.map((label: any) => <option key={label.id} value={label.id}>{label.name}</option>)}
                            </select>
                        </div>

                        <div id='categoriesList'>
                            {categories.map((category:any,i:any) => <div onClick={()=>updateCategoryFilter(category.id)} key={i}>{category.name}</div>)}
                        </div>
                    </div>
                </div>

                <div>----------------------------------</div>
                <div>
                    <div >Projets</div>
                    <div id='projectsContainer_projectsList'>
                        {selectedProjects.map((projet,i)=> <div key={i}>{projet.projectName}</div>)}
                    </div>
                </div>
            </div>
    );
};

export default Filters;