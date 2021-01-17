export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category)}&limit=10&api_key=PNhTHbW0QaFD4NM0ekoRP5jKGZqEwcHA`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    //filtrando los datos que son usar
    const gifs = data.map(img =>{
        return{
            id:img.id,
            title:img.title,
            //pregunta si viene la imagen
            url: img.images?.downsized_medium.url
        }
    })


    return gifs;
}