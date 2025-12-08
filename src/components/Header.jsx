import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.svg';

function Header(){
    return(
        <div className='header_block'>
            <div className='logo_block'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='user_button_block'>
                <button className='user_button'>
                    <FontAwesomeIcon icon={faUser} size='xl' />
                </button>
            </div>
            <div className='button_block'>
                <button className='menu_button'>商品列表</button>
                <button className='menu_button'>品牌故事</button>
            </div>
        </div>
    )
}

export default Header