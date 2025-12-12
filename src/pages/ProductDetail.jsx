import { useState } from "react";
import ProductImage from "../components/ProductDetail/ProductImg";
import ProductCategoryList from "../components/UI/ProductCategoryList";
import ProductDescription from "../components/ProductDetail/ProductDescription";
import ProductOptions from "../components/ProductDetail/ProductOptions";
import ProductSizeOptions from "../components/ProductDetail/ProductSizeOptions";
import ProductButton from "../components/ProductDetail/ProductButton";
import ProductInformation from "../components/ProductDetail/ProductInformation";

function ProductDetail(){
    const categoryList = ['首頁', '女鞋', '滑板鞋', 'Platform 404'];
    const [stock, setStock] = useState(1);
    const [isCollect, setIsCollect] = useState(false);

    return(
        <div>
            <div className="product_container_block">
                <div className="productImage_block">
                    <ProductImage />
                </div>
                <div className="product_text_block">
                    <div>
                        <div className="product_category_list_category_text_block">
                            <ProductCategoryList categoryArr={categoryList} />
                        </div>
                        <ProductDescription />
                    </div>
                    <div className="productoption_options_block">
                        <p className="product_subtitle">顏色</p>
                        <div className="productoption_options_card">
                            <ProductOptions />
                        </div>
                    </div>
                    <div className="product_size_block">
                        <p className="product_subtitle">尺寸</p>
                        <div className="">
                            <ProductSizeOptions setStock={setStock} />
                        </div>
                        {stock <= 3 && (<p className="product_warning_text">僅剩 {stock} 雙</p>)}
                    </div>
                    <div className="product_button_block">
                        <ProductButton isCollect={isCollect} setIsCollect={setIsCollect} />
                    </div>
                    <div className="product_information">
                        <ProductInformation />
                    </div>
                </div>
            </div>
            <div>下</div>
        </div>
    )
}

export default ProductDetail