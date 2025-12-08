import Logo from '../assets/logo.svg';

function Footer(){
    return(
        <div className='footer_block'>
            <div className='footer_menu_block'>
                <img src={Logo} alt='logo' />
                <div className='footer_button_block'>
                    <button className='menu_button'>商品列表</button>
                    <button className='menu_button'>品牌故事</button>
                </div>
            </div>
            <hr className='hr_block' />
            <div className='text_block'>
                <p>Copyright ©2025 URBNSTYLE</p>
                <p>All Rights Reserved.</p>
            </div>
        </div>
    )

}

export default Footer