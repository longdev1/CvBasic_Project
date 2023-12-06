export async function handleAdd_Skills() {
  const btnAdd_Experience = document.querySelector(
    ".btnAdd_Experience"
  ) as HTMLElement;
  const btnAdd_EducationSkill = document.querySelector(
    ".btnAdd_Education"
  ) as HTMLElement;

  const formBox = document.querySelector(".form-box") as HTMLFormElement;
  const formSkills = document.querySelector(".formSkills") as HTMLElement;
  const formExperience = document.querySelector(
    ".formExperience"
  ) as HTMLElement;
  const formEducation = document.querySelector(".formEducation") as HTMLElement;
  const formSkillSummary = document.querySelector(
    ".formSkillSummary"
  ) as HTMLElement;

  // btn remove languages
  const btnAdd_LanguagesSkill = document.querySelector(
    ".btnAdd_LanguageSkill"
  ) as HTMLElement;

  const boxInput_Skill = document.querySelector(".inputSkills");

  btnAdd_LanguagesSkill.addEventListener("click", function (e) {
    e.preventDefault();
    if (boxInput_Skill) {
      const newInput = document.createElement("div");
      newInput.className = "inputSkill_item";
      newInput.innerHTML = `
          <div class="inputSkill__handle">
            <input name="language" type="text" placeholder="Enter your language" />
            <button type="button" class="removeLanguage">X</button>
          </div>
        `;
      boxInput_Skill.appendChild(newInput);
    }
  });
  if (boxInput_Skill) {
    boxInput_Skill.addEventListener("click", function (e) {
      const target = e.target as HTMLElement;
      if (target && target.classList.contains("removeLanguage")) {
        const inputSkillItems = document.querySelectorAll(".inputSkill_item");
        if (inputSkillItems.length < 2) {
          alert("Không được xóa thêm nữa");
          return;
        }

        const parentElement = target.parentElement?.parentElement;
        if (parentElement) {
          parentElement.remove();
        }

        const labels = document.querySelectorAll(".inputSkill_item label");
      } else {
        return;
      }
    });
  }

  // Btn add expertises
  const btnAdd_ExpertisesSkill = document.querySelector(
    ".btnAdd_ExpertisesSkill"
  ) as HTMLElement;

  const boxInput_Expertises = document.querySelector(".inputExpertises");

  btnAdd_ExpertisesSkill.addEventListener("click", function (e) {
    e.preventDefault();
    if (boxInput_Expertises) {
      const newInput = document.createElement("div");
      newInput.className = "inputExpertises_item";
      newInput.innerHTML = `
                   <div class="inputExpertises__handle">
                <input
                  name="expertises"
                  type="text"
                  placeholder="Enter your expertises" />
                <button type="button" class="removeExpertises">X</button>
              </div>
                `;
      boxInput_Expertises.appendChild(newInput);
    }
  });

  // btn remove expertises
  if (boxInput_Expertises) {
    boxInput_Expertises.addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.target as HTMLElement;
      if (target && target.classList.contains("removeExpertises")) {
        const inputExpertises_item = document.querySelectorAll(
          ".inputExpertises_item"
        );
        if (inputExpertises_item.length < 2) {
          alert("Không được xóa thêm nữa");
          return;
        }
        const parentElement_inputExpertises =
          target.parentElement?.parentElement;
        if (parentElement_inputExpertises) {
          parentElement_inputExpertises.remove();
        }
      } else {
        return;
      }
    });
  }

  // btn add experience

  btnAdd_Experience.addEventListener("click", function (e) {
    e.preventDefault();
    const newExperienceInpunt = `
         <div class="input_Experience">
         <hr>
          <div style = 'margin-top:20px' class="inputExperience__First">
               <div class="inputExperience__item">
                 <label for=""
                   >Tên doanh nghiệp</label
                 >
                 <input
                   name="companyName"
                   type="text"
                   placeholder="Enter Company Name" />
               </div>
               <div class="inputExperience__item">
                 <label for=""
                   >Nơi làm việc
                 </label>
                 <input
                   name="companyLocal"
                   type="text"
                   placeholder="Enter Location" />
               </div>
               <div class="inputExperience__item inputDate">
                 <label for=""
                   >Năm làm việc
                 </label>
                 <input
                   name="companyYears"
                   type="text"
                   placeholder="Years of work" />
               </div>
               <button class="remove_ExperienceButton">-</button>
             </div>
   
             <div class="inputExperience_Second">
               <div class="inputExperience__item inp_textarea">
                 <label for="">Mô tả về công việc </label>
                 <textarea
                   name="companyDesc"
                   id=""
                   cols="30"
                   rows="10"
                   placeholder="Job description"></textarea>
               </div>
             </div>
          </div>
      `;
    formExperience.insertAdjacentHTML("beforeend", newExperienceInpunt);
  });

  formExperience.addEventListener("click", function (e) {
    const target = e.target as HTMLElement;
    if (target && target.classList.contains("remove_ExperienceButton")) {
      e.preventDefault();
      const parentElement_RemoveExperience = target.parentElement
        ?.parentElement as HTMLElement;
      parentElement_RemoveExperience.remove();
    } else {
      // console.log ('No');
    }
  });

  // btn Add Education

  btnAdd_EducationSkill.addEventListener("click", function (e) {
    e.preventDefault();
    const newEducationInput = `
    <div class="boxEdu_Sub"> 
    <hr style="margin-top:20px;">
    <div style="margin-top:30px;" class="input_Education">
    <div class="inputEducation__item">
    <label for="">Tên trường</label>
    <input name="schoolName" type="text" placeholder="Enter School Name" />
    </div>
    <div class="inputEducation__item">
    <label for="">Chuyên ngành</label>
    <input name="schoolMajor" type="text" placeholder="Enter Major" />
    </div>
    <div class="inputEducation__item inputDate">
    <label for="">Niên khóa</label>
    <div>
<input name="schoolYears" type="text" placeholder="Years of work" />
    <button class="btnRemove_Education">-</button>
    </div>

    </div>
    </div>
    </div>
    `;

    formEducation.insertAdjacentHTML("beforeend", newEducationInput);

    formEducation.addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.target as HTMLElement;
      if (target && target.classList.contains("btnRemove_Education")) {
        console.log("Yes");
        const parentElement_RemoveEducation =
          target?.parentElement?.parentElement?.parentElement?.parentElement;

        if (parentElement_RemoveEducation) {
          console.log(parentElement_RemoveEducation);
          parentElement_RemoveEducation.remove();
        }
      }
    });
  });
}
