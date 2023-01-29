import { Icons } from "../assets/icons";

export const UnfavoriteButton = ({ onDogUnfavorite, id }) => (
  <img
    src={Icons.Heart}
    alt=""
    className="unfavorite-button"
    style={{ width: 40, border: 0 }}
    id={id}
    onClick={onDogUnfavorite}
  />
);
