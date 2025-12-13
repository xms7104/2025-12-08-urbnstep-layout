function ProductSizeOptions({setStock}){
    const sizeList = [
        {enSize: '35', cnSize:'22.5 cm', count: 3},
        {enSize: '36', cnSize:'23.0 cm', count: 6},
        {enSize: '37', cnSize:'23.5 cm', count: 2},
        {enSize: '38', cnSize:'24.0 cm', count: 4},
        {enSize: '39', cnSize:'24.5 cm', count: 4},
        {enSize: '40', cnSize:'25.0 cm', count: 2},
        {enSize: '41', cnSize:'26.0 cm', count: 1},
        {enSize: '42', cnSize:'26.5 cm', count: 0},
        {enSize: '43', cnSize:'27.0 cm', count: 0}
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
                }}
                onBlur={() => {setStock(999);}}>
                    <div className="product_size_option_text_block">
                        <p>{item.enSize}</p>
                        <p>({item.cnSize})</p>
                    </div>
            </button>
        )
    })
}

export default ProductSizeOptions