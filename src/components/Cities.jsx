import { useState } from "react";
import Cards from "./Cards";
import Nav from "./Nav";
import citiesCss from "./cities.module.css";


const initialCities = [];



const Cities = () => {
    const [cities, setCities] = useState(initialCities);
    const [isDark, setIsDark] = useState(false);


    const handleSearch = (e, city = '', country = '', cb) => {
        const API_KEY = '06699f57215c26b3babba0185477265d';
        let urlAPI = `https://api.openweathermap.org/data/2.5/weather?lang=es&q=${city}`;
        if (city === '') return alert('La ciudad es obligatoria.');
        if (country !== '') urlAPI += `,${country}`;
        urlAPI += `&appid=${API_KEY}`;



        fetch(urlAPI)
            .then(res => (res.status === 200) ? res.json() : Promise.reject(res))
            .then(data => {
                if(cities.some(city => city.id === data.id)) return alert('La ciudad ya ha sido agregada anteriormente')
                setCities([...cities, data]);
                cb()
            })
            .catch(err => alert(`Error ${err.status}: ${err.statusText}`));
    };

    const handleDelete = (index) => setCities(cities.filter((city, i) => i !== index)); 

    const handleMode = (e) => setIsDark(!isDark);


    return (
        <div className={(isDark) ? citiesCss['bg-oscuro'] : citiesCss['bg-claro']}>
            <Nav handleSearch={handleSearch} handleMode={handleMode} isDark={isDark}/>
            <Cards cities={cities} handleDelete={handleDelete} isDark={isDark}/>
        </div>
    );
};


export default Cities;