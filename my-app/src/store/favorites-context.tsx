import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: any) => {},
  removeFavorite: (meetupId: any) => {},
  itemIsFavorite: (meetupId: any) => {},
});

export const FavoritesContextProvider = (props: any) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup: any) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId: any) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup: any) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId: any) => {
    return userFavorites.some((meetup: any) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
