import { api } from "./BaseUrl";

const getHomePageData = async () => {
  try {
    const response = await api.get(
      "/home-page"
    );
    return response.data.data;
  } catch (error: any) {
    if (error.status == 500) {
      getHomePageData();
    }
  }
};

export { getHomePageData };
