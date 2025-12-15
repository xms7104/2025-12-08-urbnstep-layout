function Pagination({page, setPage}){
    const pages = [...Array(10).keys()].map(i => i + 1);
    const displayPages = [...pages.slice(0, 3), '...', pages[pages.length - 1]];

    function pagesBtn(){
        return displayPages.map((item, index) => {
            return(
                <button key={index} className={`pagination_button_page ${page === item && 'pagination_button_page_selected'}`} onClick={() => {setPage(item);}}>
                    {item}
                </button>
            )
        })
    }

    return(
        <div className="pagination_block">
            <button className={page == 1 ? 'pagination_button_symbol_disabled' : 'pagination_button_symbol'} onClick={() => {
                if(page !== 1) setPage(page - 1);
            }}>
                <i className="bi bi-chevron-left"></i>
            </button>
            <div className="pagination_button_block">
                {pagesBtn()}
            </div>
            <button className={page == 10 ? 'pagination_button_symbol_disabled' : 'pagination_button_symbol'} onClick={() => {
                if(page !== 10) setPage(page + 1);
            }}>
                <i className="bi bi-chevron-right"></i>
            </button>
        </div>
    )
}

export default Pagination