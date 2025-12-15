import { useState, useEffect } from "react";
import ProductCategoryList from "../components/UI/ProductCategoryList"
import MenuList from "../components/Product/MenuList";
import ProductList from "../components/Product/ProductList";
import Pagination from "../components/Product/Pagination";

function Product(){
    const [categoryList, setCategoryList] = useState(['首頁', '女鞋', '所有商品']);
    const [currentCategory, setCurrentCategory] = useState('所有商品');
    const [page, setPage] = useState(1);

    useEffect(() => {
        setCategoryList(prev => [...prev.slice(0, prev.length - 1), currentCategory]);
    }, [currentCategory])

    return(
        <div className="product_block">
            <div className="product_category_list_block product_category_list_category_text_block">
                <ProductCategoryList categoryArr={categoryList} />
            </div>
            <div className="title_block">
                <p className="title_text">女鞋</p>
            </div>
            <div className="product_container">
                <div className="menulist_block">
                    <MenuList currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
                </div>
                <div>
                    <div className="product_list_block">
                        <ProductList />
                    </div>
                    <div>
                        <Pagination page={page} setPage={setPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product