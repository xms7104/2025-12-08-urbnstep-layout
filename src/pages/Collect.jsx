import CollectList from "../components/Collect/CollectList"

function Collect(){
    return(
        <div className="collect_block">
            <div className="title_block">
                <div className="title_icon">
                    <i className="bi bi-circle-fill"></i>
                    <i className="bi bi-check"></i>
                </div>
                <p className="title_text">我的收藏</p>
            </div>
            <div className="alert_block">
                <div className="alert_icon">
                    <i className="bi bi-truck"></i>
                </div>
                <div className="alert_text">
                    <p>門市營業時間：</p>
                    <p>週一至週五 10:00 - 22:00</p>
                </div>
            </div>
            <div className="collect_productlist_block">
                <CollectList />
            </div>
            <div className="collect_button_block">
                <button className="collect_button">
                    立即預約門市試穿
                </button>
            </div>
        </div>
    )
}

export default Collect