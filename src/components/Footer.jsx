import Logo from '../assets/logo.svg';

function Footer(){
    return(
        <div className='footer_block'>
            <div className='footer_menu_block'>
                <img src={Logo} alt='logo' />
                <div className='footer_button_block'>
                    <button className='menu_button btn-footer'>商品列表</button>
                    <button className='menu_button btn-footer'>品牌故事</button>
                </div>
            </div>
            <div className='text_block'>
                <p className='footer_text'>Copyright ©2025 URBNSTYLE</p>
                <p>All Rights Reserved.</p>
            </div>
        </div>
    )

}

export default Footer