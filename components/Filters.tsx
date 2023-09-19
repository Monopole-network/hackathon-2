
import {categories} from '../data/categories';
import {cryptos} from '../data/cryptos';
import {labels} from '../data/labels';
import React, { useState } from 'react';

const Filters = () => {

    const [selectedCryptosFilter, setSelectedCryptosFilter] = useState("");
    const [selectedLabelsFilter, setSelectedLabelsFilter] = useState("");
    //const [selectedProjetTypeFilter, setSelectedProjetTypeFilter] = useState("");

    // filtrages des projets
    const changeFilter = (filterName:string, filterValue:string) => {
        console.log("selectedFilter");
        switch (filterName) {
            case 'cryptos':
                setSelectedCryptosFilter(filterValue);
                console.log(selectedCryptosFilter);
                break;
            case 'labels':
                setSelectedLabelsFilter(filterValue);
                console.log(selectedLabelsFilter);
                break;
        }
    }

    console.log(categories);
    console.log(cryptos);

    return (
            <div>
                <div>Filtres</div>
                <div>
                    <div>
                        <p>Catégories</p>
                        <select name="categories" id="filters__categories">
                            {categories.map((category) => <option value={category}>{category}</option>)}
                        </select>
                    </div>
                    <div>
                        <p>Crypto Monnaie</p>
                        <select name="cryptos" id="filters__cryptos">
                            {cryptos.map((crypto) => <option onClick={() => {changeFilter('cryptos', crypto); }} value={crypto}>{crypto}</option>)}
                        </select>
                    </div>
                    <div>
                        <p>Labels</p>
                        <select name="categories" id="filters__labels">
                            {labels.map((label) => <option onClick={() => changeFilter('labels', label)} value={label}>{label}</option>)}
                        </select>
                    </div>
                </div>
            </div>
    );
};

export default Filters;