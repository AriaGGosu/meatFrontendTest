const getAllDataFromApi = async () => {
  let response = await fetch(
    "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles"
  );

  let data = await response.json();
  return data;
};

export default getAllDataFromApi