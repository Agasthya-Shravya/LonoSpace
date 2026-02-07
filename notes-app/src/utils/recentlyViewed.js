export const addRecentlyViewed = (item) => {
  let recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
  recent = recent.filter(r => r.id !== item.id);
  recent.unshift(item);
  localStorage.setItem("recentlyViewed", JSON.stringify(recent));
};
