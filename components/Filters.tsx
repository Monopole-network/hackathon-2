
import {categories} from '../data/categories';
import {cryptos} from '../data/cryptos';
import {labels} from '../data/labels';

const Filters = () => {

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
                        {cryptos.map((crypto) => <option value={crypto}>{crypto}</option>)}
                    </select>
                </div>
                <div>
                    <p>Labels</p>
                    <select name="categories" id="filters__labels">
                        {labels.map((label) => <option value={label}>{label}</option>)}
                    </select>
                </div>
            </div>
        </div>
  );
};

export default Filters;