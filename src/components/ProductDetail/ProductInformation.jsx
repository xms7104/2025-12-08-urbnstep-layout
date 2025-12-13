function ProductInformation(){
    const informationData = [
        {
            title: '商品材質', 
            description: ['鞋面：合成皮革（Synthetic Leather）', 
            '內裡：透氣網布材質，提升舒適與排汗性', 
            '鞋底：EVA 輕量發泡橡膠，具備良好緩震與止滑效果', 
            '鞋帶：聚酯纖維，耐拉扯不易鬆脫']
        },
        {
            title: '購買須知', 
            description: ['商品顏色因螢幕顯示可能略有差異，請以實品為準。', 
            '建議首次穿著前試穿確認尺寸，避免影響退換貨權益。', 
            '本商品為限量發售，庫存有限，如需更換尺寸請儘早聯繫客服協助處理。']
        },
        {
            title: '保養方式', 
            description: ['建議以乾布或微濕軟布擦拭表面汙漬，避免機洗或長時間浸水。', 
            '收納時請放置於乾燥通風處，避免日曬及高溫導致變形或龜裂。', 
            '若需深層清潔，建議使用中性清潔劑並搭配柔刷輕刷，勿使用漂白水或強酸強鹼清潔劑。']
        }
    ]

    function informationContainer(arr){
        return arr.map((item, index) => {
            return(
                <p key={`information_${index}`} className="product_information_text">{item}</p>
            )
        })
    }

    return informationData.map((item, index) => {
        return(
            <div key={index} className="product_information_block">
                <p className="product_information_title">{item.title}</p>
                <div className="product_information_text_block">
                    {informationContainer(item.description)}
                </div>
            </div>
        )
    })
}

export default ProductInformation