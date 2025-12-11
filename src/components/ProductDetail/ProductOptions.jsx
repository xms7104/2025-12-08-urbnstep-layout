function ProductOptions(){
    const optionsList = [
        {color: '藍色', image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image.png'},
        {color: '卡其色', image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/product-1.png'}
    ];

  return optionsList.map((item, index) => {
    return(
        <div key={index} className="productoption_options_card_block">
            <div className="productoption_options_image_block" tabIndex="0">
                <img className="productoption_options_image" src={item.image} />
            </div>
            <p className="productoption_options_text">{item.color}</p>
        </div>
    )
  })

}

export default ProductOptions