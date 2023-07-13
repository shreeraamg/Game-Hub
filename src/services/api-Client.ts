import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b588cab90e974c2ba1af0bb1303cccb1",
  },
});
