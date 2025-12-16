function CollectList(){
    const data = [
        {title: 'PLATFORM 404', size: '38', color: 'Navy', price: '2,600', image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product.png'}, 
        {title: 'BOOMLOK', size: '38', color: 'White', price: '3,200', image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-3.png'}, 
        {title: 'MELTY KISS', size: '38', color: 'Violet', price: '4,000', image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-4.png'}
    ];

    return data.map((item, index) => {
        return(
            <div key={index} className="collect_product_card_block">
                <div className="collect_product_card_image_block">
                    <img src={item.image} alt={`${item.title} image`} className="collect_product_card_image" />
                </div>
                <div className="collect_product_card_text_block">
                    <div>
                        <p className="collect_product_card_text_title">{item.title}</p>
                        <div className="collect_product_card_subtitle_block">
                            <p className="collect_product_card_text_subtitle">尺寸</p>
                            <p className="collect_product_card_text">{item.size}</p>
                        </div>
                        <div className="collect_product_card_subtitle_block">
                            <p className="collect_product_card_text_subtitle">顏色</p>
                            <p className="collect_product_card_text">{item.color}</p>
                        </div>
                    </div>
                    <p className="collect_product_card_text_price">NT${item.price}</p>
                </div>
                
            </div>
        )
    })
}

export default CollectList