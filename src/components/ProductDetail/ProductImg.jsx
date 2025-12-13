function ProductImage(){
    const productList = [
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image-1.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image-2.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image-3.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image-4.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image-5.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image-6.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week2/image-7.png',
    ];

    return productList.map((item, index) => {
        return(
            <div key={index} className="productImage_image">
                <img src={item} alt={`product_${index}`} />
            </div>
        )
    })
}

export default ProductImage