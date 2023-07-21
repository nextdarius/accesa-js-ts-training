function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Data fetched!';
      resolve(data); // Resolve with the result
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: "Data fetched!"
  })
  .catch((error) => {
    console.error(error);
  });

try {
  const data = await fetchData();
  console.log(data);
} catch (error) {
  console.error(error.message); // Output: "Failed to fetch data!"
}
