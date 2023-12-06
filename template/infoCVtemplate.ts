export function templateInfo(data) {
  // get value Language data
  const languagesList = data.languages
    .map((language) => `<li>${language}</li>`)
    .join("");

  // get value Expertise data
  const expertiseList = data.expertise
    .map((exper) => `<li>${exper}</li>`)
    .join("");

  // create & render Experience box
  const experienceBox = document.createElement("div");
  const experienceList = data.experience;
  experienceList.forEach((element) => {
    experienceBox.innerHTML += `
      <div class="experience_Content"> 
      <p class="companyName">${element.name}</p>
               <p class="companyLoca">${element.local}</p>
               <p class="yearOperation">${element.years}</p>
               <p class="aboutJob">
                 ${element.desc.replace(/\n/g, "<br>")}
               </p>
      </div>
    `;
  });
  const experienceBoxContent = experienceBox.innerHTML;

  // create & render Education box
  const educationBox = document.createElement("div");
  const educationList = data.education;
  educationList.forEach((element) => {
    educationBox.innerHTML += `
    <div class="education_Content"> 
      <p class="universityName">${element.schoolName}</p>
                <p class="major">${element.schoolMajor}</p>
                <p class="yearOperation">${element.schoolYears}</p>
    </div>
    `;
  });
  const educationBoxContent = educationBox.innerHTML;
  return `
     <div class="backgroundCV">
        <div class="CvLeft"></div>
         <div class="cvCenter">
          <div class="avatar">
  <img src="${data.image}" alt="" />
</div>
          <div class="profileTitle">
            <p class="nameProfile">${data.fullName}</p>
            <p class="jobProfile">${data.profession}</p>
          </div>
        </div>
        <div class="cvRight"></div>
      </div>
      <div class="content_CV">
        <div class="contentCV_Left">
          <div class="cvInfo_Left_Content">
            <div class="aboutProfile">
              <h2>About Me</h2>
              <p>
                ${data.introduction}
              </p>
            </div>
            <div class="contactProfile">
              <div class="contentContact">
                <div class="iconContact">
                  <i class="fa-solid fa-phone iconFont"></i>
                </div>
                <div class="textIcon">
                  <p>+${data.phone}</p>
                </div>
              </div>
              <div class="contentContact">
                <div class="iconContact">
                  <i class="fa-solid fa-envelope iconFont"></i>
                </div>
                <div class="textIcon">
                  <p>${data.email}</p>
                </div>
              </div>
              <div class="contentContact">
                <div class="iconContact">
                  <i class="fa-solid fa-location-dot iconFont"></i>
                </div>
                <div class="textIcon">
                  <p>${data.address}</p>
                </div>
              </div>
            </div>
            <div id="" class="languagesProfile">
              <button>Languages</button>
                ${languagesList}
              
            </div>

            <div class="expertisesProfile">
              <button>Expertises</button>
               ${expertiseList}
            </div>
          </div>
        </div>
        <div class="contentCV_Right">
          <div class="cvInfo_Right_Content">
            <div class="Experience">
              <button>Experience</button>
              ${experienceBoxContent}
            </div>

            <div class="Education">
              <button>Education</button>
             ${educationBoxContent}
            </div>
            <div class="skill_Summary">
              <button>Skill Summary</button>
              <div class="aboutSkill">
                <p>${data.skillbonus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}
