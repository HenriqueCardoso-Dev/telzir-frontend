import api from "./api";

export default {
  login: (payload : {email: string, password: string}) => {
    return api.post('login', payload);
  },

  newUser: (data: {
    name: string,
    email: string,
    password: string
  }) => {
    return api.post('user', data);
  }
}