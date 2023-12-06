// db.js
import axios from "axios";
const myAPI = "http://localhost:3000/profiles";
export async function connectAPI() {
  try {
    const response = await axios.get(myAPI);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error("No data found... Please try again!");
  }
}
