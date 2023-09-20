
import { LABELS_URL, CRYPTOS_URL } from "../routes";
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
            cryptosID: [1, 3],
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
            cryptosID: [2,4],
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
            labelsID: [1],
            cryptosID: [3],
            companyTypeID: 1,
            projectManagers: [
                {
                    firstName: "Yolene",
                    lastName: "CONSTABLE",
                    role: "Head Manager"
                }
            ]

        }
    ]
    const [selectedCryptosFilter, setSelectedCryptosFilter] = useState(0);
    const [selectedLabelsFilter, setSelectedLabelsFilter] = useState(0);
    const [cryptos, setCryptos] = useState([]);
    const [labels, setLabels] = useState([]);
    const [categories, setCategories] = useState([]);
    //const [selectedProjetTypeFilter, setSelectedProjetTypeFilter] = useState("");
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

    useEffect(() => {
        fetchListCryptosLabels();        
    }, []);

    useEffect(() => {
        updateFilteredProjects();        
    }, [selectedCryptosFilter]);

    const updateFilteredProjects = () => {
        if (selectedCryptosFilter !== 0 && selectedCryptosFilter !== null) {
            console.log('updateFilteredProjects FUNCTION');
            console.log('selectedCryptosFilter : '+selectedCryptosFilter);
            let projetsFiltred = projects.filter((project) => project.cryptosID.includes(selectedCryptosFilter));
            console.table(projetsFiltred);
            setSelectedProjects(projetsFiltred);
    
        }
    }

    // update des filtrages des projets
    const handleChangeFilter = (e:string) => {
        //console.log(e);
        //console.log(e.target.value);
        const value = parseInt(e.target.value);
        const filterType = e.target.id.split("_");
        //console.log(typeof value);
        //console.log("filtre id value  : "+value);
        //console.log("before set selectedCryptosFilter : "+selectedCryptosFilter);

        switch (filterType[2]) {
            case 'labels':
                setSelectedLabelsFilter(value);
            break; 
            case 'cryptos':
                setSelectedCryptosFilter(value);
            break; 
        }

        //update des projets à filtrer 
        //console.log("after set selectedCryptosFilter : "+selectedCryptosFilter);
        //let projetsFiltred = projects.filter((project) => project.cryptosID.includes(selectedCryptosFilter));
        //setSelectedProjects();
      }

    console.log(selectedCryptosFilter, selectedLabelsFilter)
    console.log(projects);
    console.log(selectedProjects);
    return (
            <div>
                <div>
                    <div>Filtres</div>
                    <div>
                        <div>
                            <p>Crypto Monnaie</p>
                            <select onChange={handleChangeFilter} name="cryptos" id="filters__cryptos">
                                <option value="">CryptoMonnaie</option>
                                {cryptos.map((crypto: string) => <option key={crypto.id} value={crypto.id}>{crypto.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <p>Labels</p>
                            <select onChange={handleChangeFilter} name="categories" id="filters__labels">
                                <option value="">Labels</option>
                                {labels.map((label: string) => <option key={label.id} value={label.id}>{label.name}</option>)}
                            </select>
                        </div>

                        <div id='categoriesList'>
                            {categories.map((category) => <div>{category}</div>)}
                        </div>
                    </div>
                </div>

                <div>----------------------------------</div>
                <div>
                    <div>Projets</div>
                    <div>{selectedProjects.map((projet,i)=> <div key={i}>{projet.projectName}</div>)}</div>
                </div>
            </div>
    );
};

export default Filters;