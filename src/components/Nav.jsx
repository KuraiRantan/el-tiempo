import icono_tiempo from '../assets/media/img/icono-tiempo.png';
import Search from './Search';
import navCss from './nav.module.css';
import modo_oscuro from '../assets/media/img/modo-claro.png';
import modo_claro from '../assets/media/img/modo-oscuro.png'


const Nav = ({ handleSearch, handleMode, isDark }) => {

    return (
        <nav className={(isDark) ? navCss['nav-oscuro'] : navCss['nav-claro']}>
            <div>
                <img src={icono_tiempo} alt="icono-tiempo" />
                <h1>EL TIEMPO</h1>
            </div>
            <Search handleSearch={handleSearch} handleMode={handleMode} isDark={isDark} />
        </nav>
    );
};


export default Nav;