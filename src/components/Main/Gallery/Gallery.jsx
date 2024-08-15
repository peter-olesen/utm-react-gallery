export const Gallery = () => {
    const GalleryArray = [
        './src/assets/gallery1.png',
        './src/assets/gallery2.png',
        './src/assets/gallery3.png',
        './src/assets/gallery4.png',
        './src/assets/gallery5.png',
        './src/assets/gallery6.png',
        './src/assets/gallery7.png',
        './src/assets/gallery8.png',
        './src/assets/gallery9.png',
        './src/assets/gallery10.png',
        './src/assets/gallery11.png',
        './src/assets/gallery12.png'
    ]

    return (
        <>
            {GalleryArray.map(imageUrl => {
                return (
                    <img key={imageUrl} src={imageUrl}></img>
                )
            })}
        </>
    )
}