function MenuList({currentCategory, setCurrentCategory}){
    const listData = ['所有商品', '慢跑鞋', '滑板鞋', '厚底鞋', '限定 / 聯名企劃'];

    return listData.map((item, index) => {
        let style = item === currentCategory ? 'menu_button_text_focus' : 'menu_button_text';
        return(
            <button key={index} className="menu_button" onClick={() => {setCurrentCategory(item);}}>
                <p className={style}>{item}</p>
            </button>
        )
    })
}

export default MenuList