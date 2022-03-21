import apis from "@/api/apis";

interface ILogin {
  username: string;
  password: string;
}
export const login = (data: ILogin): any => {
  return apis.post("site/test", data);
};
