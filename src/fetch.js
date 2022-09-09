export const fetchApiData = async (url) => {
  const apiResponse = await fetch(url);
  const responseToJson = await apiResponse.json();
  return responseToJson;
};
