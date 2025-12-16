import { Link } from "react-router-dom"

function Banner(){
    return(
        <div className="banner_container_block">
            <div className="banner_text_block">
                <div className="banner_container_block">
                    <p className="banner_title">URBNSTEP</p>
                    <p className="banner_subTitle">Your Step, Your Statement</p>
                </div>
                <Link to='/productDetail'>
                    <button className="banner_button">立即選購</button>
                </Link>
            </div>
        </div>
    )
}

export default Banner