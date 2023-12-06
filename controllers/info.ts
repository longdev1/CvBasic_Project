// Xử lý xem chi tiết CV
import axios from "axios"; // import AXIOS
import { templateInfo } from "../template/infoCVtemplate"; // import template info CV
/*
Lấy id từ URL
*/
const urlParams = new URLSearchParams(window.location.search);
const cvID = urlParams.get("id");

// API
const myAPI = "http://localhost:3000/profiles";

const main = document.querySelector(".main");

async function getInfoCV() {
  try {
    if (main) {
      const response = await axios.get(`${myAPI}/${cvID}`);
      const data = response.data;
      main.innerHTML = templateInfo(data);
    }
  } catch (error) {
    console.error("Không tìm được thông tin CV", error);
  }
}

getInfoCV();
