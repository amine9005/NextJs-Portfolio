export const BASE_URL = process.env.BETTER_AUTH_URL;
// console.log("BASE_URL: ", BASE_URL);

export const apiPaths = {
  AUTH: {
    LOGIN: `${BASE_URL}/user/login`,
    REGISTER: `${BASE_URL}/user/register`,
    GET_PROFILE: `${BASE_URL}/user/profile`,
  },
};
