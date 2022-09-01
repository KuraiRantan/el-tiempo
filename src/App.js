import './App.css';
import Cities from './components/Cities';

function App() {
    return (
        <div className="App">
            <Cities />
        </div>
    );
}

export default App;


// http://openweathermap.org/img/wn/"+img+"@2x.png
// '06699f57215c26b3babba0185477265d'
// `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`


let res = {
    "coord": {
        "lon": -74.0817,
        "lat": 4.6097
    },
    "weather": [
        {
            "id": 301,
            "main": "Drizzle",
            "description": "drizzle",
            "icon": "09d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 288.88,
        "feels_like": 288.52,
        "temp_min": 288.88,
        "temp_max": 288.88,
        "pressure": 1029,
        "humidity": 77
    },
    "visibility": 8000,
    "wind": {
        "speed": 2.06,
        "deg": 30
    },
    "clouds": {
        "all": 75
    },
    "dt": 1652979349,
    "sys": {
        "type": 1,
        "id": 8582,
        "country": "CO",
        "sunrise": 1652956964,
        "sunset": 1653001388
    },
    "timezone": -18000,
    "id": 3688689,
    "name": "Bogota",
    "cod": 200
}