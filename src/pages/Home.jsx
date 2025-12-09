import Banner from "../components/UI/Home/Banner";
import NewProduct from "../components/UI/Home/NewProduct";

function Home(){
    return(
        <div>
            <div className="banner_block">
                <Banner />
            </div>
            <div className="new_product_list_block">
                <div className="new_product_text_block">
                    <p className="new_product_title">New Arrival</p>
                    <p className="new_product_subtitle">新品上市</p>
                </div>
                <div className="new_product_card_block">
                    <NewProduct />
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Home