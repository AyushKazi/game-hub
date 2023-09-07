import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5d6910697ca64c1c9b1e8d19bf970fb6",
  },
});
