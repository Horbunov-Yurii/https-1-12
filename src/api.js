export const fetchImages = (query, page = 1)=>{
    return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=53447549-63e4f657a81894568835d01b5&image_type=photo&orientation=horizontal&per_page=12`).then((res) => res.json())
}