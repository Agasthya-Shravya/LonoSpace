export const getFavourites = () =>
  JSON.parse(localStorage.getItem("favourites")) || [];

export const isFavourite = (id) => {
  const favs = getFavourites();
  return favs.some(f => f.id === id);
};

export const toggleFavourite = (note) => {
  let favs = getFavourites();

  if (favs.some(f => f.id === note.id)) {
    favs = favs.filter(f => f.id !== note.id);
  } else {
    favs.unshift({
      id: note.id,
      title: note.title,
      subject: note.subject,
      fileUrl: note.fileUrl
    });
  }

  localStorage.setItem("favourites", JSON.stringify(favs));
};
