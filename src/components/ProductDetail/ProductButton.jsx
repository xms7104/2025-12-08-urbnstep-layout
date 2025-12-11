import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductButton({isCollect, setIsCollect}){
    const btnList = [
        {text: isCollect ? '已收藏' : '加入收藏', icon: faHeart, type: isCollect ? 'default' : 'addCollect', iconColor: isCollect ? '#000' : '#fff'}, 
        {text: '門市預約試穿', icon: faBagShopping, type: 'default', iconColor: '#000'}
    ];

    return btnList.map((item, index) => {
        return(
            <button className={`product_button product_button_${item.type}`} key={index} onClick={() => {if(index == 0) setIsCollect(!isCollect);}}>
                <FontAwesomeIcon icon={item.icon} />
                <p className='product_text'>{item.text}</p>
            </button>
        )
    })
}

export default ProductButton