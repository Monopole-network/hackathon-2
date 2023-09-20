import React,{useState,useEffect} from 'react';

const Filters = () => {
    const [selectedCryptosFilter, setSelectedCryptosFilter] = useState("");
    const [selectedLabelsFilter, setSelectedLabelsFilter] = useState("");
    const [cryptos, setCryptos] = useState([]);
    const [labels, setLabels] = useState([]);
    //const [categories, setCategories] = useState([]);
    //const [selectedProjetTypeFilter, setSelectedProjetTypeFilter] = useState("");

    let urlBase = 'http://localhost:3001/';
    // Recup la liste des labels et cryptos 
    const fetchListCryptosLabels = async () => {
        //fetch labels
        const responseLabels = await fetch(urlBase+ 'labels');
        const dataLabels = await responseLabels.json();
        console.log(dataLabels);
        setLabels(dataLabels);

        //fetch cryptos
        const responseCryptos = await fetch(urlBase+ 'cryptos');
        const dataCryptos = await responseCryptos.json();
        console.log(dataCryptos);
        setCryptos(dataCryptos);
        //*/
      };

    useEffect(() => {
        fetchListCryptosLabels();
    }, []);

    
    //fake data À retirer
    const dataProjets = [
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
            cryptosID: [1, 2],
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
            cryptosID: [1, 2],
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

    // update des filtrages des projets
    const handleChangeFilter = (e:any) => {
        const value = e.target.value;
        const filterType = e.target.id.split("_");
        console.log(e);
        switch (filterType[2]) {
            case 'labels':
                setSelectedLabelsFilter(value);
            break; 
            case 'cryptos':
                setSelectedCryptosFilter(value);
            break; 
        }
      }

    console.log(selectedCryptosFilter, selectedLabelsFilter)
    return (
            <div>
                <div>
                    <div>Filtres</div>
                    <div>
                        <div>
                            <p>Crypto Monnaie</p>
                            <select onChange={handleChangeFilter} name="cryptos" id="filters__cryptos">
                                <option value="">CryptoMonnaie</option>
                                {cryptos.map((crypto: string, i: number) => <option key={i} value={crypto.name}>{crypto.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <p>Labels</p>
                            <select onChange={handleChangeFilter} name="categories" id="filters__labels">
                                <option value="">Labels</option>
                                {labels.map((label: string, i:number) => <option key={i} value={label.name}>{label.name}</option>)}
                            </select>
                        </div>

                        <div id='categoriesList'>
                            {categories.map((category) => <div>{category}</div>)}
                        </div>
                    </div>
                </div>
                <div>
                    <div>Projets</div>
                    <div>{dataProjets.map((projet,i)=> <div key={i}>{projet.companyName}</div>)}</div>
                </div>
            </div>
    );
};

export default Filters;