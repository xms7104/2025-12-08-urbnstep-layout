function OutfitGallery(){
    const galleryList = [
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-1.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-2.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-4.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-5.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-10.png', type: 'large', position: 'top_right'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-3.png', type: 'large', position: 'bottom_left'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-6.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-7.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-8.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-9.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-11.png', type: 'small'},
        {image: 'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-week3-4/inspiration-12.png', type: 'small'}
    ];

    return galleryList.map((item, index) => {
        let style = index == 4 || index == 5 ? `outfitgallery_image outfitgallery_image_${item.position}` : 'outfitgallery_image';
        return(
            <div
            key={index}
            className={style}
          >
            <img src={item.image} alt={`photo-${index}`} />
          </div>
        )
    })
}

export default OutfitGallery