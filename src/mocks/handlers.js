import { rest } from "msw";

const baseURL = "https://proclimbers-backend-d69c858b50d1.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}
];