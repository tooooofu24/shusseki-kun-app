import { fetcher } from "../fetcher";

export const getClassrooms = async () => {
  const json = await fetcher({ uri: "/classrooms", method: "GET" });
  return json.results;
};
