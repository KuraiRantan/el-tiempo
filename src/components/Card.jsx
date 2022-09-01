import cardCss from './card.module.css';

const Card = ({ index, name, country, temp, tempMin, tempMax, wind, clouds, pressure, lon, lat, img, weather, handleDelete, isDark }) => {


    return (
        <div className={(isDark) ? cardCss['card-oscuro'] : cardCss['card-claro']}>
            <button className={cardCss['btn-close']} onClick={() => handleDelete(index)}>X</button>
            <p><b>{name}, {country}</b>
            <img
                className={cardCss['img-card']}
                src={`http://openweathermap.org/images/flags/${country.toLowerCase()}.png`}
                alt={`flag of ${country}`}
            />
            </p>
            <p>{weather}</p>
            <p><b>{(temp - 273.15).toFixed(1)}°C</b>{` temperatura de ${(tempMin - 273.15).toFixed(1)} a ${(tempMax - 273.15).toFixed(1)}°C, viento ${wind} m/s. nubes ${clouds}%, ${pressure} hpa`}</p>
            <p>Coordenadas geográficas <a target="_blank" rel="noreferrer" href={`http://maps.google.com/maps?z=5&t=m&q=loc:${lat}+${lon}`}>[{lat},{lon}]</a></p>

            <img className={cardCss['img-weather']} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={weather} />

        </div>
    );
};


export default Card;