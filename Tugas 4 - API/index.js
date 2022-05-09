const getPoster = (e) => {
  e.preventDefault();

  const query = document.getElementById("search").value;
  const root = document.getElementById("root");

  getData(query)
    .then((data) => {
      if (data.Poster === undefined) {
        root.innerHTML = `<h2>Poster not found</h2>`;
      } else {
        root.innerHTML = `
        <h2>${data.Title}</h2>
        <p>${data.Plot}</p>
        <img src=${data.Poster} />
        `;
      }
    })
    .catch((error) => {
      console.log(error.message);
    });

  document.getElementById("search").value = "";
};

const getData = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${query}&apikey=48865f79`
  );

  if (!response.ok) {
    throw new Error("fetching error");
  }

  const data = await response.json();
  return data;
};
