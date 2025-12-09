function BestSellingList(){
    const bestsellingImageArr = [
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-3.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-6.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-4.png',
    ]

    return bestsellingImageArr.map((item, index) => {
        return(
            <div className="bestselling_card" key={index}>
                <img className="bestselling_card_image" src={item} alt='productImage' />
                <div className="bestselling_card_text_block">
                    <p className="bestselling_card_text">人氣 No.1</p>
                </div>
            </div>
        )
    })

}

export default BestSellingList