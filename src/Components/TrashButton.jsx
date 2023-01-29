import { Icons } from "../assets/icons";

export const TrashButton = ({ onDogRemove, id }) => (
  <img
    src={Icons.Trash}
    alt=""
    className="trash-button"
    style={{
      width: 40,
      border: 0,
      opacity: 1,
      cursor: "pointer",
    }}
    id={id}
    onClick={onDogRemove}
  />
);
