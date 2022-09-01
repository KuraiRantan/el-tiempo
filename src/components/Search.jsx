import { useState } from "react";
import searchCss from './search.module.css';
import modo_claro from '../assets/media/img/modo-claro.png';
import modo_oscuro from '../assets/media/img/modo-oscuro.png';

const initialInputs = {
    city: '',
    country: ''
};

const Search = ({ handleSearch, handleMode, isDark }) => {
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });
    const handleClear = (e) => setInputs(initialInputs);

    return (
        <div>
            <input
                className={searchCss.input}
                type="text"
                name="city"
                value={inputs.city}
                placeholder="Ciudad..."
                onChange={handleChange}
            />

            <input
                className={searchCss.input}
                type="text"
                name="country"
                placeholder="Codigo iso de pais(mx,co,nz)..."
                value={inputs.country} onChange={handleChange}
            />

                <img
                src={(isDark) ? modo_claro : modo_oscuro}
                className={searchCss['img-mode']}
                onClick={handleMode}
            />
            <div>

                <input
                    className={searchCss['input-btn']}
                    type="button"
                    value="AGREGAR"
                    onClick={(e) => handleSearch(e, inputs.city.trim(), inputs.country.trim(), handleClear)}
                />

                <input
                    className={searchCss['input-btn']}
                    type="button"
                    value="LIMPIAR"
                    onClick={handleClear}
                />
            </div>
        </div>
    );
};

export default Search;