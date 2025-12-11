function ProductSizeOptions({setStock}){
    const sizeList = [
        {text: '35 ( 22.5 cm )', count: 3},
        {text: '36 ( 23.0 cm )', count: 6},
        {text: '37 ( 23.5 cm )', count: 2},
        {text: '38 ( 24.0 cm )', count: 4},
        {text: '39 ( 24.5 cm )', count: 4},
        {text: '40 ( 25.0 cm )', count: 2},
        {text: '41 ( 26.0 cm )', count: 1},
        {text: '42 ( 26.5 cm )', count: 0},
        {text: '43 ( 27.0 cm )', count: 0}
    ];

    return sizeList.map((item, index) => {
        let style = item.count !== 0 ? 'product_size_option_button' : 'product_size_option_button_disabled';
        return(
            <button key={index} className={style} onClick={() => {
                if(item.count !== 0){
                    setStock(item.count);
                }else{
                    setStock(999);
                }
                }}>
                <p>{item.text}</p>
            </button>
        )
    })
}

export default ProductSizeOptions