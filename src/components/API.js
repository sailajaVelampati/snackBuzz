const fetchData = (url, successCallback) => {
  // common fetch funtion
  return fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        successCallback(result);
      },
      (error) => {
        console.log(error);
      }
    );
};

export { fetchData };
