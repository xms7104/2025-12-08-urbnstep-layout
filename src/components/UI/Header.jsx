import Logo from '../../assets/logo.svg';
import { useLocation, Link } from 'react-router-dom';
import useIsTouchDevice from '../../hook/useInTouchDevice';

function Header(){
    const location = useLocation();
    const isTouchDevice = useIsTouchDevice();
    const showMenuButton = location.pathname !== '/' && isTouchDevice;

    return(
        <div className='header_block'>
            <div className='logo_block'>
                <Link to="/">
                    <img src={Logo} alt='logo' />
                </Link>
            </div>
            <div className='user_button_block'>
                <button className='user_button'>
                    <i className="bi bi-person"></i>
                </button>
            </div>
            {!showMenuButton && (
                <div className='button_block'>
                    <Link to="/product">
                        <button className='menu_button btn-product btn-header'>商品列表</button>
                    </Link>
                <button className='menu_button btn-story btn-header'>品牌故事</button>
            </div>
            )}
        </div>
    )
}

export default Header