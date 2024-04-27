export const makeAuthorization = () => {
  const token = localStorage.getItem("token");
  let parsedToken = "";

  if (token !== null) {
    parsedToken = JSON.parse(token);
  }

  return {
    headers: {
      Authorization: `Bearer ${parsedToken}`,
      "Content-Type": "image/jpeg",
    },
  };
};
