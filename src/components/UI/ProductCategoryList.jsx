function ProductCategoryList({categoryArr}){
if(categoryArr.length !== 0){
        return categoryArr.map((item, index) => {
            let style = index === categoryArr.length -1 ? 'product_category_list_current_text' : 'product_category_list_text';
            return(
                <div className="product_category_list_category_text_block">
                    <p className={style}>{item}</p>
                    {index !== categoryArr.length -1 && (<p className={style}>/</p>)}
                </div>
            )
        })
    }
}

export default ProductCategoryList