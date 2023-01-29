import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";

export const CreateDogForm = ({ onDogAdd, setDogList }) => {
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
  const [nameOfDog, setNameOfDog] = useState("");
  const [descriptionOfDog, setDescriptionOfDog] = useState("");

  const submitNewDog = (e) => {
    e.preventDefault();
    let newDogInfo = {
      name: nameOfDog,
      description: descriptionOfDog,
      image: selectedImage,
      isFavorite: false,
    };
    onDogAdd(newDogInfo);
    setNameOfDog("");
    setDescriptionOfDog("");
    setSelectedImage(dogPictures.BlueHeeler);
    setDogList((prevState) => [...prevState, newDogInfo])
  };

  return (
    <form action="" id="create-dog-form" onSubmit={submitNewDog}>
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        value={nameOfDog}
        onChange={(e) => {
          setNameOfDog(e.target.value);
        }}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name="descriptionOfDogInput"
        id="descriptionOfDogInputq"
        value={descriptionOfDog}
        cols="80"
        rows="10"
        onChange={(e) => {
          setDescriptionOfDog(e.target.value);
        }}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        onChange={(e) => {
          setSelectedImage(e.target.value);
        }}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return (
            <option value={pictureValue} key={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
