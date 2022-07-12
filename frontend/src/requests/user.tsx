import api from "./api";

const userApi: { [funcName: string]: Function } = {};

userApi.Register = (username: string, password: string) => {
  api.post("/user/register", { username, password });
};

export default userApi;
