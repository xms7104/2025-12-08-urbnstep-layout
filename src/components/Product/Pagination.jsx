function Pagination(){
    const pages = [...Array(10).keys()].map(i => i + 1);
    const displayPages = [
        ...pages.slice(0, 3), // 1,2,3
        '...',               // 省略符
        pages[pages.length - 1] // 10
      ];

    function pagesBtn(){
        return displayPages.map((item, index) => {
            return(
                <button className="pagination_button">
                    {item}
                </button>
            )
        })
    }

    return(
        <div className="pagination_block">
            <button className="pagination_button">
                <i class="bi bi-chevron-left"></i>
            </button>
            <div className="pagination_button_block">
                {pagesBtn()}
            </div>
            <button className="pagination_button">
                <i class="bi bi-chevron-right"></i>
            </button>
        </div>
    )
}

export default Pagination