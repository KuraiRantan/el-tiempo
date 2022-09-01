import Card from "./Card";
import cardsCss from './cards.module.css';


const Cards = ({ cities, handleDelete, isDark }) => {

    console.log(cities);

    return (
        <main className={(isDark) ? cardsCss['main-oscuro'] : cardsCss['main-claro']}>
            <div className={cardsCss['main___scroll']}>
                {
                    (cities.length > 0) ?
                        cities.map((city, index) => (<Card
                            key={city.id}
                            index={index}
                            name={city.name}
                            country={city.sys.country}
                            temp={city.main.temp}
                            tempMin={city.main.temp_min}
                            tempMax={city.main.temp_max}
                            wind={city.wind.speed}
                            clouds={city.clouds.all}
                            pressure={city.main.pressure}
                            lon={city.coord.lon}
                            lat={city.coord.lat}
                            img={city.weather[0].icon}
                            weather={city.weather[0].description}
                            handleDelete={handleDelete}
                            isDark={isDark}
                        />)) :
                        (<div><p>No hay ciudades</p></div>)
                }
            </div>

        </main>
    );
};

export default Cards;