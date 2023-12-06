export function editFromTemplate() {
  return `
      <form class="form-box" action="">
        <!-- PROFILE -->
        <h3 class="titleForm">Thông tin cá nhân</h3>
        <div class="formProfile">
          <div class="inputProfile">
            <div class="inputProfile_field">
              <label for="">Nhập vào tên của bạn</label>
              <input
                name="username"
                type="text"
                placeholder="Enter your name" />
            </div>

            <div class="inputProfile_field">
              <label for="">Nhập vào link ảnh</label>
              <input
                name="image"
                type="text"
                placeholder="Enter your image link" />
            </div>

            <div class="inputProfile_field">
              <label for="">Nhập vào số điện thoại của bạn</label>
              <input
                name="phone"
                type="text"
                placeholder="Enter your phone number" />
            </div>
            <div class="inputProfile_field">
              <label for="">Nhập vào email của bạn</label>
              <input name="email" type="email" placeholder="Enter your email" />
            </div>
            <div class="inputProfile_field">
              <label for="">Nhập vào công việc hiện tại của bạn</label>
              <input
                name="currentjob"
                type="text"
                placeholder="Enter your current profession" />
            </div>
            <div class="inputProfile_field">
              <label for="">Nhập vào địa chỉ của bạn</label>
              <input
                name="addrres"
                type="text"
                placeholder="Enter your address" />
            </div>

            <div class="inputProfile_field">
              <label for="">Giới thiệu ngắn về bản thân</label>
              <textarea
                placeholder="Enter your introduction"
                name="introduction"
                id="introduction"
                cols="30"
                style="width: 1070px"
                rows="10"></textarea>
            </div>
          </div>
        </div>

        <!-- LANGUGAES, EXPERTISES -->
        <h3 id="title1" class="titleSkill" for="">Kỹ năng cá nhân</h3>
        <div class="formSkills">
          <div class="aboutSkills">
            <label for="">
              <strong>* </strong>Ngôn ngữ thông dụng của bạn</label
            >
            <button class="btnAdd_LanguageSkill">+</button>
            <p id="noteMessage" style="display:none;"> Bạn chưa bổ sung ngôn ngữ. Nếu có hãy thêm vào nhé!!! </p>
          </div>
          <div  id="inputSkills" class="inputSkills">
          </div>
          <center>
            <hr style="margin-top: 20px; width: 100%" />
          </center>
          <div class="aboutSkills">
            <label for=""> <strong>* </strong>Chuyên môn của bạn</label>
            <button class="btnAdd_ExpertisesSkill">+</button>
          </div>
          <div id="inputExpertises" class="inputExpertises">         
          </div>
        </div>

        <!-- EXPERIENCE -->
        <h3 id="title2" class="titleSkill" for="">Kinh nghiệm làm việc</h3>
        <div id="formExperience" class="formExperience">
          <div class="aboutSkills">
            <label for="">
              <strong>* </strong>Kinh nghiệm làm việc từng có</label
            >
            <button class="btnAdd_Experience">+</button>
          </div>
          <div class="input_Experience">
            <div class="inputExperience__First">
              <div class="inputExperience__item">
                <label for="">Tên doanh nghiệp</label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Enter Company Name" />
              </div>
              <div class="inputExperience__item">
                <label for="">Nơi làm việc </label>
                <input
                  name="companyLocal"
                  type="text"
                  placeholder="Enter Location" />
              </div>
              <div class="inputExperience__item inputDate">
                <label for="">Năm làm việc </label>
                <input
                  name="companyYears"
                  type="text"
                  placeholder="Years of work" />
              </div>
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
                  placeholder="Job description"></textarea>
              </div>
            </div>
          </div>
        </div>

        <h3 id="title3" class="titleSkill" for="">Học vấn</h3>
        <div id="formEducation" class="formEducation">
          <div class="aboutSkills">
            <label for=""> <strong>* </strong>Quá trình học vấn cá nhân</label>
            <button class="btnAdd_Education">+</button>
          </div>
     
        </div>

        <h3 id="title4" class="titleSkill" for="">Một số kỹ năng khác</h3>
        <div class="formSkillSummary">
          <div v class="aboutSkills">
            <label for="">
              <strong>* </strong>Kỹ năng có thêm của bạn
              <span style="font-weight: 400; color: gray; font-style: italic"
                >Ví dụ: Kỹ năng mềm, chứng chỉ...</span
              ></label
            >
          </div>
          <div class="input_Education">
            <textarea
              style="margin-top: 10px"
              name="summaryInput"
              placeholder="Enter your skill summary"
              id=""
              cols="30"
              rows="10"></textarea>
          </div>
        </div>

        <button class="submitBtn">THÊM CV</button>
      </form>
    `;
}
