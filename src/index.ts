import axios from "axios";
import Swal from "sweetalert2";
import { deleteCV } from "../controllers/delete";
import { connectAPI } from "../models/db";
import { getInfo } from "../controllers/getInfo";

const myAPI = "http://localhost:3000/profiles"; // API

const boxCV = document.querySelector(".boxCV");
console.log(boxCV);
// Hiển thị các CV
async function displayCV() {
  try {
    const data = await connectAPI();
    const boxCV = document.querySelector(".boxCV");
    if (boxCV) {
      data.forEach((element: any, index: number) => {
        boxCV.innerHTML += `
         <div class="cv_Item">
    <a href="./views/infoCV.html?id=${element.id}">
        <div class="imgCv"></div>
        <div class="infoCv">
            <p><span>${element.fullName}</span> - <span>${element.profession}</span></p>
            <div class="dropMenu">
                <i class="fa-solid fa-ellipsis iconInfo"></i>
            </div>
            <div class="dropContent"> 
            <div class="dropbox"> 
            <a class="dropItem" href="./views/editCV.html?id=${element.id}" >
            <i class="fa-solid fa-pen-to-square"></i>
           <p data-id ="${element.id}" class="textEdit"> Sửa </p>
            </a>

            <a class="dropItem">
              <i class="fa-solid fa-copy"></i>
              <p data-id ="${element.id}" class="textDuplicate"> Nhân bản </p>
             </a>

        <a class="dropItem">
          <i class="fa-solid fa-trash-can"></i>
           <p data-id ="${element.id}" class="textDelete"> Xóa </p>
           </a>
          
            </div>
            </div>
        </div>
    </a>
</div>
        `;
        const imgCVs = document.querySelectorAll(".boxCV .cv_Item .imgCv");
        if (imgCVs[index]) {
          (
            imgCVs[index] as HTMLElement
          ).style.backgroundImage = `linear-gradient(to top, rgba(62, 155, 221, 0.75) -50%, rgba(255, 255, 255, 0) 100%), url(${element.image})`;
        }
      });
      // run handleMockup function
      handleMockUp();
      handleDelete();
      handleDuplicate();
    }
  } catch (error) {
    console.error("Error displaying CV:", error);
  }
}

function handleMockUp() {
  // Handle mock-up
  const infoCv = document.querySelectorAll(".infoCv");

  infoCv.forEach((item) => {
    const iconInfo = item.querySelector(".iconInfo");
    const dropContent = item.querySelector(".dropContent") as HTMLElement;

    iconInfo?.addEventListener("click", function (e) {
      e.preventDefault();
      const isDropContentActive = dropContent.classList.contains("show");

      document.querySelectorAll(".dropContent").forEach((content) => {
        content.classList.remove("show");
      });

      if (!isDropContentActive) {
        dropContent.classList.toggle("show");
      }
      e.stopPropagation();
    });
  });

  document.addEventListener("click", function (e) {
    const dropContents = document.querySelectorAll(".dropContent");
    dropContents.forEach((dropContent) => {
      if (!dropContent.contains(e.target as Node)) {
        dropContent.classList.remove("show");
      }
    });
  });
}

// Delete CV

function handleDelete() {
  const dropItem = document.querySelectorAll(".dropItem");
  dropItem.forEach((item) => {
    const deleteBtn = item.querySelector(".textDelete");
    deleteBtn?.addEventListener("click", async function (e) {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const idCV = target.getAttribute("data-id");
      Swal.fire({
        title: "Bạn có chắc muốn xóa CV này không?",
        text: "Nếu bạn xóa. CV sẽ không hoàn tác lại được!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Vâng, tôi muốn xóa",
        cancelButtonText: "Không, tôi muốn hủy",
        customClass: {
          popup: "tahoma-font", // Áp dụng class cho swal
          confirmButton: "custom-swal-button", // Áp dụng class cho nút xác nhận
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Xóa thành công",
            "CV của bạn đã được gỡ bỏ khỏi website !",
            "success"
          ).then(() => {
            window.location.reload();
          });
          deleteCV(idCV);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Đã hủy bỏ thao tác xóa !");
        }
      });
    });
  });
}

// Duplicate CV

async function handleDuplicate() {
  const dropItem = document.querySelectorAll(".dropItem");
  dropItem.forEach((item) => {
    const duplicateBtn = item.querySelector(".textDuplicate") as HTMLElement;
    duplicateBtn?.addEventListener("click", async function (e) {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const idCV = target.getAttribute("data-id");
      if (idCV) {
        try {
          const CVduplicate = await getInfo(idCV);
          if (CVduplicate) {
            // Tìm ID lớn nhất
            const allCVs = await connectAPI();
            const maxID = Math.max(...allCVs.map((cv: any) => cv.id));
            const newID = maxID + 1;

            const newCVduplicate = { ...CVduplicate, id: newID };
            await addCVDuplicate(newCVduplicate);
            window.location.reload();
          }
        } catch (error) {
          console.error("Error duplicating CV:", error);
        }
      }
    });
  });
}

async function addCVDuplicate(data) {
  const response = await axios.post(myAPI, data);
}

// handle Edit

displayCV();
