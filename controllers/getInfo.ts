import axios from "axios";
const myAPI = "http://localhost:3000/profiles";
export async function getInfo(cvID) {
  const res = await axios.get(`${myAPI}/${cvID}`);
  const data = await res.data;
  return data;
}
