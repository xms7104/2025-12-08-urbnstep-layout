import ProductImage from "../components/ProductDetail/ProductImg";
import ProductCategoryList from "../components/UI/ProductCategoryList";

function ProductDetail(){
    const categoryList = ['首頁', '女鞋', '滑板鞋', 'Platform 404'];

    return(
        <div>
            <div className="product_container_block">
                <div className="productImage_block">
                    <ProductImage />
                </div>
                <div>
                    <div className="product_category_list_category_text_block">
                        <ProductCategoryList categoryArr={categoryList} />
                    </div>
                </div>
            </div>
            <div>下</div>
        </div>
    )
}

export default ProductDetail