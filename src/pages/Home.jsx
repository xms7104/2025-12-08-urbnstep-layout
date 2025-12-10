import Banner from "../components/Home/Banner";
import NewProduct from "../components/Home/NewProduct";
import BestSellingList from "../components/Home/BestSellingList";
import ADBanner from "../components/Home/ADBanner";

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
            <div className="bestselling_block">
                <div className="bestselling_title">
                    <p>熱銷補貨</p>
                </div>
                <div className="bestselling_card_block">
                    <BestSellingList />
                </div>
            </div>
            <div className="ad_banner_block">
                <ADBanner />
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Home