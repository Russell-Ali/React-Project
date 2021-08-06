import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";
import DeletePopup from "../ui/Popups/DeletePopup";
import { useState } from "react";

let noBtnIsPressed: any = [];
const MeetupItem = (props: any) => {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite: any = favoriteCtx.itemIsFavorite(props.id);
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };
  const [popupState, setPopupState] = useState(false);
  noBtnIsPressed = () => {
    setPopupState(false);
  };
  const onDeleteClick = () => setPopupState(true);
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
        <div className={classes.actions}>
          <button onClick={onDeleteClick}>Delete Item</button>
          {popupState ? <DeletePopup /> : null}
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;
export { noBtnIsPressed };
