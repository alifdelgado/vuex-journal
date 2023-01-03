import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demo-fc2fe-default-rtdb.firebaseio.com",
});

export default journalApi;
