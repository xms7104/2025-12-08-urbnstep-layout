function ProductList(){
    const productData = [
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product.png', title: 'PLATFORM 404', price: '2600'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-1.png', title: 'PLATFORM 404', price: '2600'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-2.png', title: 'VM001', price: '2600'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-3.png', title: 'Melty Kiss', price: '4000'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-4.png', title: 'BOOMBLOK', price: '3200'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-5.png', title: 'BOOMBLOK', price: '3200'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-6.png', title: 'R:UNER', price: '4000'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-7.png', title: 'Sugar Snap', price: '4000'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-8.png', title: 'Neofoam', price: '4000'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-9.png', title: 'Buttermood', price: '4000'}
    ];

    return productData.map((item, index) => {
        return (
        <div key={index} className="product_list_card_block">
            <img src={item.image} className="product_list_card_image" />
            <div className="product_list_card_text_block">
                <p className="product_list_card_title">{item.title}</p>
                <p className="product_list_card_subtitle">{item.price}</p>
            </div>
        </div>
    )})
}

export default ProductList