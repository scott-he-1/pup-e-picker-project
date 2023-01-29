import { Icons } from "../assets/icons";
export const FavoriteButton = ({ onDogFavorite, id }) => (
  <img
    src={Icons.EmptyHeart}
    alt=""
    className="favorite-button"
    style={{ width: 40, border: 0 }}
    id={id}
    onClick={onDogFavorite}
  />
);
