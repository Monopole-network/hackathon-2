
import {categories} from '../data/categories';
import {cryptos} from '../data/cryptos';
import {labels} from '../data/labels';
import React,{useState,useEffect} from 'react';


const Filters = () => {

    const [selectedCryptosFilter, setSelectedCryptosFilter] = useState("");
    const [selectedLabelsFilter, setSelectedLabelsFilter] = useState("");
    //const [selectedProjetTypeFilter, setSelectedProjetTypeFilter] = useState("");

    // filtrages des projets
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
                <div>Filtres</div>
                <div>
                    <div>
                        <p>Crypto Monnaie</p>
                        <select onChange={handleChangeFilter} name="cryptos" id="filters__cryptos">
                            <option value="">CryptoMonnaie</option>
                            {cryptos.map((crypto: string, i: number) => <option key={i} value={crypto}>{crypto}</option>)}
                        </select>
                    </div>
                    <div>
                        <p>Labels</p>
                        <select onChange={handleChangeFilter} name="categories" id="filters__labels">
                            <option value="">Labels</option>
                            {labels.map((label: string, i:number) => <option key={i} value={label}>{label}</option>)}
                        </select>
                    </div>

                    <div id='categoriesList'>
                        {categories.map((category) => <div>{category}</div>)}
                    </div>
                </div>
            </div>
    );
};

export default Filters;