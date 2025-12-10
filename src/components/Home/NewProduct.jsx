function NewProduct(){
    const newProductList = [
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/new-1.png', title: 'Monoverse', price: '3,200'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/new-2.png', title: 'PLATFORM 404', price: '2,600'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/new-3.png', title: 'URBN Force', price: '3,200'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/new-4.png', title: 'Mode90', price: '4,000'},
    ]

    return newProductList.map((item, index) => {
        return(
            <div key={index} className="new_product_card">
                <img src={item.image} alt={`product` + index} className="new_product_card_image" />
                <div>
                    <p className="new_product_card_title">{item.title}</p>
                    <p className="new_product_card_subtitle">NT${item.price}</p>
                </div>
            </div>
        )
    })
}

export default NewProduct