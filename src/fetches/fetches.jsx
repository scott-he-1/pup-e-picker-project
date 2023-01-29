export const fetchDogList = async () => {
  let response = await fetch("http://localhost:3000/dogs");
  if (!response.ok) {
    throw new Error("Could not fetch dogs");
  }
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const postDog = async (newDogInfo) => {
  let response = await fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newDogInfo),
  });
  if (!response.ok) {
    throw new Error("Could not add new dog");
  }
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const deleteDog = async (id) => {
  let response = await fetch(`http://localhost:3000/dogs/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Could not delete dog");
  }
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const patchFavoriteDog = async (id) => {
  let response = await fetch(`http://localhost:3000/dogs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      isFavorite: true,
    }),
  });
  if (!response.ok) {
    throw new Error("Could not favorite dog");
  }
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const patchUnfavoriteDog = async (id) => {
  let response = await fetch(`http://localhost:3000/dogs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      isFavorite: false,
    }),
  });
  if (!response.ok) {
    throw new Error("Could not unfavorite dog");
  }
  const parsedResponse = await response.json();
  return parsedResponse;
};
