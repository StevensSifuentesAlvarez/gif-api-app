
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=12&api_key=ihvlZ9LLvTO2lLGfXo1vXR5Jwq9j08mS`
    const resp = await fetch(url)
    const {data} = await resp.json()
    
    const gifs = data.map(({ id, images:{downsized_medium:{url}}, title }) => ({
        id, url, title
    }))
    
    return gifs
}