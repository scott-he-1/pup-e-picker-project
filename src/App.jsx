import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import {
  deleteDog,
  fetchDogList,
  patchFavoriteDog,
  patchUnfavoriteDog,
  postDog,
} from "./fetches/fetches";
import "./fonts/RubikBubbles-Regular.ttf";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dogList, setDogList] = useState([]);
  const [whichSectionToShow, setWhichSectionToShow] = useState("all-dogs");

  useEffect(() => {
    setIsLoading(true);
    fetchDogList()
      .then((data) => setDogList(data))
      .catch((error) => {
        setIsError(true);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [whichSectionToShow]);

  const onDogFavorite = ({ target: { id } }) => {
    patchFavoriteDog(id)
      .then(() =>
        setDogList((prevState) =>
          prevState.map((dog) =>
            dog.id === Number(id) ? { ...prevState[id], isFavorite: true } : dog
          )
        )
      )
      .catch((error) => console.log(error));
  };

  const onDogUnfavorite = ({ target: { id } }) => {
    patchUnfavoriteDog(id)
      .then(() =>
        setDogList((prevState) =>
          prevState.map((dog) =>
            dog.id === Number(id)
              ? { ...prevState[id], isFavorite: false }
              : dog
          )
        )
      )
      .catch((error) => console.log(error));
  };

  const onDogRemove = ({ target: { id } }) => {
    deleteDog(id)
      .then(() =>
        setDogList((prevState) =>
          prevState.filter((dog) => dog.id !== Number(id))
        )
      )
      .catch((error) => console.log(error));
  };

  const onDogAdd = (newDogInfo) => {
    postDog(newDogInfo);
  };

  const showSection = (whichSectionToShow) => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (isError) {
      return <div>Error Loading Page</div>;
    } else {
      switch (whichSectionToShow) {
        case "all-dogs":
          return (
            <Dogs
              label={"All Dogs"}
              dogList={dogList}
              setDogList={setDogList}
              whichSectionToShow={whichSectionToShow}
              onDogFavorite={onDogFavorite}
              onDogUnfavorite={onDogUnfavorite}
              onDogRemove={onDogRemove}
            />
          );
        case "favorite-dogs":
          return (
            <Dogs
              label={"All Dogs"}
              setDogList={setDogList}
              dogList={dogList.filter((dog) => dog.isFavorite)}
              whichSectionToShow={whichSectionToShow}
              onDogFavorite={onDogFavorite}
              onDogUnfavorite={onDogUnfavorite}
              onDogRemove={onDogRemove}
            />
          );
        case "unfavorite-dogs":
          return (
            <Dogs
              label={"All Dogs"}
              setDogList={setDogList}
              dogList={dogList.filter((dog) => !dog.isFavorite)}
              whichSectionToShow={whichSectionToShow}
              onDogFavorite={onDogFavorite}
              onDogUnfavorite={onDogUnfavorite}
              onDogRemove={onDogRemove}
            />
          );
        case "create-dog-form":
          return <CreateDogForm onDogAdd={onDogAdd} setDogList={setDogList} />;
        default:
          return (
            <Dogs
              label={"All Dogs"}
              dogList={dogList}
              setDogList={setDogList}
              whichSectionToShow={whichSectionToShow}
              onDogFavorite={onDogFavorite}
              onDogUnfavorite={onDogUnfavorite}
              onDogRemove={onDogRemove}
            />
          );
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        label={"Dogs: "}
        setWhichSectionToShow={setWhichSectionToShow}
        whichSectionToShow={whichSectionToShow}
        dogList={dogList}
      >
        {showSection(whichSectionToShow)}
      </Section>
    </div>
  );
}

export default App;
