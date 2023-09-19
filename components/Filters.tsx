
import {categories} from '../data/categories';
import {cryptos} from '../data/cryptos';

const Filters = () => {

 console.log(categories);
 console.log(cryptos);

  return (
        <div>
            <div>Filtres</div>
            <div>
                <div>
                    <p>Crypto Monnaie</p>
                    {categories.map((category) => <div>{category}</div>)}

                </div>
            </div>
        </div>
  );
};

export default Filters;