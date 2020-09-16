export const API_KEY = "rh3JfAn1m5GCbINlO713xkSQsdgaYdwyyAvAGGtA";

export const fetchNasa = (url) => {
  return fetch(url)
    .then((res) => {
      try {
        return res.json();
      } catch {
        throw new Error("Faild to get photo list");
      }
    })
    .then((nasaList) => nasaList);
};
