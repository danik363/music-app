const spotifyApi = require("@/services/spotify-api.js");

async function getPlayListsByCategories(limit = 20, offset = 0) {
  const playLists = [];
  let playList;
  try {
    const response = await spotifyApi.getCategories(limit, offset);
    let categories = response.categories.items;
    for (let category of categories) {
      playList = await spotifyApi.getPlayListsByCategory(category.id);
      playLists.push({
        id: category.id,
        category: category.name,
        items: playList.playlists.items,
      });
      console.log(playLists);
    }
    return playLists;
  } catch (e) {
    console.log("Error al obtener las play lists por categoria" + e);
    throw new Error("Error al obtener las play lists por categoria");
  }
}

async function getTracks(words) {
  try {
    const items = await spotifyApi.searchItem(words, "track");
    const playables = [];
    for (let track of items.tracks.items) {
      if (track.preview_url != null) {
        playables.push(track);
      }
    }
    console.log(playables);
    return playables;
  } catch (e) {
    console.log("Error al obtener los elementos buscados" + e);
    throw new Error("Error al obtener los elementos buscados");
  }
}

async function getPlayLists(words) {
  try {
    const response = await spotifyApi.searchItem(words, "playlist");
    console.log(response);
    return response.playlists.items;
  } catch (e) {
    console.log("Error al obtener los elementos buscados" + e);
    throw new Error("Error al obtener los elementos buscados");
  }
}

async function getMorePlayLists(limit, offset) {
  const newPlayLists = await getPlayListsByCategories(limit, offset);
  return newPlayLists;
}
module.exports = {
  getPlayListsByCategories,
  getTracks,
  getPlayLists,
  getMorePlayLists,
};
