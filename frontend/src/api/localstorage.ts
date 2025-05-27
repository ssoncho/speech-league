export const getToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};

export const saveToken = (data: string) => {
  localStorage.setItem("authToken", data);
};
