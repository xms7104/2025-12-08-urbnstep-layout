function ShopList(){
    const shopListData = [
        {enTitle: 'URBN RUNNER', cnTitle: '慢跑系列', image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-6.png'},
        {enTitle: 'STREETMODE', cnTitle: '滑板系列', image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-4.png'},
        {enTitle: 'CHUNK DISTRICT', cnTitle: '厚底系列', image:  'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product.png'},
        {enTitle: 'COLLAB ZONE', cnTitle: '聯名企劃', image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/product-10.png'}
    ];

    return shopListData.map((item, index) => {
        return(
            <div key={index} className="shoplist_card">
                <img src={item.image} alt={`product` + index} />
                <div className="shoplist_card_mask" />
                <div className="shoplist_cart_title_block">
                    <p className="shoplist_card_en_title">{item.enTitle}</p>
                    <p className="shoplist_card_cn_title">{item.cnTitle}</p>
                </div>
            </div>
        )
    })
}

export default ShopList