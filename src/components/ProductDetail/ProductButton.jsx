
import useIsTouchDevice from '../../hook/useInTouchDevice';

function ProductButton({isCollect, setIsCollect}){
    <i class="bi bi-bag"></i>
    const isTouchDevice = useIsTouchDevice();
    const btnList = [
        {   
            text: isCollect ? '已收藏' : '加入收藏', 
            icon: isCollect ? 'bi-heart-fill' : 'bi-heart', 
            type: isCollect ? 'default' : 'addCollect', 
            iconColor: isCollect ? '#000' : '#fff', 
            touchDevice: 'collect'
        }, 
        {
            text: '門市預約試穿', 
            icon: 'bi-bag', 
            type: 'default', 
            iconColor: '#000', 
            touchDevice: 'store'
        }
    ];

    return btnList.map((item, index) => {
        let style = isTouchDevice && item.touchDevice === 'collect' ? 'product_button_collect_touchdevice' : `product_button product_button_${item.type}`;
        let styleText = isTouchDevice && item.touchDevice === 'collect' ? 'product_text_collect_touchdevice' : `product_text`
        return(
            <button className={style} key={index} onClick={() => {if(index == 0) setIsCollect(!isCollect);}}>
                <i className={`bi ${item.icon}`}></i>
                <p className={styleText}>{item.text}</p>
            </button>
        )
    })
}

export default ProductButton