export const getPhotoArticle = (images,format = "Standard Thumbnail") => {
    var response = { url: '', width: 75, height: 75}
    if(images) {
        var img = images.find( i => (i.format || '').toLowerCase() == (format || '').toLowerCase() )
        if(img) {
            response.url = img.url
            response.width = img.width
            response.height = img.height
        }
    }
    return response
}