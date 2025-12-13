function ProductRecommendList(){
    const recommendList = [
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-2.png', title: 'VM001', price: '2600'}, 
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-3.png', title: 'Melty Kiss', price: '4000'}, 
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-4.png', title: 'BOOMBLOK', price: '3200'}, 
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-7.png', title: 'Sugar Snap', price: '3200'}
    ]
    return recommendList.map((item, index) => {
        return(
            <div className="recommend_product_card_block" key={index}>
                <img className="recommend_product_image" src={item.image} alt={`product image ${index}`} />
                <div>
                    <p className="recommend_product_title">{item.title}</p>
                    <p className="recommend_product_price">NT${item.price}</p>
                </div>
            </div>
        )
    })
}

export default ProductRecommendList