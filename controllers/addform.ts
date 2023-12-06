import axios from "axios";
import swal from "sweetalert2";
import { handleAdd_Skills } from "./handleAddSkillsForm";

// BTN ADD
const btnAdd_LanguagesSkill = document.querySelector(
  ".btnAdd_LanguageSkill"
) as HTMLElement;
const btnAdd_ExpertisesSkill = document.querySelector(
  ".btnAdd_ExpertisesSkill"
) as HTMLElement;
const btnAdd_Experience = document.querySelector(
  ".btnAdd_Experience"
) as HTMLElement;
const btnAdd_EducationSkill = document.querySelector(
  ".btnAdd_Education"
) as HTMLElement;

const boxInput_Skill = document.querySelector(".inputSkills");
const boxInput_Expertises = document.querySelector(".inputExpertises");

const formBox = document.querySelector(".form-box") as HTMLFormElement;
const formSkills = document.querySelector(".formSkills") as HTMLElement;
const formExperience = document.querySelector(".formExperience") as HTMLElement;
const formEducation = document.querySelector(".formEducation") as HTMLElement;
const formSkillSummary = document.querySelector(
  ".formSkillSummary"
) as HTMLElement;

const submitBtn = document.querySelector(".submitBtn");

// API
const myAPI: string = "http://localhost:3000/profiles";

// Xử lý các nút Add Skill

handleAdd_Skills();

// get API
async function addInfo(data) {
  try {
    const response = await axios.post(myAPI, data);
    console.log("Dữ liệu đã được gửi thành công:", response.data);
    // Xử lý khi gửi dữ liệu thành công
  } catch (error) {
    console.error("Lỗi khi gửi dữ liệu:", error);
    // Xử lý khi gửi dữ liệu thất bại
  }
}

// Xử lý add Form
async function handleAdd() {
  try {
    /*
    GET VALUE
    */
    const usernameValue = formBox.elements["username"].value;
    const phoneValue = formBox.elements["phone"].value;
    const emailValue = formBox.elements["email"].value;
    const currentjobValue = formBox.elements["currentjob"].value;
    const addrresValue = formBox.elements["addrres"].value;
    const introductionValue = formBox.elements["introduction"].value;
    const skillSummaryValue = formBox.elements["summaryInput"].value;
    const imageValue = formBox.elements["image"].value;

    /* GET VALUE languages input */
    const languageInputs = document.querySelectorAll<HTMLInputElement>(
      'input[name="language"]'
    );
    let languages: string[] = [];
    languageInputs.forEach((element: HTMLInputElement) => {
      const valueLanguage = element.value;
      languages.push(valueLanguage);
    });

    /* GET VALUE expertises input */
    const expertiseInputs = document.querySelectorAll<HTMLInputElement>(
      'input[name="expertises"]'
    );
    let expertises: string[] = [];
    expertiseInputs.forEach((element: HTMLInputElement) => {
      const valuesExpertise = element.value;
      expertises.push(valuesExpertise);
    });

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
    //
    const infoCV = {
      image: imageValue,
      fullName: usernameValue,
      profession: currentjobValue,
      introduction: introductionValue,
      phone: phoneValue,
      email: emailValue,
      address: addrresValue,
      languages: languages,
      expertise: expertises,
      experience: experiences,
      education: educations,
      skillbonus: skillSummaryValue,
    };

    console.log(infoCV);
    swal
      .fire({
        title: "Thành công!",
        text: "Bạn đã tạo thành công một CV mới",
        icon: "success",
        confirmButtonText: "OK",
      })
      .then((result) => {
        if (result.isConfirmed) {
          window.location.href = "../index.html";
        }
      });
    await addInfo(infoCV);
  } catch (error) {
    console.log("Lỗi khi add");
  }
}

formBox.addEventListener("submit", function (e) {
  e.preventDefault();
  handleAdd();
});

console.log(submitBtn);

export { handleAdd_Skills };
