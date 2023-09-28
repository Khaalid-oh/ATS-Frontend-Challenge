import axios from "axios";

export const baseUrl = "http://127.0.0.1:4010/api/79.8714911584785";

export const handleFetchApi = async ({
  path,
  method = "get",
  body,
}: {
  path: string;
  method?: "get" | "put";
  body?: any;
}) => {
  let requestConfig: {
    url?: string;
    method: "get" | "put";
    data?: any;
    headers?: any;
  } = {
    method,
  };

  if (path) requestConfig.url = path;
  if (method !== "get" && body) requestConfig.data = body;

  
  const headers = {
    //Header
  };

  return axios({
    baseURL: baseUrl,
    headers: {
      ...headers,
      ...requestConfig.headers,
    },
    ...requestConfig,
  });
};

const fetchData = async () => {
  try {
    const { data } = await handleFetchApi({
      path: "programs/voluptates/application-form",
    });
    console.log(data);

    const putData = await handleFetchApi({
      path: "programs/voluptates/application-form",
      method: "put",
      body: {
        data: {},
      },
    });
    console.log(putData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
