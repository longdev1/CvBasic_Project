import axios from "axios";
import { templateInfo } from "../template/infoCVtemplate";
import { editFromTemplate } from "../template/fromEditTemplate";
import { getInfo } from "./getInfo";
import { handleAdd_Skills } from "./handleAddSkillsForm";
import Swal from "sweetalert2";
import { error } from "jquery";

// lấy id từ URL
const urlParams = new URLSearchParams(window.location.search);

// CV ID lấy được
const cvID = urlParams.get("id");

// API
const myAPI = "http://localhost:3000/profiles";

// UPDATECV
async function updateCV(id, data) {
  try {
    await axios.put(`${myAPI}/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Error updating course:", error);
    throw error; // Rethrow error để xử lý ở phần gọi hàm
  }
}

const formEdit = editFromTemplate();
const parser = new DOMParser();
const myForm = parser.parseFromString(formEdit, "text/html").body
  .firstChild as HTMLElement;

async function displayCV() {
  const data = await getInfo(cvID);

  const boxtoView = document.querySelector(".main");
  const boxForm = document.querySelector(".form");

  if (boxtoView && boxForm) {
    try {
      boxtoView.innerHTML = templateInfo(data);
      boxForm.innerHTML = editFromTemplate();
      const formBox = document.querySelector(".form-box");
      if (formBox) {
        // PROFILE
        let userNameInp = formBox.querySelector(
          'input[name="username"]'
        ) as HTMLInputElement;
        userNameInp.value = data.fullName;

        let imagesInp = formBox.querySelector(
          'input[name="image"]'
        ) as HTMLInputElement;
        imagesInp.value = data.image;

        let phoneInp = formBox.querySelector(
          'input[name="phone"]'
        ) as HTMLInputElement;
        phoneInp.value = data.phone;

        let emailInp = formBox.querySelector(
          'input[name="email"]'
        ) as HTMLInputElement;
        emailInp.value = data.email;

        let currentJobInp = formBox.querySelector(
          'input[name="currentjob"]'
        ) as HTMLInputElement;
        currentJobInp.value = data.profession;

        let addressInp = formBox.querySelector(
          'input[name="addrres"]'
        ) as HTMLInputElement;
        addressInp.value = data.address;

        let introductionInp = formBox.querySelector(
          'textarea[name="introduction"]'
        ) as HTMLInputElement;
        introductionInp.value = data.introduction;

        let summaryInp = document.querySelector(
          'textarea[name="summaryInput"]'
        ) as HTMLInputElement;
        summaryInp.value = data.skillbonus;
        // LANGUAGE
        function handleLanguagesInput() {
          const formInputSkills = document.getElementById("inputSkills");
          if (formInputSkills) {
            if (data.languages.length > 0) {
              data.languages.forEach((element) => {
                formInputSkills.innerHTML += `
                   <div class="inputSkill_item">
              <div class="inputSkill__handle">
                <input
                  name="language"
                  type="text"
                  value ="${element}"
                  placeholder="Enter your language" />
                <button type="button" class="removeLanguage">X</button>
              </div>
            </div>
                `;
              });
            }
          }
        }
        handleLanguagesInput();
        // EXPERTISE
        function handleExpertiseInput() {
          const formExpertises = document.getElementById("inputExpertises");
          if (formExpertises) {
            if (data.expertise.length > 0) {
              data.expertise.forEach((element) => {
                formExpertises.innerHTML += `
                 <div class="inputExpertises_item">
              <div class="inputExpertises__handle">
                <input
                  name="expertises"
                  type="text"
                  value ="${element}"
                  placeholder="Enter your expertises" />
                <button type="button" class="removeExpertises">X</button>
              </div>
            </div>
                `;
              });
            }
          }
        }
        // EXPERIENCE
        handleExpertiseInput();
        function handleExperienceInput() {
          const formExperience = document.getElementById("formExperience");
          if (formExperience) {
            formExperience.innerHTML = `
          <div class="aboutSkills">
            <label for=""> <strong>* </strong>Kinh nghiệm làm việc từng có</label>
            <button class="btnAdd_Experience">+</button>
          </div>
          `;
            if (data.experience.length > 0) {
              data.experience.forEach((element) => {
                formExperience.innerHTML += `
                <hr style="margin-top:10px;">
          <div style="margin-top:20px;" class="input_Experience">
           <div class="inputExperience__First">
             <div class="inputExperience__item">
               <label for="">Tên doanh nghiệp</label>
               <input
                 name="companyName"
                 type="text"
                 value= "${element.name}"
                 placeholder="Enter Company Name" />
             </div>
             <div class="inputExperience__item">
               <label for="">Nơi làm việc </label>
               <input name="companyLocal" type="text" value ="${element.local}" placeholder="Enter Location" />
             </div>
             <div class="inputExperience__item inputDate">
               <label for="">Năm làm việc </label>
               <input name="companyYears"  value ="${element.years}" type="text" placeholder="Years of work" />
             </div>
            <button class="remove_ExperienceButton">-</button>
           </div>
           <div class="inputExperience_Second">
             <div class="inputExperience__item inp_textarea">
               <label for="">Mô tả về công việc </label>
               <textarea
                 style="width: 100%"
                 name="companyDesc"
                 id=""
                 cols="30"
                 rows="10"
                 placeholder="Job description">${element.desc}</textarea>
             </div>
           </div>
          `;
              });
            }
          }
        }
        handleExperienceInput();
        function handleEducationInput() {
          const formEducation = document.getElementById("formEducation");
          if (formEducation) {
            formEducation.innerHTML = `
           <div class="aboutSkills">
            <label for=""> <strong>* </strong>Quá trình học vấn cá nhân</label>
            <button class="btnAdd_Education">+</button>
          </div>
          `;
            if (data.education.length > 0) {
              data.education.forEach((element) => {
                formEducation.innerHTML += `
                 <div class="boxEdu_Sub"> 
                <hr style="margin-top:20px;">
                <div style="margin-top:30px;" class="input_Education">
                <div class="inputEducation__item">
                <label for="">Tên trường</label>
                <input name="schoolName" value="${element.schoolName}" type="text" placeholder="Enter School Name" />
                </div>
                <div class="inputEducation__item">
                <label for="">Chuyên ngành</label>
                <input name="schoolMajor"  value="${element.schoolMajor}" type="text" placeholder="Enter Major" />
                </div>
                <div class="inputEducation__item inputDate">
                <label for="">Niên khóa</label>
                <div>
            <input name="schoolYears"  value="${element.schoolYears}" type="text" placeholder="Years of work" />
                <button class="btnRemove_Education">-</button>
                </div>

                </div>
                </div>
                </div>
                `;
              });
            }
          }
        }
        handleEducationInput();

        const updateCVID = cvID;
        console.log(updateCVID);

        formBox.addEventListener("submit", async function (e) {
          e.preventDefault();
          // LANGUAGE VALUE
          let languages: string[] = [];
          const languageInputs = document.querySelectorAll<HTMLInputElement>(
            'input[name="language"]'
          );
          languageInputs.forEach((input) => {
            languages.push(input.value);
          });

          // EXPERTISE VALUE
          let expertises: string[] = [];
          const expertiseInputs = document.querySelectorAll<HTMLInputElement>(
            'input[name="expertises"]'
          );
          expertiseInputs.forEach((input) => {
            expertises.push(input.value);
          });

          // EXPERIENCE VALUE
          /* GET VALUE experience input */
          const experienceInputs = document.querySelectorAll<HTMLInputElement>(
            'input[name="companyName"], input[name="companyLocal"], input[name="companyYears"], textarea[name="companyDesc"]'
          );
          let experiences: {
            name: string;
            local: string;
            years: string;
            desc: string;
          }[] = [];

          for (let i = 0; i < experienceInputs.length; i += 4) {
            const experienceValue = {
              name: experienceInputs[i].value,
              local: experienceInputs[i + 1].value,
              years: experienceInputs[i + 2].value,
              desc: experienceInputs[i + 3].value,
            };
            experiences.push(experienceValue);
          }

          /* GET VALUE Education input */
          const educationInputs = document.querySelectorAll<HTMLInputElement>(
            'input[name="schoolName"], input[name="schoolMajor"], input[name="schoolYears"]'
          );
          let educations: {
            schoolName: string;
            schoolMajor: string;
            schoolYears: string;
          }[] = [];
          for (let i = 0; i < educationInputs.length; i += 3) {
            const educationValue = {
              schoolName: educationInputs[i].value,
              schoolMajor: educationInputs[i + 1].value,
              schoolYears: educationInputs[i + 2].value,
            };
            educations.push(educationValue);
          }

          if (updateCVID) {
            // Tạo hộp thoại xác nhận với SweetAlert
            Swal.fire({
              title: "Xác nhận",
              text: "Bạn có muốn xem CV vừa cập nhật ?",
              icon: "question",
              showCancelButton: true,
              confirmButtonText: "Chấp nhận",
              cancelButtonText: "Hủy bỏ",
            }).then(async (result) => {
              if (result.isConfirmed) {
                await updateCV(updateCVID, {
                  fullName: userNameInp.value,
                  image: imagesInp.value,
                  profession: currentJobInp.value,
                  phone: phoneInp.value,
                  introduction: introductionInp.value,
                  email: emailInp.value,
                  address: addressInp.value,
                  languages: languages,
                  expertise: expertises,
                  experience: experiences,
                  education: educations,
                  skillbonus: summaryInp.value,
                });
                window.location.href = `../views/infoCV.html?id=${cvID}`;
              } else {
                window.location.reload();
              }
            });
          }
        });
      } else {
        console.log("Không có form CV", error);
      }

      await handleAdd_Skills();
    } catch (error) {
      console.log("Lỗi khi xem", error);
    }
  }
}

displayCV();
