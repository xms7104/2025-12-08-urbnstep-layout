function ADBanner(){
    return(
        <>
            {/* <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/banner-co-branded.png" alt="AD Banner" /> */}
            <div className="ad_star_block">
                <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/star.svg" alt="AD Star Image" />
            </div>
            <div className="ad_star_sparkle">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/sparkle.svg" alt="AD Sparkle Image" />
            </div>
            <div className="ad_banner_text_block">
                <div className="ad_banner_container_block">
                    <div className="ad_banner_title_block">
                        <p className="ad_banner_title">URBNSTEP</p>
                        <p className="ad_banner_symbol">x</p>
                        <p className="ad_banner_title">Kevin Chen</p>
                    </div>
                    <p className="ad_banner_subtitle">跨界聯名，限量發售</p>
                    <div className="ad_banner_description_block">
                    <p className="ad_banner_description">新銳漫畫家 Kevin Chen 親自操刀設計</p>
                    <p className="ad_banner_description_symbol">，</p>
                    <p className="ad_banner_description">街頭能量全面引爆！</p>
                    </div>
                    <div className="ad_banner_button_block">
                        <button className="ad_banner_button">立即搶購</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ADBanner