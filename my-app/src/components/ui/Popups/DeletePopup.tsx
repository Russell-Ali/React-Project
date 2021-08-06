import classes from "./DeletePopup.module.css";

import { noBtnIsPressed } from "../../meetups/MeetupItem";
import { Link } from "react-router-dom";
const DeletePopup = () => {
  const yesBtn = () => {
    fetch("https://my-app-81dc3-default-rtdb.firebaseio.com/meetups.json", {
      method: "DELETE",
    }).then(noBtnIsPressed());
    setTimeout(() => {
      window.location.reload(true);
    }, 200);
  };
  const noBtn = () => {
    noBtnIsPressed();
  };
  return (
    <div className={classes.popup}>
      <h1 className={classes.heading}>Are you sure about that?</h1>
      <div className={classes.button}>
        <button className={classes.yes} onClick={yesBtn}>
          Yes
        </button>
        <button className={classes.no} onClick={noBtn}>
          No
        </button>
      </div>
    </div>
  );
};
export default DeletePopup;
