import axios from "axios";
import Swal from "sweetalert2";

const myAPI = "http://localhost:3000/profiles";
export async function deleteCV(idCV) {
  axios.delete(`${myAPI}/${idCV}`);
}
