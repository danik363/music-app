/* eslint-disable prettier/prettier */
async function getToken() {
  const CLIENTID = "ba2ae6a0263d4b5895bc6fc45449a24f";
  const CLIENSECRET = "7cd499bb88a44694aa4501b7f77a2055";

  const body = `grant_type=client_credentials&client_id=${CLIENTID}&client_secret=${CLIENSECRET}`;
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    });
    const token = await response.json();
    return token;
  } catch (e) {
    console.log("Error al obtener token" + e);
    throw new Error("Error al obtener token");
  }
}

async function getfeaturedPlaylists() {
  let token = await getToken();
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: { Authorization: "Bearer " + token.access_token },
      }
    );
    const playLists = await response.json();
    return playLists;
  } catch (e) {
    console.log("Error al obtener play lists" + e);
    throw new Error("Error al obtener play plists");
  }
}

async function getTrackById(id) {
  let token = await getToken();
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/tracks/${id}`,
      {
        headers: { Authorization: "Bearer " + token.access_token },
      }
    );
    const track = await response.json();
    return track;
  } catch (e) {
    console.log("Error al obtener play lists" + e);
    throw new Error("Error al obtener play plists");
  }
}

async function getPlayListsByCategory(category) {
  let token = await getToken();
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${category}/playlists/?limit=14`,
      {
        headers: { Authorization: "Bearer " + token.access_token},
      }
    );
    const playLists = await response.json();
    return playLists;
  } catch (e) {
    console.log("Error al obtener play lists" + e);
    throw new Error("Error al obtener play plists");
  }
}

async function getTracksForPlayList(playListId) {
  let token = await getToken();
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playListId}`,
      {
        headers: { Authorization: "Bearer " + token.access_token},
      }
    );
    const tracks = await response.json();
    console.log(tracks.tracks);
    return tracks.tracks;
  } catch (e) {
    console.log("Error al obtener musicas de la play list" + playListId + e);
    throw new Error("Error al obtener musicas de play list");
  }
}

async function getCategories(limit, offset) {
  let token = await getToken();
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/?limit=${limit}&offset=${offset}`,
      {
        headers: { Authorization: "Bearer " + token.access_token },
      }
    );
    const categories = await response.json();
    return categories;
  } catch (e) {
    console.log("Error al obtener las categorias" + e);
    throw new Error("Error al obtener categorias");
  }
}

async function searchItem(words, type){
  let token = await getToken();
  try {
    const response = await fetch(
      `
      https://api.spotify.com/v1/search/?q='${words}&type=${type}`,
      {
        headers: { Authorization: "Bearer " + token.access_token },
      }
    );
    const items = await response.json();
    return items;
  } catch (e) {
    console.log("Error al obtener las musicas" + e);
    throw new Error("Error al obtener musicas");
  }
}

async function playAlbumPlayList(uri){
  let token = await getToken();
  console.log(uri);
  try {
    const response = await fetch(
      `
      https://api.spotify.com/v1/me/player/play`,
      {
        headers: { Authorization: "Bearer " + token.access_token },
        body: {
          "context_uri": uri,
          "position_ms": 0
        },
        method: "put",
      }
    );
    return await response.json();
    
  } catch (e) {
    console.log("Error al reproducir el album o playlist" + e);
    throw new Error("Error al reproducir el album o playlist");
  }
}
module.exports = {
  getfeaturedPlaylists,
  getTracksForPlayList,
  getCategories,
  getPlayListsByCategory,
  searchItem,
  getTrackById,
  playAlbumPlayList
};
