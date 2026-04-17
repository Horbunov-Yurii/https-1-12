export const fatchimages = (query , page = 1)=>{
    return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=your_key&image_type=photo&orientation=horizontal&per_page=12`)
}








https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12