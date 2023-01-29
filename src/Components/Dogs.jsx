import { DogCard } from "./DogCard";

export const Dogs = ({
  dogList,
  setDogList,
  onDogFavorite,
  onDogUnfavorite,
  onDogRemove,
}) => {
  return (
    <>
      {dogList.map((dog) => (
        <DogCard
          dog={dog}
          key={dog.id}
          id={dog.id}
          setDogList={setDogList}
          onDogFavorite={onDogFavorite}
          onDogUnfavorite={onDogUnfavorite}
          onDogRemove={onDogRemove}
        />
      ))}
    </>
  );
};
