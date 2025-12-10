import ProductImage from "../components/ProductDetail/ProductImg"

function ProductDetail(){
    return(
        <div>
            <div className="product_container_block">
                <div className="productImage_block">
                    <ProductImage />
                </div>
                <div>右</div>
            </div>
            <div>下</div>
        </div>
    )
}

export default ProductDetail